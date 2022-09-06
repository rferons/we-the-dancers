import { createStore } from 'vuex'
import { DataStore } from "@aws-amplify/datastore";
import { Dance, DanceStatus } from '@/models'
import StringUtils from "@/utils/StringUtils";
import { addSeconds } from "date-fns";

const store = createStore({
  state() {
    return {
      dance: {}
    }
  },
  getters: {
    danceCode(state) {
      state.dance.code
    }
  },
  mutations: {
    setDance(state, dance) {
      state.dance = dance;
    }
  },
  actions: {
    async createNewDanceSession({ actions }, data) {
      console.log({ actions });
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
  },
})

export default store;