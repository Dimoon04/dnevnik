<template>
  <div id="app">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>

import EmptyLayout from './layouts/EmptyLayout.vue';
import MainLayout from './layouts/MainLayout.vue';


export default {
  name: 'app',
  components: {
    EmptyLayout, MainLayout
  },
  computed:{
    layout(){
      // console.log(this.$route.meta)
      return (this.$route.meta.layout || 'main') +'-layout'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
