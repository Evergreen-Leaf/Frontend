<script setup>

</script>
<template>
    <section >
        <img src="/public/background-home.png" alt="">
        <div class="container-text">
            <div>
                <h1>
                    ALWAYS BE GREEN
                </h1>
            </div>
            <div>
                <h2>
                    for your life to be healthy
                </h2>
            </div>
        </div>
    </section>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,900;1,900&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,200;1,200&family=Inter:opsz,wght@14..32,600&family=Lexend+Deca:wght@100..900&family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap');

section {
    width: 100%;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr 1fr 2fr;
}

.container-text {
    grid-row: 2/3;
}

img {
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
}

h1 {
    color: white;
    font-size: 55px;
    text-align: center;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.1em;
}

h2 {
    color: white;
    font-size: 25px;
    text-align: center;
    font-family: "Inter Tight", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    letter-spacing: 0.1em;
}
@media (max-width: 768px) {
    h1 {
        font-size: 35px;
    }

    h2 {
        font-size: 18px;
    }
}
@media (max-width: 400px) {
    h1 {
        font-size: 28px;
    }

    h2 {
        font-size: 16px;
    }
}
</style>