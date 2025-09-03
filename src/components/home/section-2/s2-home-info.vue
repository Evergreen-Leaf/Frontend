<script setup>
</script>
<template>
    <div class="container-info">
        <div class="info">
            <img src="/public/Chat Bubble.png">
            <div class="text-info">
                <p class="title">RECOMENDADA</p>
                <p class="description">AMADA PELOS CLIENTES</p>
            </div>

        </div>
        <div class="info">
            <img src="/public/Magnetic Card.png">
            <div class="text-info">
                <p class="title">PARCELAMENTO</p>
                <p class="description">EM ATÉ 6X NO CARTÃO</p>
            </div>

        </div>
        <div class="info">
            <img src="/public/Guarantee.png">
            <div class="text-info">
                <p class="title">ESPECIALIZAÇÃO</p>
                <p class="description">MAIS DE 9 ANOS NO MERCADO</p>
            </div>

        </div>
        <div class="info">
            <img src="/public/Handshake.png">
            <div class="text-info">
                <p class="title">CONFIANÇA</p>
                <p class="description">COMPRE COM TRANQUILIDADE</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,200;1,200&family=Inter:opsz,wght@14..32,500&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.container-info {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.info {
    width: 25%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.text-info {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.title {
    font-size: 18px;
    color: #28434C;
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}


.description {
    font-size: 12px;
    color: black;
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
}
</style>