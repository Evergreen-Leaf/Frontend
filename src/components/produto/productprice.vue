<script setup>
import { useProdutoStore } from '@/stores/produto'
const {state} = useProdutoStore()
</script>

<template>
  <div class="container-price-add">
    <div class="price-add">
      <p class="price" >R$ {{ state.selectedProduto?.preco }}</p>
      <div class="container-add">
        <div class="add">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital@0;1&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&display=swap');

.container-price-add {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
}

.price-add {
    height: 50%;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}



.price {
    color: #333333;
    font-size: 25px;
    width: 80%;
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    grid-column: 1;
    grid-row: 2;
}

.container-add {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-column: 2;
    grid-row: 2;
    margin-right: 1em;
}

.add {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
}

button {
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: none;
    background-color: #ffffff00;
    color: rgb(0, 0, 0);
}
@media (max-width: 1100px) {
    .price {
        font-size: 20px;
    }
}
</style>