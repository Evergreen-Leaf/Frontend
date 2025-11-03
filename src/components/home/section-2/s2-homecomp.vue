<script setup>
import s2HomeInfo from './s2-home-info.vue';
import s2HomeClasses from './s2-home-classes.vue';
</script>
<template>
    <div class="container">
        <div class="s2home-info">
            <s2HomeInfo />
        </div>
        <div class="s2home-classes">
            <s2HomeClasses />
        </div>
    </div>
</template>
<style scoped>
.container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        align-items: center;
        padding: 3.5rem 0;
        background-color: #EEEEEE;
}

.s2home-info {
        display: flex;
        justify-content: center;
        width: 95%;
        max-width: 1200px;
}

.s2home-classes {
        width: 95%;
        max-width: 1200px;
        margin-bottom: 4rem;
}

@media (max-width: 768px) {
    .container {
        padding: 2rem 0;
        gap: 1.5rem;
    }
    .s2home-info, .s2home-classes {
        width: 95%;
        padding: 0 1rem;
    }
}
</style>