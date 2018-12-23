<template>
  <div id="list">
    <Header :title="title" :back="back"></Header>
    <div class="main">
      <ul class="left">
        <li v-for="(itme,index) in list" :key="index"
        @click="clickhandler(itme,index)"
         :class="flag===itme?'sel':''"
        >{{itme}}</li>
      </ul>
      <div class="right">
          <div :class="divc" class="box">
            <div v-for="(item,index) in shoplist" :key="index">
              <img :src="item.imgpath" alt="">
              <p>-----{{flag}}------</p>
             <productlist :list="item.shop"></productlist>
              </div>
            </div>
      </div>
    </div>
    <tablebar></tablebar>
  </div>
</template>
<script>
  import tablebar from '@/components/common/tablebar.vue';
  import Header from '@/components/common/head.vue';
  import productlist from 'common/productlist.vue';
  import { Indicator } from 'mint-ui';
   export default {
     name:"Categray",
     data:function(){
       return{
         'title':"分类",
         'back':1,
         'list':['水果','蔬菜','炒货','粗茶','淡饭'],
         'imgpath':['/static/category-dryfruit.png','/static/category-fry-a.png','/static/category-cake.png',
         '/static/category-tea.png','/static/category-rice.png'],
         'shoplist':[],
         'flag':'水果',
         'divclass':['scroll1','scroll2','scroll3','scroll4','scroll5'],
         "divc":'scroll1',


       }
     },

     methods:{
       clickhandler:function(s,i){
         this.flag=s;
         this.divc=this.divclass[i];

       }

     },
     mounted:function(){
       Indicator.open({
         text: '加载中...',
         spinnerType: 'double-bounce'
       });
         this.$axios.get("/gb/findshop")
           .then((res) => {
             Indicator.close();
           this.shoplist=res;
             for (var j = 0; j < this.list.length; j++) {
               this.shoplist[j] = {};
               this.shoplist[j]['imgpath'] = this.imgpath[j];
               this.shoplist[j]['shop'] = [];
               for (var i = 0; i < res.data.length; i++) {
                 for (var prop in res.data[i]) {
                   if (res.data[i][prop] == this.list[j]) {
                     this.shoplist[j]['shop'].push(res.data[i]);
                   }
                 }
               }
             }

           })
           .catch((err) => {
             console.log(err);
           })
     },
     components:{
       tablebar,
       Header,
       productlist,
     }
   }
</script>
<style lang="less" scoped>
  @import url("../../../style/main.less");
  #list{
    .f-z(30px);

    .main{
      position: absolute;
      .top(83);
      .bottom(120);
      width:100%;
      .left{
        float: left;
        height: 100%;
        width:20%;
        border: 1px solid #cdcdcd;
        li{
          width:100%;
          .f-z(40);
          .h(100);
          .l-h(100);
          text-align: center;
        }
        .sel{
            border-left:2px solid @bgcolor ;
          color:#A91C76;
        }
      }
      .scroll1{
        transform: translate(0,0);
      }
      .scroll2{
        transform: translate(0,-100%);
      }
      .scroll3{
        transform: translate(0,-200%);
      }
      .scroll4{
        transform: translate(0,-300%);
      }
      .scroll5{
        transform: translate(0,-400%);
      }
      .right{
        float: right;
        width:79%;
        height:100%;
        overflow:hidden;
        .box{
          transition: all 1s;
          width:95%;
          margin:0 auto;
        }
       div {
            height:100%;
         img {
           width: 100%;
           .m-b(40);
           .m-t(20);
         }
         p {
           text-align: center;
           .l-h(50);
           color:@bgcolor;
         }
         #list /deep/ ul {
           justify-content: start;
           li {
             width: 30%;
             .m-r(20);
             .m-t(20);
           }
         }
       }

      }
    }
  }

</style>
