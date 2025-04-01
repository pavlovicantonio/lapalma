import Vue from 'vue';
import VueRouter from 'vue-router';
import DesktopLayout from '../layouts/DesktopLayout.vue';
import ApartmentsDesktopLayout from '../layouts/ApartmentsDesktopLayout.vue';
import Apartment1DesktopLayout from '@/layouts/ApartmentsDesktopLayouts/Apartment1DesktopLayout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: DesktopLayout // Layout biramo u App.vue
  },
  {
    path: '/apartments',
    name: 'apartments',
    component: ApartmentsDesktopLayout
  },
  {
    path: '/apartment1',
    name: 'apartment1',
    component: Apartment1DesktopLayout
  },
  {
    path: '/apartment2',
    name: 'apartment2',
    component: Apartment1DesktopLayout
  },
  {
    path: '/apartment3',
    name: 'apartment3',
    component: Apartment1DesktopLayout
  }
];

const router = new VueRouter({
  mode: 'history', // Potreban _redirects fajl na Netlifyu
  base: process.env.BASE_URL,
  routes
});

export default router;
