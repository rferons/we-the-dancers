import SpotifyProvider from "@/musicProviders/spotify/SpotifyProvider";

export default class MusicProvider {

  provider;
  token;
  refreshToken;
  tokenExpiresAt;
  settings = {};

  constructor(provider, token, refreshToken, tokenExpiresAt, settings) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.tokenExpiresAt = tokenExpiresAt;
    this.settings = settings;

    switch (provider) {
      case 'spotify':
        this.provider = new SpotifyProvider(this.token, this.refreshToken, this.tokenExpiresAt)
        break;
      default:
        throw new Error('Invalid music provider ' + provider)
    }
  }

  async search(search, limit, offset) {
    return this.provider.search(search, limit, offset);
  }

  async getCurrentTrack() {
    return this.provider.getCurrentTrack();
  }

  async getPlaylists() {
    return this.provider.getPlaylists();
  }

  async createPlaylist() {
    return this.provider.createPlaylist();
  }

  async getPlaylistSongs() {
    return this.provider.getPlaylistSongs();
  }
}