<template>
  <div class="cartBottomBox"> 
    <checkBox class="select-all" @checkBoxClick="checkedAll" :isChecked = "isCheckedAll"></checkBox>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product"  @click ="goToBuy">去计算({{$store.state.cartList.length}})</span>
  </div>
</template>

<script>
import checkBox from "@/components/common/checkBox/checkBox"
export default {
  name: 'cartBottomBox',
  data () {
    return {
      
    }
  },
  components:{
    checkBox
  },
  computed:{
    isCheckedAll(){
      if(this.$store.state.cartList.length === 0){return false}
      return this.$store.state.cartList.find(item => item.checked === false) === undefined;
    },
    totalPrice(){
      return this.$store.state.cartList.filter(item => {
          return item.checked
        }).reduce((preValue, item) => {
          return preValue + item.count * item.newPrice
        }, 0).toFixed(2)
    }
  },
  methods:{
    checkedAll(){
      if(this.isCheckedAll){
        this.$store.state.cartList.forEach(item => {item.checked = false});
      }else{
        this.$store.state.cartList.forEach(item => {item.checked = true});
      }
    },
    goToBuy(){
    this.$emit('goToBuy');
    }
}
}
</script>

<style scoped>
.cartBottomBox{
    width: 100%;
    height: 44px;
    background-color: #eee;
    position: fixed;
    bottom: 50px;
    left: 0;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    line-height: 44px;
    padding-left: 35px;
    box-sizing: border-box;
}

  .cartBottomBox .select-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
  }

  .cartBottomBox .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .cartBottomBox .buy-product {
    background-color: orangered;
    color: #fff;
    width: 100px;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: right;
  }
</style>
