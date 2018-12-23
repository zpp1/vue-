<template>
  <div id="fruit">
    <Header :title="title" :back="back"></Header>
    <img :src="src" alt="">
    <productlist :list="list"></productlist>
  </div>
</template>

<script>
  import Header from 'common/head.vue';
  import productlist from 'common/productlist.vue';
  import { Indicator } from 'mint-ui';

  export default {
    name:"Friult",
    data:function(){
      return{
        'title':'',
        'back':1,
        'list':[],
        src:'',
      }
    },
    components:{
      Header,productlist,
    },

    created:function(){

        this.title = this.$route.params.title;
        this.src = this.$route.params.img;
      Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce',
      });
      this.$axios.get('/gb/findshop?id=' + this.$route.params.id)
          .then((res) => {
            Indicator.close();
            this.list = res.data;

          })

    }

  }
</script>
<style lang="less" scoped>
@import "../../../style/main.less";
#fruit{
  img{
    width:100%;
    .m-b(15);
    .m-t(83);
  }

  }

</style>
