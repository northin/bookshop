import instance from './index.js'
export default {
  bookType(data){
    return instance.get('/book/getType',data);
  },
  bookStyle(data){
    return instance.get('/book/getStyle',{params:data});
  },
  book(data){
    return instance.post('/book/getBook',data);
  },
  bookSearch(data){
    return instance.post('/book/getCondBook',data);
  },
  styleSearch(data){
    return instance.post('/book/getCondStyle',data);
  },
  bookById(data){
    return instance.post('/book/getById',data);
  },
  
}
