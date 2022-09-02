/*
Use the following code to retrieve configured secrets from SSM:

const aws = require('aws-sdk');

const { Parameters } = await (new aws.SSM())
  .getParameters({
    Names: ["SPOTIFY_CLIENT_SECRET"].map(secretName => process.env[secretName]),
    WithDecryption: true,
  })
  .promise();

Parameters will be of the form { Name: 'secretName', Value: 'secretValue', ... }[]
*/
const RequestUtils = require('/opt/RequestUtils')
const aws = require('aws-sdk');

const prepareResponse = (error, token) => {
  let url = process.env.APP_URL
  if (error) {
    url += '/start?error=' + error
  } else {
    url += '/setup?provider=spotify&token=' + token
  }

  console.log('redirect url', url)

  return {
    statusCode: 302,
    headers: {
      Location: url,
    }
  }
}

exports.handler = async (event) => {

  console.log(event)

  const { Parameter: SpotifyClientSecret } = await (new aws.SSM())
    .getParameter({
      Name: process.env.SPOTIFY_CLIENT_SECRET,
      WithDecryption: true,
    })
    .promise();

  console.log({ SpotifyClientSecret });

  const code = event.queryStringParameters.code;
  const state = event.queryStringParameters.state || null;
  const stateCookie = event.multiValueHeaders.Cookie.find(c => c === `spotify_auth_state=${state}`);

  if (!stateCookie) {
    return prepareResponse('missing_state');
  }

  const storedState = stateCookie.split('=').pop();
  if (state === null || state !== storedState) {
    return prepareResponse('state_mismatch');
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = SpotifyClientSecret.Value;

  try {
    console.log({ code });

    const data = {
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      grant_type: 'authorization_code'
    }

    // convert the form data into an urlencoded string
    const formData = RequestUtils.urlEncode(data);

    const response = await RequestUtils.request({
      hostname: 'accounts.spotify.com',
      path: '/api/token',
      port: 443,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        //'Content-Length': Buffer.byteLength(formData),
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      }
    }, formData);

    const access_token = response.body.access_token;
    const expires_in = response.body.expires_in;
    const refresh_token = response.body.refresh_token;

    console.log({ access_token, expires_in, refresh_token });

    return prepareResponse();

  } catch (e) {
    console.error(e)
    return prepareResponse('invalid_token');
  }
}
