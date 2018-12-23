<template>
  <div id="header">
    <span v-if="back" class="glyphicon glyphicon-menu-left" @click="goback"></span>
    {{title}}
  </div>
</template>
<script>
  export default {
    name:"Header",
    data:function(){
      return {
        msg:"零食商贩",
      }
    },
    methods:{
      goback:function(){
        this.$router.go(-1);
      }
    },
    props:['title','back'],

  }
</script>
<style lang="less" scoped>
  @import url("../../style/main.less");
  @import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
  #header{
        position:fixed;
        top:0;
        left:0;
        z-index: 999;
        background:@bgcolor;
        .w(828);
        .h(83);
        color:#fefeda;
    text-align: center;
    .l-h(83);
   .f-z(36);

    .glyphicon{
      position: absolute;
      .left(20);
     .top(20);
    }
  }
</style>
