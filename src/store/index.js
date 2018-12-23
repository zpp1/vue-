import vue from 'vue';
import vuex from 'vuex';
vue.use(vuex);
import shopcar from './shopcar/index.js';
let store=new vuex.Store({
  modules:{
    shopcar:shopcar,
  }
})
export default store;
