import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import(/* webpackChunkName: "Home" */ "@/pages/Home/Home.vue")
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/pages/Dashboard/Dashboard.vue')
const sidebar = () => import(/* webpackChunkName: "Dashboard" */ '@/layout/Sidebar/Sidebar.vue')

const routes = [
  {
    path: '/',
    name: 'Home-page',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard-page',
    component: Dashboard,
    children: [
      {
        path: 'setting',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
