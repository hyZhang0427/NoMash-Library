
import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue' // <-- import
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue' 
import AddBookView from '@/views/AddBookView.vue';
import GetBookCountView from '@/views/GetBookCountView.vue';
import WeatherView from '@/views/WeatherView.vue';  
import CountBookAPI from '@/views/CountBookAPI.vue';

const routes = [
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView, // <-- new route
  },

  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView, // <-- new route
  },
  
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView, // <-- new route
  },

  { path: '/', redirect: '/FireLogin' },

  {
    path: '/Getbookcount',
    name: 'GetBookCount',
    component: GetBookCountView, // <-- new route
  },
  {
    path: '/WeatherCheck', 
    name: 'WeatherCheck',
    component: WeatherView, 
  },
  {
    path: '/CountBookAPI', 
    name: 'CountBookAPI',
    component: CountBookAPI,  
  },
  // optional 404
  { path: '/:pathMatch(.*)*', redirect: '/FireLogin' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
