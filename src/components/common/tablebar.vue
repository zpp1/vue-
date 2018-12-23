<template>
  <div id="tablebar">
    <ul>
        <router-link v-for="(item,index) in list" :to="item.path" tag="li"
                     active-class="selbar"
        :key="index">
          <span :class="item.icon" ></span>
          {{item.title}}

        </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name:"TableBar",
    data:function(){
      return{
        list:[
          {'title':'主页','path':"/home",'icon':'glyphicon glyphicon-home'},
          {'title':'分类','path':"/categray",'icon':'glyphicon glyphicon-menu-hamburger'},
          {'title':'购物车','path':"/shopcar",'icon':'glyphicon glyphicon-shopping-cart'},
          {'title':'我的','path':"/my",'icon':"glyphicon glyphicon-user"},
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../../style/main.less';
  @import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
  #tablebar{
    position: fixed;
    bottom:0;
    left:0;
    .w(828);
    .h(120);
        ul{
          display: flex;
          justify-content: space-around;
          background:#f6f6f6;
          align-items: center;
          height:100%;
          li{
            .f-z(23);
            color:#c2bdb9;
            display: flex;
            flex-direction: column;
            span{
              .f-z(53);
              .m-b(10);
            }
          }
        }
      .selbar{
        color:#C2873F;
      }
  }

</style>
