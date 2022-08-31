const crypto = require("crypto");
module.exports.index = async () => {
  const state = crypto.randomBytes(8).toString('hex')

  const qs = new URLSearchParams();
  qs.append('response_type', 'code');
  qs.append('client_id', process.env.SPOTIFY_CLIENT_ID)
  qs.append('scope', 'user-read-private user-read-email')
  qs.append('redirect_uri', process.env.SPOTIFY_REDIRECT_URI)
  qs.append('state', state)

  const spotifyAuthUrl = `https://accounts.spotify.com/authorize?${qs.toString()}`;

  return {
    statusCode: 302,
    headers: {
      Location: spotifyAuthUrl,
      'Set-Cookie': `spotify_auth_state=${state}`
    }
  };
}