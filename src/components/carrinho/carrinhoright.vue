<script setup>
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
                <div class="info-container">
                    <div class="info-item">
                        <p>3</p>
                        <p>chips de mandioca</p>
                        <p>R$59,70</p>
                    </div>
                </div>
            </div>
            <div class="total-products">
                <p>Total</p>
                <p>R$ 000.00</p>
            </div>
            <div class="finalize-continue-btns">
                <div class="finalize-container">
                    <button class="finalize">Finalizar compra</button>
                </div>
                <div class="continue-container">
                    <button class="continue">Continuar comprando</button>
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
    border-bottom: 1.5px solid #909090;
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
    margin-bottom: 10px;
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
</style>