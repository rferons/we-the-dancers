<template>
  <div id="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  background-color: #333333;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Chakra Petch', sans-serif;
}

h1 {
  font-size: 48px;
  text-shadow: 3px 3px hotpink;
}

a {
  color: #02ecec;
}

label {
  font-size: 24px;
  font-family: 'Chakra Petch', sans-serif;
}

#container {
 margin: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>
