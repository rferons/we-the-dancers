<template>
  <div id="inner-container">
    <lottie-file src="https://assets7.lottiefiles.com/temp/lf20_zPWMRz.json" :width="250" :height="250" />

    <h1>We The Dancers</h1>

    <label for="code">Join A Dance Session</label>
    <text-field v-model="code" name="code" class="dance-code-input" />
    <Button @click="$router.push(`/${code}`)">Join</Button>

    <router-link to="/start" style="margin-top: auto">Start a New Dance Session</router-link>
  </div>
</template>

<script>
import Button from '../components/DancerButton'
import LottieFile from '../components/LottieFile'
import TextField from '../components/FormFields/DTextField'

export default {
  components: { Button, LottieFile, TextField },
  data() {
    return {
      code: null
    }
  }
}

</script>

<style>
#inner-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95vh;
}

.dance-code-input {
  margin-bottom: 20px;
}
</style>