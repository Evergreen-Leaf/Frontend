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
                <div>
                    <button>Finalizar compra</button>
                </div>
                <div>
                    <button>Continuar comprando</button>
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
    grid-template-rows: 1fr 3fr 1fr 1fr;
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
</style>