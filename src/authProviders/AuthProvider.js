import SpotifyAuthProvider from "@/authProviders/SpotifyAuthProvider";

export default class AuthProvider {
  provider;

  constructor(provider, dance) {
    switch (provider) {
      case 'spotify':
        this.provider = new SpotifyAuthProvider(dance.accessToken, dance.refreshToken, dance.tokenExpiresAt);
        break;
      default:
        throw new Error('Invalid provider in AuthProvider.js.')
    }
  }

  getToken() {
    return this.provider.getToken();
  }
}