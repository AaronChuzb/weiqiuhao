import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './modules/index'

Vue.use(VueRouter)

const routes = [
  ...Index
]

const router = new VueRouter({
  routes
})

// 路由拦截
router.beforeEach((to, from, next) => {
  next()

})

export default router
