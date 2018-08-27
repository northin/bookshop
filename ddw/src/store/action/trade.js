import api from '@/api/trade.js'
import * as types from '../types.js'
const actions = {
  orderQry(store, data){
    return api.orderQry(data).then(res => {
      return res;
    })
  },
  orderQryAll(store, data){
    return api.orderQryAll(data).then(res => {
      return res;
    })
  },
  orderDel(store, data){
    return api.orderDel(data).then(res => {
      return res;
    })
  },
  orderInsert(store, data){
    return api.orderInsert(data).then(res => {
      return res;
    })
  },
  orderUpdate(store, data){
    return api.orderUpdate(data).then(res => {
      return res;
    })
  },
  pay(store, data){
    return api.pay(data).then(res => {
      return res;
    })
  },
}
export default actions;
