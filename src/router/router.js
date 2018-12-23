import Vue from 'vue';
import vueRouter from 'vue-router';
import Home from 'ui/home/home.vue';
import My from 'ui/my/my.vue';
import Categray from 'ui/categray/categray.vue';
import Shopcar from 'ui/shopcar/shopcar.vue';
import notfound from '@/components/common/notfound.vue';
import fruitmenu from 'ui/Them/fruitmenu.vue';
import details from 'ui/details/datails.vue';

Vue.use(vueRouter);
const router=new vueRouter({
  routes:[
    {path:"/",redirect:"/home",},
    {path:"/home",component:Home},
    {path:"/my",component:My},
    {path:"/categray",component:Categray},
    {path:"/shopcar",component:Shopcar},
    {path:"/theme/:id/:title/:img",component:fruitmenu,name:"fruit"},
    {path:"/details/:id",component:details},
    {path:"**",component:notfound},
  ]

})
export default router;
