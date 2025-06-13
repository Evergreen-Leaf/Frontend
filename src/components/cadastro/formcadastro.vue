<template>
    <div class="container">
        <form action="">
            <input type="text" placeholder="Nome de usuario" />
            <label for="date">Data de nascimento</label>
            <input type="date" name="date" >
            <input type="number" name="CPF" placeholder="CPF" />
            <input type="email" name="email" placeholder="Email" />
            <input type="number" name="telefone" placeholder="Telefone" />
            <input type="password" name="senha" placeholder="Senha" />
        </form>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100%;
}   

input {
    width: 100%;
    height: 3.5rem;
    margin-bottom: 1.5rem;
    background-color: #E3E3E3;
    border: none;
    border-radius: 10px;
    font-size: 15px;    
    padding-left: 1rem;
}

label {
    font-size: 20px;
    color: #9E9E9E;
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 90%;

}
</style>