<template>
  <div id="app">
    <keep-alive include="home">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data: function () {
    return {
      ll: 2
    }
  }
}
</script>
<style lang="less" scoped>

</style>
