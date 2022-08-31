<template>
  <Button @click="login">Spotify Login</Button>
</template>
<script>
import Button from '../../DancerButton'
export default {
  components: { Button },
  methods: {
    login() {
      location.href = process.env.VUE_APP_API_URL + '/spotify/login'
    }
  }
}
</script>