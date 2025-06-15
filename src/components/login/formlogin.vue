<template>
    <div class="container">
        <form action="">
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="senha" placeholder="Senha" />
        </form>
    </div>
</template>
<style scoped>
.container {
    width: 100%;

}   

input {
    width: 65%;
    height: 4.5rem;
    background-color: #E3E3E3;
    border: none;
    border-radius: 10px;
    font-size: 15px;    
    padding-left: 1rem;
}

input[name="email"] {
    margin-bottom: 1.5rem;
}

label {
    font-size: 20px;
    color: #9E9E9E;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;

}
</style>