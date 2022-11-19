import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import(/* webpackChunkName: "Login" */ "@/pages/Login/Login.vue")

const routes = [
  {
    path: '/',
    name: 'login-page',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
