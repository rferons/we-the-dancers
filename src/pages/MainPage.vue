<template>
 <div>
   <h1>We The Dancers</h1>
   <p>code: {{ $route.params.code }}</p>
   <p>access token expiration: {{ dance.expiresAt }}</p>

   <div v-if="currentTrack">
     {{ currentTrack.item.name }}
   </div>

   <d-button v-if="dance" @click="showSongRequestModal = true">Open song request</d-button>
   <song-request-modal v-model="showSongRequestModal" />

   <div v-if="dance.showSongsInPlaylist">
     Up next...
   </div>

   <div>
     What the people want..
   </div>
 </div>
</template>

<script>
import { DataStore } from 'aws-amplify'
import {Dance, DanceStatus} from "@/models";
import MusicProvider from "@/musicProviders/MusicProvider";
import SongRequestModal from "@/components/SongRequestModal";
import DButton from "@/components/DancerButton";

export default {
  components: { DButton, SongRequestModal },
  data: () => ({
    currentTrack: null,
    dance: {},
    showSongRequestModal: false
  }),
  async mounted() {
    this.dance = await this.getDance();

    const musicProvider = new MusicProvider(this.dance.musicProvider, this.dance.accessToken, this.dance.refreshToken, this.dance.tokenExpiresAt);
    this.$store.commit('setMusicProvider', musicProvider);

    this.currentTrack = await musicProvider.getCurrentTrack();
  },
  methods: {
    async getDance() {
      try {
        const dances = await DataStore
            .query(Dance, (c) => {
              return c
                  .code('eq', this.$route.params.code)
                  .status('eq', DanceStatus.ACTIVE)
            })

        if (dances.length === 0) {
          this.$router.push({path: `/?error=Dance Code ${this.$route.params.code} is invalid`})
        }

        const dance = dances[0];
        this.$store.commit('setDance', dance)

        return dance;
      } catch (e) {
        console.error(e)
        this.$router.push({path: `/?error=${e}`})
      }
    }
  }
}
</script>