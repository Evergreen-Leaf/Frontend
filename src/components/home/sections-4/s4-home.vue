<script setup>
import productlist from '@/components/produto/productlist.vue';
</script>
<template>
  <div class="container-s4">
    <div class="container-title">
      <h1>MAIS VENDIDOS</h1>
    </div>
    <div class="container-products">
      <productlist :quantidade="8" />
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;1,800&family=Inter:opsz,wght@14..32,500&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.container-s4 {
  width: 100%;
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 5vh;
  box-sizing: border-box;
}

.container-title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-products {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  box-sizing: border-box;
  padding: 0 5%;
}

h1 {
  font-family: "Inter Tight", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 40px;
  color: #28434C;
  margin: 5vh 0;
}
@media (max-width: 768px) {
  h1{
    font-size: 30px;
  }
}
</style>
