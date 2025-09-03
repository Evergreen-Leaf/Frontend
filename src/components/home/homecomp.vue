<script setup>
import s1home from './section-1/s1-home.vue'
import s2home from './section-2/s2-homecomp.vue'
import s3home from './section-3/s3-home.vue'
import s4Home from './sections-4/s4-home.vue'
import footercomp from '../footer/footercomp.vue'

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
  await getUserInfo()
})
</script>
<template>
<s1home  class="hidden fade-in"/>
<s2home  class="hidden fade-in"/>
<s3home  class="hidden fade-in"/>
<s4Home  class="hidden fade-in"/>
<footercomp class="hidden fade-in"/>
</template>
<style scoped>
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