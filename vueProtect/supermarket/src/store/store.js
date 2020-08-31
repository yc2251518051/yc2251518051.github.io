import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    cartList: []
  },
  mutations:{
    addCounter(state,info){
      state.cartList.find(item => item.iid === info.iid).count += 1;
    },
    addCart(state,info){
      info.count = 1;
      state.cartList.push(info);
    }
  },
  actions:{
    addToCart(context,info){
      return new Promise((resolve,reject) =>{
      const oldInfo = context.state.cartList.find(item => item.iid === info.iid)
      if(oldInfo){
        context.commit("addCounter",info)
        resolve('商品数量加一')
      }else{
        context.commit("addCart",info)
        resolve('已添加购物车')
      }
        })
    }
  }
})

export default store