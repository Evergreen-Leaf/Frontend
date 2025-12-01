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
        <img v-if="!scrolled" src="/public/hamburguerMenu.png" class="icon" />
        <img v-else src="/public/hamburguerMenuBlack.png" class="icon" />
      </button>
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
}

.icon {
  transition: transform 0.25s ease;
}

.background-hamburguer:hover .icon {
  transform: scale(1.07);
}

</style>
