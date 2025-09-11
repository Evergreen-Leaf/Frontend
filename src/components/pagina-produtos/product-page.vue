<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProdutoStore } from '@/stores/produto'
import benefit from "@/components/home/section-2/s2-home-info.vue"
import productlist from '../produto/productlist.vue';

const route = useRoute()
const produtoStore = useProdutoStore()

onMounted(() => {
    produtoStore.fetchProduto(route.params.id)
})

onMounted(async () => {
  const elements = document.querySelectorAll('.fade-in')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  elements.forEach((el) => observer.observe(el))
  await getUserInfo()
})
</script>
<template>
    <div class="container-product-page">
        <div class="container-benefit">
            <benefit  class="hidden fade-in"/>
        </div>
        <div class="container-products-title">
            <h1  class="hidden fade-in" >PRODUTOS</h1>
        </div>
        <div class="container-products">
            <productlist :quantidade="4"  class="hidden fade-in" />
        </div>
    </div>

</template>
<style scoped>
.container-product-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #F5F5F5;
}

.container-benefit {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-products-title {
    width: 85%;
    height: 10vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.container-products {
    width: 100%;
    height: 130vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.hidden {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s,
    transform 0.8s;
}

.visible {
  opacity: 2;
  transform: translateY(0);
}
</style>