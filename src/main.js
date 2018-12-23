// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios';
import reset from "./style/reset.less";
import router from "@/router/router.js";
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import store from '@/store/index.js';
Vue.use(MintUI);
axios.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
Vue.config.productionTip = false;
Vue.prototype.$axios=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App },
   template: '<App/>',
  router,
  store,
})
