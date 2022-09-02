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
const RequestUtils = require('/opt/RequestUtils');
const aws = require('aws-sdk');

exports.handler = async (event) => {

  const { Parameter: SpotifyClientSecret } = await (new aws.SSM())
    .getParameter({
      Name: process.env.SPOTIFY_CLIENT_SECRET,
      WithDecryption: true,
    })
    .promise();

  const danceCode = event.queryStringParameters.code;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = SpotifyClientSecret.Value;

  // get the refresh token from the database
  const refresh_token = 'abc123';

  try {

    const data = {
      refresh_token,
      grant_type: 'refresh_token'
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
        'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
      }
    }, formData);

    const access_token = response.body.access_token;
    const expires_in = response.body.expires_in;
    const refresh_token = response.body.refresh_token;

    console.log({ access_token, expires_in, refresh_token });

    return {
      statusCode: 200
    }
  } catch (err) {
    return {
      statusCode: 500,
      statusMessage: err
    }
  }
};
