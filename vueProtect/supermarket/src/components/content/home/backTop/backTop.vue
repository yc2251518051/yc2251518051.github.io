<template>
  <div class="backTop">
   <slot></slot> 
  </div>
</template>

<script>
export default {
  name: 'backTop',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.backTop{
  position:fixed;
  right:10px;
  bottom:55px;
}
  .backTop img {
    width: 43px;
    height: 43px;
  }
</style>
