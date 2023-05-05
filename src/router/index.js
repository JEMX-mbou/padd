import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth: false
      },
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        requiresAuth: false
      },
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      meta: {
        requiresAuth: false
      },
      component: () => import('../views/SigninView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/DashboardView.vue')
    },
    {
      path: '/tasks',
      name: 'tasks',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/TaskView.vue')
    }
  ]
})

export default router
