
import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue' // <-- import
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue' 

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
  // ...other routes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
