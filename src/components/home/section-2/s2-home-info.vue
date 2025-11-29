  <script setup>
</script>

<template>
  <div class="container-info">
    <div class="info">
      <img src="/Chat Bubble.png" alt="Chat Bubble">
      <div class="text-info">
        <p class="title">RECOMENDADA</p>
        <p class="description">AMADA PELOS CLIENTES</p>
      </div>
    </div>

    <div class="info">
      <img src="/Magnetic Card.png" alt="Magnetic Card">
      <div class="text-info">
        <p class="title">PARCELAMENTO</p>
        <p class="description">EM ATÉ 6X NO CARTÃO</p>
      </div>
    </div>

    <div class="info">
      <img src="/Guarantee.png" alt="Guarantee">
      <div class="text-info">
        <p class="title">ESPECIALIZAÇÃO</p>
        <p class="description">MAIS DE 9 ANOS NO MERCADO</p>
      </div>
    </div>

    <div class="info">
      <img src="/Handshake.png" alt="Handshake">
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px; 
  width: 100%;
  height: auto;
  scale: 0.9;
}

.info {
  width: 22%; 
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 250px;
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
  font-weight: 600;
}

.description {
  font-size: 12px;
  color: black;
  font-family: "Inter Tight", sans-serif;
  font-weight: 600;
}

@media (max-width: 1024px) {
  .info {
    width: 45%;
  }
}

@media (max-width: 600px) {
  .info {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .info img {
    margin-right: 10px;
  }
}
</style>
