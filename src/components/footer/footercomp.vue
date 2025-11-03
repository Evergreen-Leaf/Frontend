<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  const elements = document.querySelectorAll('.fade-in')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  elements.forEach((el) => observer.observe(el))
  // await getUserInfo()
})
</script>
<template>
    <footer class="hidden fade-in">
        <div class="container-1">
            <div class="social-media">
                <h2>REDES SOCIAIS</h2>
                <p>Tiktok</p>
                <p>Instagram</p>
                <p>Whatsapp</p>
            </div>
            <div class="link">
                <h2>LINKS</h2>
                <p>Ervas</p>
                <p>Chás</p>
                <p>Chips</p>
                <p>Óleos Essenciais</p>
                <p>Suplementos</p>
            </div>
        </div>
        <div class="container-2">
            <div class="credits">
                <p>© Todos os direitos reservados</p>
            </div>
        </div>
    </footer>
</template>
<style scoped>
footer {
    width: 100%;
    height: 45vh;
    background-image:
        linear-gradient(to bottom, #EEEEEE, transparent),
        url('/public/Footer-background.png');
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    background-repeat: no-repeat;
    background-size: cover;
}

h2 {
    font-size: 15px;
    color: #ffffff;
}

p {
    font-size: 15px;
    color: #ffffff;
    margin: 5px;
    margin-bottom: 10px;
}

.container-1 {
    width: 40%;
    height: 40%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
}

.container-2 {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hidden {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s,
    transform 0.8s;
}

.visible {
  opacity: 2;
  transform: translateY(0);
}
</style>