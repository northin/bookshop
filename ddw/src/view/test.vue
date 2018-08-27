<template lang="html">
  <div class="">
    <div class="">
      <label for="">密码</label>
      <input type="text" name="" value="" v-model="pass.value">
    </div>
    <div class="">
      账号
      <input type="text" name="" value="" v-model="zhanghao.value">
    </div>
    <div class="">
      sss
      <input type="text" name="" value="" v-model="sss.value">
    </div>
    {{ dis}}
    <button ref="btn" type="button" v-bind:style="('height:40px;border:1px solid #ccc;'+dis?'color:red':'')" v-bind:disabled="(pass.success?(zhanghao.success?(sss.success?'true':'false'):'false'):'false')" name="button">ssssss</button>
  </div>
</template>

<script>
let vue = {
  data(){
    return {
      name:'ss',
      pass:{'value':'','success':true},
      zhanghao:{value:'',success:true},
      sss:{value:'',success:true},
    }
  },
  computed:{
    dis:function(){
      console.log(this.pass.success&&this.zhanghao.success&&this.sss.success?"true":'false')
      this.$nextTick(function(){
        console.log(this)
      })
      return this.pass.success&&this.zhanghao.success&&this.sss.success?"true":'false'

    }
  },
  mounted:function(){
    console.log(this)
  },
  watch:{
    'pass.value':function(old,newValue){
      if(old){
        this.pass.success = false
      }
    },
    'zhanghao.value':function(old,newValue){
      if(old){
        this.zhanghao.success = false
      }
    },
    'sss.value':function(old,newValue){
      if(old){
        this.sss.success = false
      }
    }

  },
  created:function(){
    console.log(this.pass)
  }
}
export default vue
</script>

<style lang="css">
</style>
