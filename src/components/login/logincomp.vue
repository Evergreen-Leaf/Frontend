<script setup>
import titlelogin from '@/components/login/titlelogin.vue';
import formlogin from '@/components/login/formlogin.vue';
</script>
<template>
  <div class="background">
    <div class="card">
      <div class="container">
        <div class="title">
          <titlelogin />
        </div>
        <div class="form">
          <formlogin />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.background {
  background-image: url('../../../public/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Arial, sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  display: flex;
  align-items: center;
  height: 55%;
  width: 40%;
  background-color: white;
  border-radius: 15px;
  box-shadow: 8px 8px 8px rgba(0, 0, 0, 0.25);
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 80%;

}

.title {
  display: flex;
}

.form {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>