<script setup>
import { onMounted } from 'vue';
import { useCategoriaStore } from '@/stores/categoria';

const categorias = [
  { id: 1, name: "Ervas", image: "/Card-Ervas.png" },
  { id: 2, name: "Suplementos", image: "/Card-Suplementos.png" },
  { id: 3, name: "Chás", image: "/Card-Chás.png" },
  { id: 4, name: "Chips", image: "/Card-Chips.png" },
  { id: 5, name: "Oleaginosas", image: "/Card-Nozes.png" },
  { id: 6, name: "Óleos", image: "/Card-Óleos.png" }
];

const categoriaStore = useCategoriaStore();
onMounted(async () => {
  await categoriaStore.getCategorias();
});
</script>

<template>
  <div class="container-classes">
    <div class="title">
      <h1>CATEGORIAS</h1>
    </div>

    <div class="classes">
      <div class="item" v-for="categoria in categorias" :key="categoria.id">
        <div @click="$router.push(`/pagina-produto/${categoria.name.toLowerCase()}`)" class="card">
          <img :src="categoria.image" :alt="categoria.name" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;1,800&display=swap');

.container-classes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title h1 {
  font-family: "Inter Tight", sans-serif;
  font-weight: 800;
  font-size: 40px;
  color: #28434C;
  text-align: center;
}

.classes {
  width: 100%;
  max-width: 100%;
  display: flex;
  gap: 2rem;
  padding: 0 1rem;
}

.item {
  margin: 1.5rem 0 3rem 0;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.item:hover {
  transform: scale(1.05);
}

.item {
  flex: 1 1 200px;
  max-width: 300px;
  display: flex;
  justify-content: center;
}

.card img {
  width: 100%;
  height: auto;
  display: block;
}

.classes::-webkit-scrollbar {
  height: 8px;
}

.classes::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 6px;
}

@media (max-width: 1024px) {
  .title h1 {
    font-size: 32px;
  }

  .classes {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .title h1 {
    font-size: 28px;
  }

  .classes {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-wrap: nowrap;
    gap: 2rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    box-sizing: border-box;
    padding: 0 1rem;
  }

  .classes>.item {
    flex: 0 0 auto;
  }

  .item {
    flex: 1 1 150px;
  }
}

@media (max-width: 480px) {
  .title h1 {
    font-size: 24px;
  }

  .item {
    flex: 1 1 120px;
  }
}
</style>