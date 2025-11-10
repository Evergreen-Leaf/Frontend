<script setup>
</script>

<template>
    <section @click="$router.push('/')" class="image"></section>
</template>

<style scoped>
.image {
  background-image: url('./LoginImage.png');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
}
@media (max-width: 1024px) {
  .image {
    display: none;
  }
}
</style>