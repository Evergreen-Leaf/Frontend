<script setup>
import { useCarrinhosStore } from "@/stores/carrinho"
import { useUsuarioStore } from "@/stores/usuario";

const carrinhoStore = useCarrinhosStore();
const usuarioStore = useUsuarioStore();

const props = defineProps({
    "id": {
        type: Number,
        required: true
    }
});

function addToCart() {
    const user = usuarioStore.state.user;
    if(user) {
        carrinhoStore.addItem(user.id,props.id);
    } else {
        alert("Você precisa estar logado para adicionar itens ao carrinho.");
    }
}

</script>
<template>
    <div class="product-buttons-container">
        <button class="btn-buy">COMPRAR</button>
        <button @click="addToCart" class="btn-add">ADICIONAR AO CARRINHO</button>
        <div @click="addToCart" class="add-to-icon"><img src="/addtocar.png" alt=""></div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,700;1,700&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&display=swap');

.product-buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
}

button {
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

.btn-buy {
    border: none;
    background-color: #699E5F;
    color: white;
    width: 80%;
    height: 30%;
    transition: background-color 0.3s;

}

.btn-buy:hover {
    background-color: #ffffff;
    color: #699E5F;
    border: 2px solid #699E5F;

}

.btn-add {
    background-color: #ffffff;
    border: 2px solid #699E5F;
    color: #699E5F;
    width: 80%;
    height: 30%;
    transition: background-color 0.3s;

}

.btn-add:hover {
    background-color: #699E5F;
    color: white;
}

.add-to-icon {
    display: none;
}

@media (max-width: 1024px) {
    button {
        font-size: 10px;
    }

}

@media (max-width: 768px) {
    .btn-add {
        display: none;
    }

    button {
        font-size: 15px;
    }

    .add-to-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border: 2px solid #699E5F;
        border-radius: 14px;
        transition: background-color 0.3s;
    }

    .add-to-icon:hover {
        background-color: #699E5F;
    }

    .add-to-icon:hover img {
        filter: invert(1) brightness(100);
    }

    .btn-buy {
        height: 50px;
        width: 72%;
        border-radius: 14px;
    }

    .product-buttons-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        position: fixed;
        width: 100%;
        height: 10vh;
        background-color: #ffffff;
        bottom: 0;
        left: 0;
        z-index: 3;
        border-top: 1px solid #00000010;
    }
}
</style>