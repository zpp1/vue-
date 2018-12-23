<template>
  <div id="not">
    <div class="tip">
      没找到网页。还剩
      {{time}}
      秒跳回到首页
    </div>
  </div>
</template>
<script>
  export default {
    name:"nofound",
    data:function(){
      return{
        'time':3,
        'id':"",
      }
    },
    methods:{
      dest:function(){
        this.$destroy();
      }
    },
    watch:{
      time:function(newval,oldval){
        if(newval<=0){
          this.dest();
        }
      }
    },
    mounted:function(){
      setTimeout(()=>{
        this.$router.replace("/home");
      },3000)
      this.id=setInterval(()=>{
        this.time--;

      },1000)
    },
    beforeDestroy:function(){
      clearInterval(this.id);
    }
  }

</script>
<style lang="less" scoped>
@import '../../style/main.less';

  #not{
    .h(1472);
    position: relative;
    .tip{
      .f-z(50);
      position: absolute;
      top:20%;
      left:10%;
      height:10%;
      width:70%;
      color:#5DA942;

      background: #84CD97;
      text-align: center;

    }
  }

</style>
