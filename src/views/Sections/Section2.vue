<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';

const bgUrl = new URL('@/assets/images/section2/map.png', import.meta.url).href;

</script>

<template>
<section class="w-full h-screen flex justify-center items-center">
    <Transition name="fade" appear>
        <ImageContainer :src="bgUrl" alt="" />
    </Transition>
</section>
</template>

<style scoped>
</style>
