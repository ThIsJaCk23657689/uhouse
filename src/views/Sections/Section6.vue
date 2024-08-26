<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

const images = [
    new URL('@/assets/images/section6/1.png', import.meta.url).href,
    new URL('@/assets/images/section6/2.png', import.meta.url).href,
    new URL('@/assets/images/section6/3.png', import.meta.url).href,
    new URL('@/assets/images/section6/4.png', import.meta.url).href,
    new URL('@/assets/images/section6/5.png', import.meta.url).href,
    new URL('@/assets/images/section6/6.png', import.meta.url).href,
    new URL('@/assets/images/section6/7.png', import.meta.url).href,
    new URL('@/assets/images/section6/8.png', import.meta.url).href,
    new URL('@/assets/images/section6/9.png', import.meta.url).href,
    new URL('@/assets/images/section6/10.png', import.meta.url).href,
    new URL('@/assets/images/section6/11.png', import.meta.url).href,
];
</script>

<template>
<section class="w-full flex flex-col justify-center items-center relative">

    <div class="w-full flex flex-col lg:flex-row items-center lg:items-start relative lg:absolute top-0 left-0 bg-zinc-200 lg:bg-transparent">
        <!-- 圖片1 -->
        <div class="w-full lg:w-7/12 mb-8 lg:mb-0">
            <img src="@/assets/images/section6/toilet.png" alt="" class="object-cover">
        </div>

        <!-- 標題1 -->
        <div class="w-2/5 lg:w-2/3 lg:ml-16 lg:mt-28 mb-6 lg:mb-0">
            <img src="@/assets/images/section6/title.png" alt="" class="object-cover">
        </div>
    </div>

    <div class="w-full lg:h-[22rem]"></div>
    <div class="w-full lg:h-screen flex justify-center items-center bg-gradient-to-r from-stone-50 to-zinc-200">

        <div class="w-4/5 grid grid-cols-2 sm:grid-cols-4 gap-x-16 gap-y-6 p-4 lg:mt-32">

            <div v-for="(image, index) in images" 
                class="flex justify-start items-start lg:mb-8">
                <img :key="index" :src="image" alt="" class="object-cover">
            </div>
        </div>

    </div>

</section>
</template>

<style scoped>
</style>
