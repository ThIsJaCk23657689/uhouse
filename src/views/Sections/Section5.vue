<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

const image1 = new URL('@/assets/images/section5/1.png', import.meta.url).href;
const image2 = new URL('@/assets/images/section5/2.png', import.meta.url).href;
const image3 = new URL('@/assets/images/section5/3.png', import.meta.url).href;

</script>

<template>
<section class="w-full h-min-screen flex flex-col justify-center">
    <div class="w-full flex flex-col justify-center items-center" style="height: 900px;">
        <div class="w-full h-2/5 mb-2">
            <ImageContainer :src="image1" alt="" />
        </div>
        <div class="w-full h-3/5 flex flex-row justify-center items-center">
            <div class="w-1/2 h-full mr-2">
                <ImageContainer :src="image2" alt="" />
            </div>
            <div class="w-1/2 h-full">
                <ImageContainer :src="image3" alt="" />
            </div>
        </div>
    </div>
    <div class="w-full flex justify-center items-center" style="height: 360px;">
    </div>
</section>
</template>

<style scoped>
</style>