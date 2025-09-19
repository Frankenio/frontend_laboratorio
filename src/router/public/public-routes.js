import AboutPage from '@/views/public/AboutPage.vue';
import HomePage from '@/views/public/HomePage.vue';
import LoginPage from '@/views/public/LoginPage.vue';
import NotFoundPage from '@/views/public/NotFoundPage.vue';

export default [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Home - Laboratorio SIS-INF',
      requiresAuth: false,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
    meta: {
      title: 'About - Laboratorio SIS-INF',
      requiresAuth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: {
      title: 'Login - Laboratorio SIS-INF',
      requiresAuth: false,
    },
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: 'Not Found',
      requiresAuth: false,
    },
  },
];
