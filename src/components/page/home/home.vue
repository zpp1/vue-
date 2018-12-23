<template>
  <div id="home">
      <Header :title="title"></Header>
    <Banner :list="bannerlist"></Banner>
    <div class="them">
      <p>精选主题</p>
      <ul>
        <li v-for="(item,index) in list" :key="index" :class="index===(list.length-1)?'last':''"
            @click="themlist(item)">
          <img :src="item.img" alt="">
        </li>
      </ul>
    </div>
    <div class="list">
      <p>最近新品</p>
      <Productlist :list="productlist"></Productlist>
    </div>
    <tablebar></tablebar>
  </div>
</template>
<script>
  import { Indicator } from 'mint-ui';
  import Header from '../../common/head.vue';
  import Banner from './banner.vue';
  import tablebar from '../../common/tablebar.vue';
  import Productlist from '@/components/common/productlist.vue';
  export default {
    name:"home",
    data:function(){
      return{
        'title':"零食商贩",
        'list':[{'msg':"美味水果世界",'lid':2,'img':'/static/1@theme.png'},
          {'msg':"新品首发",'lid':1,'img':'/static/2@theme.png'},
          {'msg':"做个干物女",'lid':3,'img':'/static/3@theme.png'},
        ],
        productlist:[],
        'bannerlist':[],
      }
    },
    methods:{
      themlist:function(s){
          var arr=s['img'].split(".");
          var path=arr[0]+"-head."+arr[1];
            this.$router.push({name:'fruit',params:{id:s.lid,'title':s.msg,'img':path}});
        }
    },

    components:{Header,Banner,tablebar,Productlist},
    created:function(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'double-bounce'
      });
      this.$axios.get("/gb/indexshop")
        .then((res)=>{
          Indicator.close();
        this.productlist=res.data
        })
        .catch((err)=>{
        console.log(err);
        });
      this.$axios.post("/gb/getbanner")
        .then((res)=>{
       this.bannerlist=res.data
        })
        .catch((err)=>{
        console.log(err);
        })
    }
  }

</script>
<style lang="less" scoped>
  @import "../../../style/main.less";
.them{
  width:100%;
  p{
    .h(108);
    .f-z(34);
    color:#a9936c;
    text-align: center;
    .l-h(108);

  }
  ul{
    display: flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: space-between;
    li{
      width:49%;
      img{
        width:100%;

      }

    }
    .last{
      width:100%;
      .m-t(10);
    }

  }
}
  .list {
     width:100%;
    p {
      .h(90);
      .f-z(34);
      color: #a9936c;
      text-align: center;
      .l-h(90);

    }
  }
</style>
