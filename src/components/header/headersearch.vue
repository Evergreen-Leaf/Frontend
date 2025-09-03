<template>
 <div class="container">
     <div class="pesquisa">
          <input type="search" placeholder="Buscar por"></input>
          <img src="/public/search-icon.png">
     </div>
 </div>
</template>
<style scoped>
.container {
      display: flex;
      justify-content: space-evenly;
      width: 100%;
 }

.pesquisa {
     display: flex;
     justify-content: center;
     align-items: center;
     width: 70%;
     height: 100%;
     border:  1.5px solid rgb(255, 255, 255);
     padding: .6rem;
     border-radius: 2rem;
}
input, input::placeholder {
     border-style: none;
     outline: none;
     width: 90%;
     background-color: rgba(255, 255, 255, 0);
     color: white;
     font-size: 1rem;
}



</style>