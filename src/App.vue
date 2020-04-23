<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view></router-view>
  </div>
</template>
<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/button.scss";
@import "./assets/scss/base.scss";

</style>

<script>
export default {
  name:"app",
  data() {
    return {};
  },
  methods: {
    getUserInfo() {
      this.axios
        .get("/user", {
          params: {}
        })
        .then((res={}) => {
          this.$store.dispatch('saveUserName',res.username);
        });
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        console.log(res);
        this.$store.dispatch('saveCartCount',res);
      });
    }
  },
  mounted() {
   
    this.getUserInfo();
    this.getCartCount();
    //to do vuex
  }
};
</script>