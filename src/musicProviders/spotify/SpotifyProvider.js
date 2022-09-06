const SpotifyWebApi = require('spotify-web-api-js');

export default class SpotifyProvider {

  token;
  client;

  constructor(token) {
    this.token = token;

    this.client = new SpotifyWebApi();
    this.client.setAccessToken(token);
  }

  async search() {}
  async getCurrentTrack() {}
  async getPlaylists() {
    return this.client.getUserPlaylists();
  }
  async createPlaylist() {}
  async getPlaylistSongs() {}
}