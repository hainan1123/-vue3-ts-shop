import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: layout },
    { path: '/login', component: () => import('@/views/login/index.vue') }
  ]
})
export default router