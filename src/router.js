import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('./views/Login.vue')
const Reg = () => import('./views/Reg.vue')
const Forget = () => import('./views/Forget.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'home',
      component: Login
    },
    {
      path: '/reg',
      name: 'home',
      component: Reg
    },
    {
      path: '/forget',
      name: 'home',
      component: Forget
    }
  ]
})

export default router
