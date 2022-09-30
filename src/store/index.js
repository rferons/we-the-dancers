import { createStore } from 'vuex'
import { DataStore } from "@aws-amplify/datastore";
import { Dance, DanceStatus } from '@/models'
import StringUtils from "@/utils/StringUtils";
import { addSeconds } from "date-fns";

const store = createStore({
  state() {
    return {
      dance: {},
      musicProvider: {},
    }
  },
  getters: {
    danceCode(state) {
      state.dance.code
    },
  },
  mutations: {
    setDance(state, dance) {
      state.dance = dance;
    },
    setMusicProvider(state, provider) {
      state.musicProvider= provider
    }
  },
  actions: {
    async createNewDanceSession(context, data) {
      return DataStore.save(
        new Dance({
          code: StringUtils.random(),
          pin: data.adminPin,
          status: DanceStatus.ACTIVE,
          disableExplicitSongs: data.disableExplicitSongs,
          playlistId: data.selectedPlaylist.id,
          musicProvider: data.provider,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          tokenExpiresAt: addSeconds(new Date(), data.expiresIn).toISOString()
        })
      )
    },
    async createSongRequest({ state }, song) {
      return DataStore.save(
        new Request({
          songId: song.id,
          dance: state.dance
        })
      )
    }
  },
})

export default store;