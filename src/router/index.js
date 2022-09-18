import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/rules',
      component: () => import('../views/RulesView.vue')
    },
    {
      path: '/settings',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/params',
      component: () => import('../views/MatchParamsView.vue')
    },
    {
      path: '/locations',
      component: () => import('../views/LocationsView.vue')
    },
    {
      path: '/match',
      component: () => import('../views/MatchView.vue')
    }
  ]
})

export default router
