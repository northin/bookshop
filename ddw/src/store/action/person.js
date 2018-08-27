import api from '@/api/person.js'
import * as types from '../types.js'
const actions = {
  userDetail(store, data){
    return api.userDetail(data).then(res => {
      return res;
    })
  },
  userDetailUpdate(store, data){
    return api.userDetailUpdate(data).then(res => {
      return res;
    })
  },
  addressInsert(store, data){
    return api.addressInsert(data).then(res => {
      return res;
    })
  },
  addressSelect(store, data){
    return api.addressSelect(data).then(res => {
      return res;
    })
  },
  addressUpdate(store, data){
    return api.addressUpdate(data).then(res => {
      return res;
    })
  },
  addressDelete(store, data){
    return api.addressDelete(data).then(res => {
      return res;
    })
  },
  collectionQry(store, data){
    return api.collectionQry(data).then(res => {
      return res;
    })
  },
  collectionDel(store, data){
    return api.collectionDel(data).then(res => {
      return res;
    })
  },
  collectionInsert(store, data){
    return api.collectionInsert(data).then(res => {
      return res;
    })
  },


  cartQry(store, data){
    return api.cartQry(data).then(res => {
      return res;
    })
  },
  cartDel(store, data){
    return api.cartDel(data).then(res => {
      return res;
    })
  },
  cartInsert(store, data){
    return api.cartInsert(data).then(res => {
      return res;
    })
  },
  cartUpdate(store, data){
    return api.cartUpdate(data).then(res => {
      return res;
    })
  },
}
export default actions
