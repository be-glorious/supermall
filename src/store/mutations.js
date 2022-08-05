import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'
export default {
  itemImgLoad(state) {
    state.imgCounter++;
  },
  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [ADD_TO_CART](state, payload) {
    state.carCommonList.push(payload);
    payload.checked = true;
  }
}