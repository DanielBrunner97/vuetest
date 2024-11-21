// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import AboutMeLeft from '@/views/AboutMeView/AboutMeLeft.vue';
import AboutMeRight from '@/views/AboutMeView/AboutMeRight.vue';

const routes = [
  {
    path: '/',
    redirect: '/aboutme', // Redirect root to /aboutme
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    components: {
      default: DefaultLayout, // Render DefaultLayout in the default <router-view />
      left: AboutMeLeft,       // Render AboutMeLeft in <router-view name="left" />
      right: AboutMeRight,     // Render AboutMeRight in <router-view name="right" />
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
