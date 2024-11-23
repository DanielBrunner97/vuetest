// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

import DefaultLayout from '@/layout/DefaultLayout.vue';
import AboutMeView from '@/views/AboutMeView/AboutMeView.vue';

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
      content: AboutMeView,       // Render AboutMeLeft in <router-view name="left" />
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
