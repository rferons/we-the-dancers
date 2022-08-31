const RequestUtils = require('../../utils/RequestUtils');

module.exports.index = async (event) => {
  const danceCode = event.queryStringParameters.code;
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

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

    return {
      statusCode: 200
    }
  } catch (err) {
    return {
      statusCode: 500,
      statusMessage: err
    }
  }

}