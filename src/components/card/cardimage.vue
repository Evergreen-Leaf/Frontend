<script setup>

const props = defineProps({
  img: {
    type: String,
    required: true
  }
})

</script>
<template>
<div class="container-img">
    <img :src="props.img"/>
</div>
</template>
<style scoped>
.container-img {
    background-color: #F7F7F7;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    border-radius: 12px 12px 0 0 ;
}

img {
    width: 50%;
    height: 90%;
    object-fit: cover;
}
</style>