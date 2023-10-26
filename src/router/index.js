import { createRouter, createWebHistory } from 'vue-router'
import EnGenerate from '../views/EnGenerate.vue'
import ArGenerate from '../views/ArGenerate.vue'
import LangView from '../views/LangView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LangView',
      component: LangView
    },
    {
      path: '/en/generate',
      name: 'EnGenerate',
      component: EnGenerate
    },
    {
      path: '/ar/generate',
      name: 'ArGenerate',
      component: ArGenerate
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
