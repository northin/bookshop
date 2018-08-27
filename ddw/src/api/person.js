import instance from './index.js'
export default {
  userDetail(data){
    return instance.post('/userDetail/getDetail',data);
  },
  userDetailUpdate(data){
    return instance.post('/userDetail/update',data);
  },
  addressInsert(data){
    return instance.post('/address/insert',data);
  },
  addressUpdate(data){
    return instance.post('/address/update',data);
  },
  addressSelect(data){
    return instance.post('/address/get',data);
  },
  addressDelete(data){
    return instance.post('/address/delete',data);
  },

  collectionQry(data){
    return instance.post('/collection/get',data);
  },
  collectionDel(data){
    return instance.post('/collection/delete',data);
  },
  collectionInsert(data){
    return instance.post('/collection/insert',data);
  },
  cartQry(data){
    return instance.post('/cart/get',data);
  },
  cartDel(data){
    return instance.post('/cart/delete',data);
  },
  cartInsert(data){
    return instance.post('/cart/insert',data);
  },
  cartUpdate(data){
    return instance.post('/cart/update',data);
  },
}
