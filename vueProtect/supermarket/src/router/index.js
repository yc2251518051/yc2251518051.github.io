import Vue from 'vue'
import VueRouter from 'vue-router'

//解决ElementUI导航栏中的vue- router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect:'/home' 
  },
  {
    path: '/home',
    component: () =>import ('@/views/home/home.vue')
    // component: () =>import ('../views/home/home.vue')
  },
  {
    path: '/cart',
    component: () =>import ('@/views/cart/cart.vue')
  },
  {
    path: '/profile',
    component: () =>import ('@/views/profile/profile.vue')
  },
  {
    path: '/category',
    component: () =>import ('@/views/category/category.vue')
  },
  {
    path:'/detail',
    component: ()=>import ('@/views/detail/detail.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router