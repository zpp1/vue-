<template>
  <div id="shopcar">
    <Header :title="title" :back="back"></Header>
      <ul>
        <li v-show="!shopcar.length" class="meage">您还没有添加任何商品</li>
        <li v-for="(item,index) in shopcar" :key="index" class="clear">
             <i :class="item.sel?'':'wsel'"
                @click="changesel(item['_id'])"
             ><strong v-show="item.sel"  class="glyphicon glyphicon-ok"></strong></i>
          <div class="img" @click="godatails(item['_id'])"><img :src="item.path" alt="" class="img-rounded"></div>
          <div class="rbox">
          <p><span>{{item.name}}</span><span>￥{{item.price}}</span></p>
         <h1>
           <h2>
          <button @click="delcount(item['_id'])">-</button>
          <input type="text" v-model="item.count" @blur="changcount({'_id':item['_id'],'count':item['count']})">
          <button @click="addcount(item['_id'])">+</button>
           </h2>
          <b class="glyphicon glyphicon-remove" @click="delshop(item['_id'])"></b>
         </h1>
      </div>
        </li>
      </ul>
      <div class="bottom" v-show="shopcar.length">
        <i @click="checkall"><strong v-show="!allsel"  class="glyphicon glyphicon-ok"></strong></i>全选({{sumcount}})
        <button>下单</button>
        <span class="glyphicon glyphicon-option-vertical"></span>
        <p>￥{{sumprice}}
          <b class="glyphicon glyphicon-arrow-right"></b>
        </p>
      </div>
    <tablebar></tablebar>
  </div>
</template>
<script>
  import tablebar from '@/components/common/tablebar.vue';
  import Header from '@/components/common/head.vue';
  import {mapState} from 'vuex';
  import { mapActions } from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    name:"Shopcar",
    data:function(){
      return{
        'title':"购物车",
        'back':1,
        'value':['1'],
        'optins':['1','2'],
      }
    },
    computed:{
      ...mapState({'shopcar':status=>status.shopcar.shopcar}),
      ...mapGetters({'allsel':'allsel',
                    'sumcount':'sum_count',
                    'sumprice':'sum_price',

      }),

    },
    methods:{
      ...mapActions({
        changesel: 'changeshop',
        delcount: 'delcount',
        addcount: 'addcount',
        changcount: 'changcount',
        delshop:'delshop',
        checkall:'checkall',
      }),
      godatails(s){
        this.$router.push('/details/'+s);
      }

    },
    components:{
      tablebar,Header,
    },
    mounted:function(){
      this.$store.dispatch('initshop');
    }
  }
</script>
<style lang="less" scoped>
  @import '../../../style/main.less';
  @import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';


  #shopcar {
    ul {
      position: absolute;
      .top(83);

      width: 100%;
      .p-b(230);
      .meage{
        width:100%;
        text-align: center;
        color:#7A6972;
        border:none;
        .m-t(100);
      }

      li {
        position: relative;
        width: 100%;
        overflow: hidden;
        border-bottom: 1px solid #cdcdcd;
        img {
          .w(200);
          display: inline-block;

        }
        .wsel {

          background: #fff;
        }
        .img {
          .w(250);
          .m-l(100);
          .m-t(50);
          text-align: center;
          background: #f2f2f2;
          float: left;

        }
        i {
          text-align: center;
          .l-h(55);
          position: absolute;
          .top(120);
          .left(20);
          .w(60);
          .h(60);
          .b-r(50%);
          border: 1px solid #cdcdcd;
          .f-z(30);
          background: #BFFFDD;
          color: #FF5B58;
        }
        .rbox {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .h(220);
          .m-t(50);
          .f-z(30);
          .m-b(30);
          h1 {
            .f-z(30);
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            .p-l(40);
            .p-r(40);
            h2 {
              .f-z(40);
              margin: 0;
              padding: 0;
              input {
                .w(150);
                text-align: center;
                border: none;

              }
              button {
                border: none;
                background: #fff;
                margin: 0;
                padding: 0;
                .f-z(50);
                outline-color: #fff;
              }
            }
            b {
              .m-t(10);
            }
          }
          P {
            display: flex;
            justify-content: space-between;
            .p-l(50);
            .p-r(40);
          }
        }
      }
    }
    .bottom {
      position: fixed;
      .bottom(120);
      width: 100%;
      color: #fff;
      background: @bgcolor;
      .p-l(30);
      .p-r(30);
      .h(100);
      .l-h(100);
      .f-z(30);
      i {
        text-align: center;
        .l-h(40);
       display: block;
        .w(50);
        .h(50);
        .b-r(50%);
        border: 1px solid #cdcdcd;
        .f-z(30);
        float: left;
        .m-t(25);
        .m-r(20);

        color: #fff;
      }
      button {
        border: none;
        background: @bgcolor;
        .m-l(100);
      }
      span {
        .m-l(50);
      }
      p {
        float: right;
        margin: 0;
        .w(200);
        .m-r(20);
        b {
          .m-l(50);
          .f-z(30);
        }
      }
    }
  }


</style>
