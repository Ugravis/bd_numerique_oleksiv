import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeView
    },
    {
      name: 'home2',
      path: '/accueil',
      component: HomeView
    },
    {
      name: 'about',
      path: '/a-propos',
      component: AboutView
    }
  ]
})

export default router