import {isBefore, parseISO, addSeconds} from "date-fns";
import {API} from "aws-amplify";
import store from '../../store'

const SpotifyWebApi = require('spotify-web-api-js');

export default class SpotifyProvider {

  token;
  client;
  refreshToken;
  tokenExpiresAt;

  constructor(token, refreshToken, tokenExpiresAt) {
    this.token = token;
    this.refreshToken = refreshToken;
    this.tokenExpiresAt = tokenExpiresAt;

    this.client = new SpotifyWebApi();
    this.client.setAccessToken(token);
  }

  async refreshAccessToken() {
    console.log('refresh access token')
    const refreshDate = parseISO(this.tokenExpiresAt);
    console.log(this.token, this.refreshToken, this.tokenExpiresAt, refreshDate)
    if (isBefore(refreshDate, new Date())) {
      try {
        const response = await API.get('weTheDancersRestApi', '/spotify/refreshToken', {
          queryStringParameters: {
            refreshToken: this.refreshToken
          }
        })

        console.log({ response })

        this.token = response.access_token;
        this.client.setAccessToken(this.token);
        this.tokenExpiresAt = addSeconds(new Date(), response.expires_in);

        const dance = store.state.dance;
        store.commit('setDance', {
          ...dance,
          accessToken: this.token,
          tokenExpiresAt: this.tokenExpiresAt
        })
      } catch (e) {
        console.error({ e })
      }
    }
  }

  async search(query, limit, offset) {
    if (!limit) {
      limit = 20
    }

    if (!offset) {
      offset = 0
    }

    try {
      return this.client.search(query, ['track'], limit, offset)
    } catch (error) {
      console.error(error)
      if (error.status === 401) {
        await this.refreshAccessToken();
        return this.client.search(query, ['track'], limit, offset)
      }
    }
  }

  async getCurrentTrack() {
    try {
      return await this.client.getMyCurrentPlayingTrack();
    } catch (error) {
      console.error({ error })
      if (error.status === 401) {
        // 401 error, refresh the token and try again.
        await this.refreshAccessToken();
        return await this.client.getMyCurrentPlayingTrack();
      }
    }
  }

  async getPlaylists() {
    return this.client.getUserPlaylists();
  }

  async createPlaylist(userId, name, description) {
    return this.client.createPlaylist(userId, {
      name,
      description
    })
  }

  async getPlaylistSongs(playlistId) {
    if (!playlistId) {
      throw new Error('SpotifyProvider: PlaylistId is required to get tracks for a playlist.')
    }

    return this.client.getPlaylistTracks(playlistId)
  }
}