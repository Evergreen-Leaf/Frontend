import { createRouter, createWebHistory } from 'vue-router'
import loginview from '@/views/loginview.vue'
import cadastroview from '@/views/cadastroview.vue'
import homeview from '@/views/homeview.vue'
import productview from '@/views/productview.vue'
import Productview from '@/views/productview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: homeview
    },
     {
      path: '/login',
      name: 'Login',
      component: loginview
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: cadastroview
    },
    {
    path: '/produto/:id',
    name: 'Produto',
    component: Productview,
  },
  ],
})

export default router
