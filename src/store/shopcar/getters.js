export default {
  allsel: function (status) {
    return status.shopcar.some((item, index, list) => {
            return item['sel']===false;
    })
  },
  sum_count:function(status){
    var seledshop=status.shopcar.filter((item,index,list)=>{
      return item.sel;
    })
    return seledshop.reduce((total,item,index,list)=>{
         return (total+Number(item['count']));
    },0)
  },
  sum_price:function(status){
    var seledshop=status.shopcar.filter((item,index,list)=>{
      return item.sel;
    })
    return seledshop.reduce((total,item,index,list)=>{
      return (total+(Number(item['price'])*(Number(item['count'])*10))/10);
    },0)
  },


}
