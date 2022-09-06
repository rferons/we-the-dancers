import SpotifyProvider from "@/musicProviders/spotify/SpotifyProvider";

export default class MusicProvider {

  provider;
  token;
  settings = {};

  constructor(provider, token, settings) {
    this.token = token;
    this.settings = settings;

    switch (provider) {
      case 'spotify':
        this.provider = new SpotifyProvider(this.token)
        break;
      default:
        throw new Error('Invalid music provider ' + provider)
    }
  }

  async search() {
    return this.provider.search();
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