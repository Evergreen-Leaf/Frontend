<script setup>

</script>
<template>
    <div class="container-section3">
        <div class="container-text">
            <p>VARIEDADE DE PRODUTOS NATURAIS</p>
        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,800;1,800&family=Inter:opsz,wght@14..32,500&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

.container-section3 {
    width: 100%;
    height: 40vh;
    background-image: url("/public/Rectangle 57.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 2fr;

}

.container-text {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2;
}

p {
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    font-size: 50px;
    color: #ffffff;
}
</style>