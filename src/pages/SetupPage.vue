<template>
  <div class="setup-page-container">
    <h1>Setup</h1>
<!--    <p>{{ $route.query.provider }}</p>
    <p>{{ $route.query.access_token }}</p>
    <p>{{ $route.query.expires_in }}</p>
    <p>{{ $route.query.refresh_token }}</p>-->

    <h2>Create Admin Pin</h2>
    <d-text-field v-model="sessionSettings.adminPin" placeholder="please not 1234" />
    <p style="text-align: left">This pin is used to change and manage session settings</p>

    <h2>Select a Playlist</h2>
    <d-autocomplete
        v-model="sessionSettings.selectedPlaylist"
        :items="playlists"
        placeholder="select playlist"
        @input="search = $event" />

    <h2>Additional Settings</h2>
    <d-checkbox v-model="sessionSettings.disableExplicitSongs" label="disable explicit songs" />

    <d-button class="start-button" @click="letThePartyBegin">Start The Dance Already!</d-button>
  </div>
</template>
<script>
import DButton from "@/components/DancerButton";
import DCheckbox from "@/components/FormFields/DCheckbox";
import DTextField from "@/components/FormFields/DTextField";
import DAutocomplete from "@/components/FormFields/DAutocomplete";
import MusicProvider from "@/musicProviders/MusicProvider";

export default {
  components: { DAutocomplete, DButton, DCheckbox, DTextField },
  data: () => ({
    musicProvider: null,
    search: null,
    sessionSettings: {
      adminPin: null,
      disableExplicitSongs: true,
      selectedPlaylist: null
    },
    playlists: [],
    newPlaylistName: ''
  }),
  methods: {
    async letThePartyBegin() {
      const settings = {
        ...this.sessionSettings,
        provider: this.$route.query.provider,
        accessToken: this.$route.query.access_token,
        refreshToken: this.$route.query.refresh_token,
        expiresIn: this.$route.query.expires_in,
      }
      console.log({ settings });
      const dance = await this.$store.dispatch('createNewDanceSession', settings);
      this.$store.commit('setDance', dance);
      this.$router.push(`/${dance.code}`)
    }
  },
  mounted() {
    this.musicProvider = new MusicProvider(this.$route.query.provider, this.$route.query.access_token)
    this.musicProvider.getPlaylists().then(response => {
      this.playlists = response.items.map(p => ({ id: p.id, name: p.name }));
    });
  }
}
</script>
<style>
.setup-page-container {
  max-width: 450px;
  margin: 0 auto;
}
.start-button {
  margin-top: 25px;
}
</style>