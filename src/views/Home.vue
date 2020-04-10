<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      age:30
    }
  },
  mounted(){
    let url="https://www.easy-mock.com/mock/5e8fee48572a914be2e35422/example/query?name=5";
    axios.get(url).then(()=>{

    })
   }
}
</script>
