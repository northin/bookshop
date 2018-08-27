import instance from './index.js'
export default {
  orderQry(data){
    return instance.post('/order/get',data);
  },
  orderQryAll(data){
    return instance.post('/order/getAll',data);
  },
  orderDel(data){
    return instance.post('/order/delete',data);
  },
  orderInsert(data){
    return instance.post('/order/insert',data);
  },
  orderUpdate(data){
    return instance.post('/order/update',data);
  },
  pay(data){
    return instance.post('/order/pay',data);
  }
}
