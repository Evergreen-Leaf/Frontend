<script setup>
import { onMounted, ref } from 'vue';
import { useCategoriaStore } from '@/stores/categoria';

const categorias = [{id: 1, name:"Ervas", image: "/public/Card-Ervas.png"}, {id: 2, name:"Suplementos", image: "/public/Card-Suplementos.png"}, {id: 3, name:"Chás", image: "/public/Card-Chás.png"}, {id: 4, name:"Chips", image: "/public/Card-Chips.png"}, {id: 5, name:"Oleaginosas", image: "/public/Card-Nozes.png"}, {id: 6, name:"Òleos", image: "/public/Card-Òleos.png"}];

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
        <div class="classes" >
            <div v-for="categoria in categorias" :key="categoria.id">
                <div @click="$router.push(`/pagina-produto/${categoria.name.toLowerCase()}`)" style="cursor: pointer;">
                    <img src="/public/Card-Ervas.png">
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;1,800&family=Inter:opsz,wght@14..32,500&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.container-classes {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.classes {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top: 1.5em;
}

h1 {
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 40px;
    color: #28434C;
}
</style>