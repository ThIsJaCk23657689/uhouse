<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';

const bgUrl = new URL('@/assets/images/section2/map.png', import.meta.url).href;

</script>

<template>
<section class="w-full h-screen flex justify-center items-center relative">
    <div class="w-full h-full flex justify-center items-center bg-fixed bg-cover bg-center" :style="{ backgroundImage: `url(${bgUrl})` }">
    </div>
    <div class="absolute w-full h-full bg-black bg-opacity-20 z-10 hover:bg-opacity-5 transition-1000-out">
    </div>
</section>
</template>

<style scoped>
</style>
