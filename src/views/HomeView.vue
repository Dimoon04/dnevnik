<template>
  <div class="home">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/">login</router-link>
    </nav>
    <img alt="Vue logo" src="../assets/logo.png">
    
    <h1>ratings</h1>
    <button @click="sost()">Состояние входа в акк</button>
    
  </div>
</template>

<script>
import {store} from '../store/index'

export default {
  name: 'HomeView',
  data(){
    return{
      
    }
  },
  components: {

  },
  computed:{
    
  },
  methods:{
    sost(){
      console.log(store.state.user)
    }
  },
  watch:{
    
  }
}
</script>
