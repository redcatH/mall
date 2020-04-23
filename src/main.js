import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import router from './router'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'

// import env from './env'



const mock = false;
if (mock) {
  require('./mock/api')
}

axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000;
//根据环境变量获取URL地址
// axios.defaults.baseURL = env.baseURL;
axios.interceptors.response.use(function (response) {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    console.log("错误");
    window.location.href = "/#/login";
    return Promise.reject(res);
  } else {
    alert(res.msg);
    return Promise.reject(res); //抛出reject 不会进入then
  }
});
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')