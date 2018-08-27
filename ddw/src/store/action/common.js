import api from '@/api/common.js'
import * as types from '../types.js'
const actions = {
  bookType(store, data){
    return api.bookType(data).then(res => {
      return res;
    })
  },
  bookStyle(store, data){
    return api.bookStyle(data).then(res => {
      return res;
    },resject=>{
      alert(resject)
      return resject;
    }).catch(function(error) {
      return error;
    })
  },
  book(store, data){
    return api.book(data).then(res => {
      return res;
    })
  },
  bookSearch(store, data){
    return api.bookSearch(data).then(res => {
      return res;
    })
  },
  styleSearch(store, data){
    return api.styleSearch(data).then(res => {
      return res;
    })
  },
  bookById(store, data){
    return api.bookById(data).then(res => {
      return res;
    })
  },
}
export default actions;
