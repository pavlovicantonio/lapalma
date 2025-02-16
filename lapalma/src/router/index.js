import Vue from 'vue';
import VueRouter from 'vue-router';
import DesktopLayout from '../layouts/DesktopLayout.vue';
import MobileLayout from '../layouts/MobileLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: window.innerWidth < 960 ? MobileLayout : DesktopLayout
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;