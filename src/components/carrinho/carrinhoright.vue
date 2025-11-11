<script setup>
import { computed } from "vue";
import { useCarrinhosStore } from "@/stores/carrinho"
import { useUsuarioStore } from "@/stores/usuario";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const carrinhoStore = useCarrinhosStore();
const usuarioStore = useUsuarioStore();

const user = usuarioStore.state.user

if (!user) {
    router.push({ 'path': '/login' });
}

onMounted(() => {
    carrinhoStore.getCarrinho(user.id);
});

const totalPreco = computed(() => {
    return carrinhoStore.state.itensCarrinho.reduce((total, item) => {
        return total + parseFloat(item.preco.replace('R$ ', '').replace(',', '.'));
    }, 0).toFixed(2);
});


</script>

<template>
    <div class="container-right">
        <div class="container-right-content">
            <div class="title">
                <h1>Resumo do carrinho</h1>
            </div>
            <div class="product-info">
                <div class="info-header">
                    <p>Quantia</p>
                    <p>Produto</p>
                    <p>Preço</p>
                </div>
                <div v-for="item in carrinhoStore.state.itensCarrinho" :key="item.id" class="info-container">
                    <div class="info-item">
                        <p>1</p>
                        <p>{{ item.nome }}</p>
                        <p>{{ item.preco }}</p>
                    </div>
                </div>
            </div>
            <div class="total-products">
                <p>Total</p>
                <p>R$ {{ totalPreco }}</p>
            </div>
            <div class="finalize-continue-btns">
                <div class="finalize-container">
                    <button class="finalize">Finalizar compra</button>
                </div>
                <div class="continue-container">
                    <button @click="$router.push('/')" class="continue">Continuar comprando</button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container-right {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0px 15px 15px 0px;
}

.container-right-content {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 3fr 0.5fr 1.5fr;
    justify-items: center;
}

.title {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 30px;
    color: #333333;
}

.product-info {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.info-header {
    width: 100%;
    height: 20%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    border-bottom: 0.5px solid #909090;
    color: #909090;
    margin-bottom: 10px;
}

.info-item {
    width: 100%;
    height: 20%;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    margin-bottom: 10px;
    color: #909090;
}

.total-products {
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    color: #333333;
}

.finalize-continue-btns {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}


.finalize-container {
    width: 100%;
    height: 32%;
}

.finalize {
    width: 100%;
    height: 100%;
    background-color: #699E5F;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

.continue-container {
    width: 100%;
    height: 32%;
}

.continue {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    color: #699E5F;
    border: solid 2px #699E5F;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .title {
        display: none;
    }

    .product-info {
        display: none;
    }

    .container-right {
        width: 100%;
        height: 20vh;
        border-radius: 0;
        padding: 20px 0;
        position: fixed;
        bottom: 0;
        margin: 0;
        background-color: rgb(255, 255, 255);
    }

    .container-right-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
    }

    .total-products {
        font-size: 18px;
        height: 20%;
    }
}
</style>