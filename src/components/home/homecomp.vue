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
})
</script>
<template>
<s1home id="s1" class="hidden fade-in"/>
<s2home id="s2" class="hidden fade-in"/>
<s3home id="s3" class="hidden fade-in"/>
<s4Home id="s4" class="hidden fade-in"/>
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