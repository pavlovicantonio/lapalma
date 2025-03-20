import Vue from 'vue';
import VueRouter from 'vue-router';
import DesktopLayout from '../layouts/DesktopLayout.vue';
import MobileLayout from '../layouts/MobileLayout.vue';
import ApartmentsDesktopLayout from '../layouts/ApartmentsDesktopLayout.vue';
import ApartmentsMobileLayout from '../layouts/ApartmentsMobileLayout.vue';
import Apartment1MobileLayout from '@/layouts/ApartmentsMobileInfo/Apartment1MobileLayout.vue';
import Apartment1DesktopLayout from '@/layouts/ApartmentsDesktopLayouts/Apartment1DesktopLayout.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: window.innerWidth < 960 ? MobileLayout : DesktopLayout
  },
  {
    path: '/apartments',
    name: 'apartments',
    component: window.innerWidth < 960 ? ApartmentsMobileLayout : ApartmentsDesktopLayout
  },
  {
    path: '/apartment1',
    name: 'apartment1',
    component: window.innerWidth < 960 ? Apartment1MobileLayout : Apartment1DesktopLayout
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;