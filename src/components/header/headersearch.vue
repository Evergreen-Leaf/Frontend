<script setup>
defineProps({
  scrolled: Boolean
})
</script>

<template>
  <div class="container">
    <div class="container-pesquisa">
      <div class="pesquisa" :style="{ backgroundColor: scrolled ? '#EEEEEE' : 'transparent' }">
        <input
          type="search"
          placeholder="Buscar por"
          :class="{ scrolled }"
        />
        <img v-if="!scrolled" src="/public/search-icon.png" />
        <img v-else src="/public/search-icon-black.png" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-pesquisa {
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  background-color: transparent;
  border-radius: 2rem;
}

.pesquisa {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1.5px solid rgb(255, 255, 255);
  padding: 0.6rem;
  border-radius: 2rem;
}

input {
  border: none;
  outline: none;
  width: 90%;
  background-color: transparent;
  font-size: 1rem;
  color: white;
  transition: color 0.3s, background-color 0.3s;
}

input::placeholder {
  color: white;
  transition: color 0.3s;
}

input.scrolled {
  color: black;
}

input.scrolled::placeholder {
  color: black;
}
</style>
