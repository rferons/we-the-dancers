import { isBefore, parseISO } from "date-fns";

export default class SpotifyAuthProvider {

  token;
  refreshToken;
  expiresAt;

  constructor(token, refreshToken, tokenExpiredAt) {
    const now = new Date();
    this.expiresAt = parseISO(tokenExpiredAt);

    if (isBefore(this.expiresAt, now)) {
      // token is expired and need to use the refresh token to get a new one.
      this.refreshAccessToken();
    }
  }

  getToken() {
    return this.token;
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  getExpiresAt() {
    return this.expiresAt();
  }

  async refreshAccessToken() {
    const response = fetch(process.env.VUE_APP_API_URL + '/spotify/refreshToken?refreshToken=' + this.getRefreshToken())
      .then((response) => response.json())
      .then((data) => console.log(data));

  }
}