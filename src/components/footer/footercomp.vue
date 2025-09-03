<script setup>

</script>
<template>
    <footer>
        <div class="container-1">
            <div class="social-media">
                <h2>REDES SOCIAIS</h2>
                <p>Tiktok</p>
                <p>Instagram</p>
                <p>Whatsapp</p>
            </div>
            <div class="link">
                <h2>LINKS</h2>
                <p>Ervas</p>
                <p>Chás</p>
                <p>Chips</p>
                <p>Óleos Essenciais</p>
                <p>Suplementos</p>
            </div>
        </div>
        <div class="container-2">
            <div class="credits">
                <p>© Todos os direitos reservados</p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    width: 100%;
    height: 45vh;
    background-image:
        linear-gradient(to bottom, #EEEEEE, transparent),
        url('/public/Footer-background.png');
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-repeat: no-repeat;
    background-size: cover;
}

h2 {
    font-size: 15px;
    color: #ffffff;
}

p {
    font-size: 15px;
    color: #ffffff;
    margin: 5px;
    margin-bottom: 10px;
}

.container-1 {
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
}

.container-2 {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>