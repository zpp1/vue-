<template>
  <div id="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,inde) in list" :key="inde">
          <img :src="item.url | urlfilter" alt="">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from "swiper"
  import Vue from "vue"
  export default {
    name:'Banner',
    data:function(){
      return{

      }
    },
    props:['list'],
    watch:{
      list:function(){
            Vue.nextTick(()=>{
              var mySwiper = new Swiper ('.swiper-container', {
                autoplay:true,
                loop: true, // 循环模式选项
                autoplay: {
                  disableOnInteraction: false,
                },
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
              })

            })
      }
    },
    filters:{
      urlfilter:function(val){
        return "http://localhost:3000/"+val;
      }
    },

  }
</script>
<style lang="less" scoped>
  @import url("../../../style/main.less");
  @import url("../../../../node_modules/swiper/dist/css/swiper.css");
  #banner {
    .m-t(83);
    img {
      .w(828);
    }
  }

</style>
