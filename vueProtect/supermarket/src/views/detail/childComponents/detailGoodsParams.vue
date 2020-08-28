<template>
  <div class="detailGoodsParams">  
     <table v-for = "(table,i) in goodsParams.sizes" :key = "i" >
        <tr v-for = "(tr,indexTr) in table" :key = "indexTr">
          <td v-for = "(td,indexTd) in tr" :key = "indexTd">
            {{td}}
          </td>
        </tr>
      </table>
    <div class="infos">
      <table>
        <tr v-for = "(item,i) in goodsParams.infos" :key = "i">
           <td class = "paramsKey">{{item.key}}</td>
           <td class = "params" colspan="2">{{item.value}}</td>
        </tr>
      </table>
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailGoodsParams',
  props:{
    goodsParams:{
      type: Object,
      require:true
    }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
.infos{
  font-size:14px;
}
.infos .params{
  color:rgb(255,87,119);
}
.infos img{
  width:100%;
}
.paramsKey{
  width:25%;
}
.params{
  width:75%;
}
table{
  font-size:14px;
  width:100%;
  border-top:3px solid #f3f3f3;
  border-bottom:3px solid #eee;
}
tr{
  box-shadow: 0px 1px #f3f3f3;
  }
td{
  padding:5px;
  text-align: left;
}
</style>
