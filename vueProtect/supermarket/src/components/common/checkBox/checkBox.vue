<template>
  <div class="checkBox" :class="{'selector-active': checked}" @click="selectItem">
    <img src="@/assets/images/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'checkBox',
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
      checked:this.isChecked
    }
  },
  watch: {
    isChecked: function (newValue) {
      this.checked = newValue;
    }
  },
  methods:{
    selectItem(){
      this.$emit('checkBoxClick')
    }
  }
}
</script>

<style scoped>
.checkBox{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.selector-active{
    background-color: #ff8198;
    border-color: #ff8198;
}
</style>
