<template>
  <div id="list">
    <ul>
        <li v-for="(item,index) in list" :key="index" @click="details(item['_id'])">
          <img :src="item.path" alt="">
          <p>{{item.name}}</p>
          <span>{{item.price | fprice}}</span>
        </li>
    </ul>
  </div>
</template>
<script>
   export default {
     name:"Productlist",
     data:function(){
       return{

       }
     },
     props:['list'],
     methods:{
       details:function(id){
          this.$router.push("/details/"+id);
       }
     },
     filters:{
       fprice:function(val){
         return "￥"+val;
       }
     }

   }
</script>
<style lang="less" scoped>
  @import '../../style/main.less';
  #list{
    width:100%;
    ul{
      display: flex;
      flex-wrap: wrap;
      width:98%;
      margin:0 auto;
      justify-content: space-between;
      .p-b(150);
      li{
        width:49%;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
       align-items: center;
        justify-content: space-around;
        background: #f2f2f2;
        .m-b(10);
        img{
          width:75%;
        }
        p{
          .f-z(30);
          color:#666;
        }
        span{
          color:#A95E9C;
          .f-z(30);
        }
      }
    }
  }

</style>
