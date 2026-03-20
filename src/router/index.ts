import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import IntroView from '@/views/story/IntroView.vue'
import StoryView from '@/views/story/StoryView.vue'
import Flashback1 from '@/views/story/flashbacks/Flashback1.vue'
import ParliamentView from '@/views/story/ParliamentView.vue'
import ConcluView from '@/views/story/ConcluView.vue'
import Flashback2 from '@/views/story/flashbacks/Flashback2.vue'
import Flashback3 from '@/views/story/flashbacks/Flashback3.vue'

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
          path: 'introduction',
          component: IntroView
        },
        {
          name: 'story_2',
          path: 'parliament',
          component: ParliamentView
        },
        {
          name: 'story_3',
          path: 'conclusion',
          component: ConcluView
        },

        {
          name: 'people_flashback',
          path: 'souvenirs/humains',
          component: Flashback1
        },
        {
          name: 'notes_flashback',
          path: 'souvenirs/notes',
          component: Flashback2
        },
        {
          name: 'bear_flashback',
          path: 'souvenirs/famille',
          component: Flashback3
        }
      ]
    }
  ]
})

export default router