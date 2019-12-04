<template>
  <div id="app">
    <div class="logo" alt="Vue logo" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld
  }
})
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
  background-color: @white-bg-color;
  .logo {
    width: 180px;
    height: 180px;
    background: url('~@/assets/image/logo.png') no-repeat;
    background-size: cover;
  }
}
</style>
