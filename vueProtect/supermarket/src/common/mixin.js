import backTop from "@/components/content/home/backTop/backTop.vue"
import {POP, NEW, SELL} from "./const";
export const backTopMixin ={
  data(){
    return{
      isShowBackTop:false
    }
  },
  components:{
    backTop
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
