<template>
    <div class="container">
        <form action="">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="Estado" />
            <input type="text" placeholder="Bairro" /><!-- mudar no backend!!!! -->
            <input type="text" placeholder="Rua" />
            <input type="number" name="numero" placeholder="Número" />
            <input type="number" name="cep" placeholder="CEP" />
        </form>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    display: flex;
    align-items: center;
}   

input {
    width: 100%;
    height: 4rem;
    background-color: #E3E3E3;
    border: none;
    border-radius: 10px;
    font-size: 15px;    
    padding-left: 1rem;
    margin-bottom: 1rem;
}


form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 65%;
}
</style>