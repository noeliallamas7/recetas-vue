import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
import RecetasView from '../views/RecetasView.vue'
import SobreView from '../views/SobreView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'inicio', component: InicioView },
    { path: '/recetas', name: 'recetas', component: RecetasView },
    { path: '/sobre', name: 'sobre', component: SobreView },
  ],
})

export default router