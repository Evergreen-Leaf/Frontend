<template>
 <div class="container">
     <div class="pesquisa">
          <input type="search" placeholder="Buscar por"></input>
          <img src="/public/search.png">
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
     justify-content: space-between;
     width: 50%;
     height: 100%;
     border:  1.5px solid rgb(150, 150, 150);
     padding: .5rem;
     border-radius: 1rem;
}
input {
     border-style: none;
     outline: none;
     width: 90%;
}


</style>