import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ServiciosView from '../views/ServiciosView.vue'
import CorreasView from '../views/CorreasView.vue'
import PoleasView from '../views/PoleasView.vue'
import AcoplesIndustrialesView from '../views/AcoplesIndustrialesView.vue'
import ChumacerasView from '../views/ChumacerasView.vue'
import MotorreductoresView from '../views/MotorreductoresView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: CompanyView
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: ServiciosView
    },
    {
      path: '/correas',
      name: 'correas',
      component: CorreasView
    },
    {
      path: '/poleas',
      name: 'poleas',
      component: PoleasView
    },
    {
      path: '/acoples',
      name: 'acoples',
      component: AcoplesIndustrialesView
    },
    {
      path: '/chumaceras',
      name: 'chumaceras',
      component: ChumacerasView
    },
    {
      path: '/motorreductores',
      name: 'motorreductores',
      component: MotorreductoresView
    }
  ]
})

export default router
