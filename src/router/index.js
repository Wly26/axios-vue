// 在页面进入时，就引入加载
import { createRouter, createWebHistory } from 'vue-router'
import Axios from '../views/Axios.vue'

const routes = [
  {
    path: '/',
    name: 'Axios',
    component: Axios
  },
  // 懒加载，按需加载
  {
    path: '/2-2',
    name: 'axios请求方法',
    component: () => import( '../views/2-2.vue')
  },
  {
    path: '/2-3', 
    name: 'axios并发请求',
    component: () => import( '../views/2-3.vue')
  },
  {
    path: '/3-1', 
    name: '创建实例',
    component: () => import( '../views/3-1.vue')
  },
  {
    path: '/3-2', 
    name: '常用配置参数|优先级',
    component: () => import( '../views/3-2.vue')
  },
  {
    path: '/3-3', 
    name: '实际开发',
    component: () => import( '../views/3-3.vue')
  },
  {
    path: '/3-4', 
    name: '拦截器',
    component: () => import( '../views/3-4.vue')
  },
  {
    path: '/3-5', 
    name: '错误处理',
    component: () => import( '../views/3-5.vue')
  },
  {
    path: '/3-6', 
    name: '取消请求',
    component: () => import( '../views/3-6.vue')
  },
  {
    path: '/contactList', 
    name: '联系人列表',
    component: () => import( '../views/contactList.vue')
  },
  {
    path: '/contactListshizhan', 
    name: '联系人列表-实战',
    component: () => import( '../views/contactListshizhan.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
