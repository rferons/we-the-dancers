const crypto = require("crypto");

exports.handler = async () => {
  const state = crypto.randomBytes(8).toString('hex')

  const qs = new URLSearchParams();
  qs.append('response_type', 'code');
  qs.append('client_id', process.env.SPOTIFY_CLIENT_ID)
  qs.append('scope', 'user-read-currently-playing user-read-email playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-read-playback-state')
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
};
