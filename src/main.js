// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyD3uZWGlaQ20JRsPtym8aZnXpe_5JO5lcg",
  authDomain: "week7-hongyuan.firebaseapp.com",
  projectId: "week7-hongyuan",
  storageBucket: "week7-hongyuan.firebasestorage.app",
  messagingSenderId: "138756377729",
  appId: "1:138756377729:web:a3c7b1500b2fae37919180"
};
initializeApp(firebaseConfig)
const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
createApp(App).use(router).mount('#app')
// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
