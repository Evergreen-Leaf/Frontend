<script setup>
import { useCarrinhosStore } from "@/stores/carrinho";
const carrinho = useCarrinhosStore();

const removerItem = (id) => {
  carrinho.deleteCarrinho(id);
};
</script>

<template>
  <div class="carrinho-left-container">
    <div class="title">
      <h1>Carrinho de compras</h1>
    </div>
    <div class="container-itens">
      <div class="item-container" v-for="item in carrinho.state.carrinhos" :key="item.id">
        <div class="item-carrinho">
          <div class="left">
            <p>1</p>
            <p>{{ item.nome }}</p>
          </div>
          <div class="right">
            <p>R$ {{ (item.preco * item.quantidade).toFixed(2) }}</p>
            <button @click="removerItem(item.id)">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.carrinho-left-container {
    width: 70%;
    height: 100%;
    background-color: #F7F7F7;
    border-radius: 15px 0px 0px 15px;
    display: grid;
    grid-template-rows: 1fr 5fr;
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    border-right: 1.5px solid rgba(0, 0, 0, 0.2);
}

title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid #E0E0E0;
}

h1 {
    font-size: 30px;
    color: #333333;
}

.container-itens {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    overflow-y: auto;
}   
.item-container {
    width: 90%;
    height: 12%;
    background-color: white;
    border-radius: 22px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);

}

.item-carrinho {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-left: 2rem;
    font-size: 20px;
    color: #333333;
}

.right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 20px;
    color: #333333;
    margin-right: 0.5em;
}

button {
    width: 4em;
    height: 3.5rem;
    background-color: #e0e0e000;
    border: 1.5px solid #ff0000;
    color: #ff0000;
    border-radius: 14px;
    font-size: 15px;
    cursor: pointer;
}
</style>