import { createRouter, createWebHashHistory } from 'vue-router'
import { localStorageCache } from '@/utils/settleCache'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const token = localStorageCache.getCache('token')
  if (!token && to.path !== '/login') {
    next('/login')
  }
  next()
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
})

export default router
