import { MessageBox } from 'mint-ui';
export default {
  initshop(content){
    setTimeout(()=>{
      let cars=localStorage.shopcar?JSON.parse(localStorage.shopcar):[];
      content.commit('SHOP',cars);
    },100)
  },
  addshop(content, shop) {
    setTimeout(() => {
      var flag = false;
      var cars = localStorage.shopcar ? JSON.parse(localStorage.shopcar) : [];
      if (cars.length) {
        cars.some((item, index, list) => {
          if (item['_id'] === shop['_id']) {
            item['count'] += shop['count'];
            flag = true;
            return true;
          }
        });
        if (!flag) {
          cars.push(shop);
        }
        localStorage.shopcar = JSON.stringify(cars);
      } else {
        cars.push(shop);
        localStorage.shopcar = JSON.stringify(cars);
      }
      console.log(cars);
      content.commit('SHOP', cars);
    }, 500);
  },
  changeshop(content, _id) {
    setTimeout(() => {
      var cars = JSON.parse(localStorage.shopcar);
      cars.forEach((item, index, list) => {
        if (item['_id'] === _id) {
          console.log(11);
          list[index]['sel'] = !list[index]['sel'];
        }
      });
      localStorage.shopcar = JSON.stringify(cars);
      console.log(cars);
      content.commit('SHOP', cars);
    }, 100);

  },
  delcount(content, _id) {
    setTimeout(() => {
      var shopcars = JSON.parse(localStorage.shopcar);
      shopcars.forEach((item, index, list) => {
        if (item['_id'] === _id) {
          if (item['count'] > 1) {
            list[index]['count']--;
          } else {
            return MessageBox.alert('不能再减了', '');
          }
        }
      })
      localStorage.shopcar = JSON.stringify(shopcars);
      content.commit('SHOP', shopcars);
    }, 200);

  },
  addcount(content, _id) {
    setTimeout(() => {
      var shopcars = JSON.parse(localStorage.shopcar);
      shopcars.forEach((item, index, list) => {
        if (item['_id'] === _id) {
          list[index]['count']++;
        }
      })
      localStorage.shopcar = JSON.stringify(shopcars);
      content.commit('SHOP', shopcars);
    }, 100)
  },
  changcount(content, shop) {
    setTimeout(() => {
      var cars = JSON.parse(localStorage.shopcar);
      cars.forEach((item, index, list) => {
        if (item['_id'] === shop['_id']) {
          if(shop['count']<=0){
            list[index]['count']=1
          }else {

            list[index]['count'] = shop['count'];
          }
        }
      });
      localStorage.shopcar = JSON.stringify(cars);
      content.commit('SHOP', cars);
    }, 100)
  },
  delshop(content, _id) {
    setTimeout(() => {
        var cars = JSON.parse(localStorage.shopcar);
        cars.forEach((item,index,list)=>{
          if(item['_id']===_id){
            list.splice(index,1)
          }
        })
      localStorage.shopcar=JSON.stringify(cars);
        content.commit('SHOP',cars);
        MessageBox.alert('删除成功', '');
      }
      , 200)
  },
  checkall(content){
    setTimeout(()=>{
      var cars=JSON.parse(localStorage.shopcar);
      if(cars.some((item,index,list)=> item['sel']===false))
      {
        cars.forEach((item,index,list)=>{
          list[index]['sel']=true;
        })
      }else{
        console.log(1);
        cars.forEach((item,index,list)=>{
          list[index]['sel']=false;
        })
      }
      localStorage.shopcar=JSON.stringify(cars);
      content.commit('SHOP',cars);
    },78)
  },

}






