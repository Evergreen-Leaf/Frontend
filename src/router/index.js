import { createRouter, createWebHistory } from 'vue-router'
import loginview from '@/views/loginview.vue'
import cadastroview from '@/views/cadastroview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      path: '/',
      name: 'Login',
      component: loginview
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: cadastroview
    },
  ],
})

export default router
