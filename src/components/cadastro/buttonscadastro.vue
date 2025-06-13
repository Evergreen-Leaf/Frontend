<template>
    <div class="container">
        <div class="container-btn">
            <button>CADASTRAR</button>
        </div>
        <div class="container-link">
            <a href="">Ja possui uma conta?</a>
        </div>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.container-btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

button {
    width: 40%;
    height: 3.5rem;
    background-color: #68A239;
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 25px;
    cursor: pointer;
}

a {
    font-size: 15px;
    color: #9E9E9E;
}
</style>