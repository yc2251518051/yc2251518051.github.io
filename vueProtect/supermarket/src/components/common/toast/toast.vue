<template>
  <div class="toast" v-show = "this.message">
    <div>
      {{this.message}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  props:{
    messages:{
      type: String,
      default:''
    },
    delay:{
      type:Number,
      default:2000
    },

  },
  data () {
    return {
      message:''
    }
  },
  watch:{
    messages: function (newV,oldV){
      this.message = newV;
      setTimeout(()=>{
      this.message ='';
      },this.delay)
    }
  },
  // created(){
  //   this.message = messages;
  //   setTimeout(()=>{
  //     this.message ='';
  //   },delay)
  // }
}
</script>

<style scoped>
.toast{
  position:fixed;
  z-index:999;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  background:rgba(0,0,0,0.5);
  padding: 5px;
  color:#fff;
}
</style>
