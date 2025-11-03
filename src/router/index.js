import { createRouter, createWebHistory } from 'vue-router'
import loginview from '@/views/loginview.vue'
import cadastroview from '@/views/cadastroview.vue'
import homeview from '@/views/homeview.vue'
import productview from '@/views/productview.vue'
import productpageview from '@/views/productpageview.vue'
import carrinhoview from '@/views/carrinhoview.vue' 


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
    component: productview,
  },
  {
    path: '/pagina-produto/:name',
    name: 'pagina-produto',
    component: productpageview,
  },
  {
    path: '/carrinho/',
    name: 'pagina-carrinho',
    component: carrinhoview,
  },

  ],
  
  scrollBehavior(to, from, savedPosition) {
  
    if (savedPosition) {
      return savedPosition
    } else {
     
      return { top: 0 }
    }
  },
})

export default router
