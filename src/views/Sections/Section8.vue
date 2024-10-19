<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

const image1 = new URL('@/assets/images/section8/1.png', import.meta.url).href;
const image2 = new URL('@/assets/images/section8/2.jpg', import.meta.url).href;
const image3 = new URL('@/assets/images/section8/3.png', import.meta.url).href;
const image4 = new URL('@/assets/images/section8/4.jpg', import.meta.url).href;
const image5 = new URL('@/assets/images/section8/5.png', import.meta.url).href;

</script>

<template>
<section class="w-full flex flex-col justify-center items-center bg-primary-100">

    <div class="w-full lg:h-36 flex flex-row justify-end">
        <div class="w-2/5 h-full bg-white"></div>
    </div>

    <div class="w-2/3 lg:w-full mt-6 lg:mt-0 lg:pl-[15rem] mb-8 lg:mb-36">
        <img src="@/assets/images/section8/title.png" alt="" class="object-cover">
    </div>

    <div class="w-full lg:w-10/12 flex flex-col justify-center items-center mb-16">

        <div class="w-full flex flex-col lg:flex-row justify-center items-center mb-0 lg:mb-2">
            <div class="w-full lg:w-1/3 h-96 lg:mr-2 mb-1 lg:mb-0">
                <ImageContainer :src="image1" alt="" />
            </div>
            <div class="w-full lg:w-1/3 h-96 lg:mr-2 mb-1 lg:mb-0">
                <ImageContainer :src="image2" alt="" />
            </div>
            <div class="w-full lg:w-1/3 h-96 mb-1 lg:mb-0">
                <ImageContainer :src="image3" alt="" />
            </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row justify-center items-center">
            <div class="w-full lg:w-1/2 h-[36rem] lg:mr-2 mb-1 lg:mb-0">
                <ImageContainer :src="image4" alt="" />
            </div>
            <div class="w-full lg:w-1/2 h-[36rem]">
                <ImageContainer :src="image5" alt="" />
            </div>
        </div>

    </div>

    <div class="w-full mb-6 lg:mb-14">
        <img src="@/assets/images/section8/border.png" alt="" class="object-cover">
    </div>

    <div class="w-10/12 flex flex-col justify-center items-start">
        <p class="text-primary-300 font-bold text-[0.65rem] xl:text-xl">
            25年來，「同興協記」努力不懈、持續進化<br>
            以 PMG 細細打磨，讓每棟作品煥發獨特光芒<br>
            Pragmatic 務實職人、Modern 與時俱進、Green 自然共生···<br>
            因時因地制宜、用建築與環境共鳴<br>
            MADE　IN 同興協記，美的 IN 同興協記<br>
            是共識也是宣示，U ARE SHINING！<br>
        </p>
    </div>

</section>
</template>

<style scoped>
</style>
