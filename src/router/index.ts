import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import IntroView from '@/views/story/IntroView.vue'
import StoryView from '@/views/story/StoryView.vue'
import Flashback1 from '@/views/story/flashbacks/Flashback1.vue'
import ParliamentView from '@/views/story/ParliamentView.vue'

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
    },
    {
      name: 'story',
      path: '/recit',
      component: StoryView,
      children: [
        {
          name: 'story_1',
          path: 'intro',
          component: IntroView
        },
        {
          name: 'story_2',
          path: 'parlement',
          component: ParliamentView
        },
        {
          name: 'story_3',
          path: 'intro',
          component: Flashback1
        }
      ]
    }
  ]
})

export default router