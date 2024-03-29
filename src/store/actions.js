import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
  //购物车点击
  carClick(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.carCommonList.find(item => item.iid === payload.iid);
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve('该商品数量+1')
      } else {
        payload.count = 1;
        context.commit(ADD_TO_CART, payload);
        resolve('已添加到购物车')
      }
    })

  }
}