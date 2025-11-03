<script setup>
const emit = defineEmits(['AbrirMenu'])

const handleClick = () => {
  emit('AbrirMenu')
}
defineProps({
  scrolled: Boolean
})
</script>

<template>
  <div class="container">
    <div :class="['background-hamburguer', { scrolled: scrolled }]">
      <button class="hamburger" @click="handleClick">
        <img v-if="!scrolled" src="/public/hamburguerMenu.png" />
        <img v-else src="/public/hamburguerMenuBlack.png" /> </button>
    </div>
  </div>
</template>

<style scoped>
.hamburger {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.background-hamburguer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50px;
    transition: background-color 0.3s ease;
}

.background-hamburguer img {
    transition: filter 0.3s ease;
}

.background-hamburguer:hover:not(.scrolled) {
    background-color: rgb(255, 255, 255); 
}

.background-hamburguer:hover:not(.scrolled) img {
    filter: invert(63%) sepia(22%) saturate(530%) 
           hue-rotate(65deg) brightness(92%) contrast(90%);
}

.background-hamburguer.scrolled:hover {
    background-color: rgb(105, 158, 95); 
}

.background-hamburguer.scrolled:hover img {
    filter: brightness(0) invert(1); 
}

</style>