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
    height: 90vh;
    display: grid;
    justify-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 2fr 1fr 6fr 2fr;
    background-color: #EEEEEE;
}

.s2home-info {
    margin-left: 4em;
    display: flex;
    justify-content: center;
    width: 95%;
    grid-row: 2;
}

.s2home-classes {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    grid-row: 4;
}
</style>