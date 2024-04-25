<template>
  <div class="about">
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/">login</router-link>
    </nav>
    <h1>This is an about page</h1>
    
  </div>
</template>
<script>
import {store} from '../store/index'
export default {
  data(){
    return{
      rat: ""
    }
  },
  methods:{
    asd(){
      
      store.dispatch('bindRat')
      this.rat = store.state.ratings
      console.log('rat', this.rat)
    }
  }
}
</script>
