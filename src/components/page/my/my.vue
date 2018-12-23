<template>
  <div id="my">
    <Header :title="title" :back="back"></Header>

    <tablebar></tablebar>
  </div>
</template>
<script>
  import tablebar from '@/components/common/tablebar.vue';
  import Header from '@/components/common/head.vue';
  export default{
    name:"My",
    data:function(){
      return {
        'title':"我的",
        'back':1,

      }
    },
  components:{
    tablebar,Header
  }

  }
</script>
<style lang="less" scoped>

</style>
