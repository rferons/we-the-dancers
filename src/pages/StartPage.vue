<template>
  <div>
    <h1>Choose a Music Provider Below</h1>

    <p v-if="$route.query.error">
      Dang. Something happened.
      {{ $route.query.error }}
    </p>

    <spotify-login />
  </div>
</template>
<script>
import SpotifyLogin from '../components/MusicProviders/Spotify/SpotifyLogin'
export default {
  components: { SpotifyLogin }
}
</script>