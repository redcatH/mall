<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//  import HelloWorld from '@/components/HelloWorld.vue'
import NavHeader from "@/components/NavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
import jsonp from "jsonp";
export default {
  name: "Home",
  components: {
    //  HelloWorld
    NavHeader,
    NavFooter
  },
  data() {
    return {
      age: 30
    };
  },
  mounted() {
    let url =
      "https://www.easy-mock.com/mock/5e8fee48572a914be2e35422/example/query?name=5";
    jsonp(url, (error, res) => {
      console.log(res);
    });
  }
};
</script>
