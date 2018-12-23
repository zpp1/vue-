<template>
  <div id="details">
    <Header :title="title" :back="back"></Header>
    <div class="product">
      <i  class="glyphicon glyphicon-shopping-cart" @click="goshopcar">
        <mt-badge size="small" color="#a9936c" v-show="sum_count">{{sum_count}}</mt-badge>
      </i>
      <img :src="shopinfo.path" alt="">
       <h2>
        <span class="count" @click="pickerVisible=true">数量 &nbsp;&nbsp;&nbsp;&nbsp;{{count}}<strong class="glyphicon glyphicon-menu-down"></strong></span>
        <b class="glyphicon glyphicon-option-vertical"></b>
        <span @click="addshop(shopinfo)" class="car">加入购物车
          <transition @beforeEnter="beforeEnter"
          @enter="enter"
          @afterEnter="afterEnter"
          >
          <i class="ball" v-show="ball"></i>
          </transition>
          <strong class="glyphicon glyphicon-shopping-cart"></strong>
        </span>
      </h2>
      <div class="decration">
       <h6>有货</h6>
        <h1>{{shopinfo.name}}</h1>
        <h4>{{shopinfo.price | p_filter}}</h4>
      </div>
    </div>
    <ul>
      <li :class="flag===item?'clicked':''" v-for="(item,index) in canshu" :key="index" @click="shuoming(item)">{{item}}</li>
    </ul>
    <div class="miaoshu">
      {{message}}
    </div>
    <mt-popup
      v-model="pickerVisible"
      position="bottom"
    style="width: 100%"

    >
      <button class="quxiao" @click="pickerVisible=false">取消</button>
      <button class="queding" @click="clickhandler2">确定</button>
      <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </mt-popup>

  </div>
</template>
<script>
  import Header from 'common/head.vue';
  import { Indicator,Badge  } from 'mint-ui';
  import { mapActions,mapGetters } from 'vuex'
  export default{
    name:"Details",
    data:function(){
      return{
        "title":"商品详情",
        'back':1,
        'shopinfo':{},
        'canshu':['商品详情','产品参数','售后保障'],
        'message':"",
        'flag':'商品详情',
        'count':1,
        "pickerVisible":false,
        'value':[1,2,3,4,5,6,7,8,9,10],
        'numar':[],
        slots: [
          {
            flex: 1,
            values: [1,2,3,4,5,6,7,8,9,10],
            className: 'slot1',
            textAlign: 'center'
          }],
        'ball':false,
      }
    },
    methods:{
      goshopcar(){
        this.$router.push('/shopcar');
      },
      shuoming:function(s){
        if(s==='售后保障'){
          this.message="七天无理由退货";
        }else{
          this.message='';
        }
        this.flag=s;
      },
      onValuesChange:function(picker, values){
        this.numar=values;
      },
      clickhandler2:function(){
        this.count=this.numar[0];
        this.pickerVisible=false;
      },
      ...mapActions({'addshop':function(){
          this.shopinfo.count=this.count;
          this.shopinfo.sel=true;
          this.ball=true;
          this.$store.dispatch('addshop',this.shopinfo);
      }}),
      beforeEnter(el){
        el.style.transform="translate(0,0)";
      },
      enter(el,done){
       el.offsetHeight;
        el.style.transform="translate(80px,-250px)";
        el.style.transition="all 1s";
        done();
      },
      afterEnter(el){
        this.ball=false;
      }
    },
    mounted:function(){
      Indicator.open({
        text: '加载中...',
        spinnerType: 'snake',
      });
      console.log(this.$route.params.id);
      this.$axios.get("/gb/shopdetails?id="+this.$route.params.id)
        .then((res)=>{
          Indicator.close();
       this.shopinfo=res.data;
        })
        .catch((err)=>{
          console.log(err);
        })


    },
    components:{Header,Badge},
    filters:{
      p_filter:function(val){
        return '￥'+val;
      }
    },
    computed:{
      ...mapGetters(['sum_count']),
    },

  }
</script>
<style lang="less" scoped>
  @import "../../../style/main.less";
  @import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
  #details{
    width:100%;
    background: #f2f2f2;
      button{
        border:none;
        .f-z(40);
        color:green;
        .m-t(20);
        background:#fff;
        outline: none;
      }
    .quxiao{
      float:left;
      .m-l(20);
    }
    .queding{
      float:right;
      .m-r(20);
    }

    .product{
      .m-t(81);
      position: relative;
      background: #fff;
      img{
        width:70%;
        margin:0 auto;
      }
      i{
        position: absolute;
        .top(60);
        .right(60);
        .f-z(50);
        color:#6ACDBD;
        .mint-badge.is-size-small{
          position: absolute;
          .top(-25);
          .left(-25);
         .w(40);
          .h(40);
          .l-h(35);
          .f-z(30);
          padding:0;
          border-radius: 50%;

        }
      }
      h2{
        width:80%;
        margin:0 auto;
        .f-z(30);
        .l-h(100);
        .h(100);
        .p-l(50);
        .p-r(10);
        background:@bgcolor;
       .b-r(50);
        span{
          color:#fff;
        }
        .car{
          position:relative;
          .ball{
            position:absolute;
            .left(100);
            .top(-50);
            .w(30);
            .h(30);
            .b-r(50%);
            background: @bgcolor;
          }
        }
        .glyphicon-menu-down{
          .m-l(30);
          .m-r(50);
        }
        b{
          color:#fff;
          .m-l(20);
          .m-r(50);
        }
        strong{
          .m-l(40);
        }
      }
      .decration{
        width:100%;
        text-align: center;
        .m-t(40);
        .m-b(40);
        .p-b(30);
        h6{
          .f-z(30);
          margin:0;
          color:#666;
          .m-b(10);
        }
        h1{
          .f-z(40);
          .m-b(30);
          .m-t(30);
          color: #000000;
        }
        h4{
          .f-z(35);
          margin:0;
          color:#AF4175;
        }
      }


    }
    ul{
      display: flex;
      .h(70);
      .l-h(70);
      .f-z(30);
      .m-b(0);
      background: #fff;
      li{
        flex: 1;
        text-align: center;
        border-bottom: 1px solid #cdcdcd;
        color:#cdcdcd;
      }
      .clicked{
        border-bottom: 1px solid @bgcolor;
        color:@bgcolor;
      }
    }
    .miaoshu{
      width:100%;
      .h(300);
      background: #fff;
      text-align: center;
      .f-z(30);
      color:#666;
      .p-t(40);
    }

  }

</style>
