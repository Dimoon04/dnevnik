<template>
  <div class="hello">
    <h2>Рейтинг</h2>
   {{ rats }}
  </div>
</template>

<script>
import { store } from '../store/index'
export default {
  
  name: 'HelloWorld',
  data(){
    return{
      rats: store.state.ratings
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
