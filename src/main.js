import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import env from './env'


axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000;
//根据环境变量获取URL地址
axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    console.log("错误");
    Window.location.href = '/#/login'
  } else {
    alert(res.msg);
  }
});

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')