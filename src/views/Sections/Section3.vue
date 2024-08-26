<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';

const imageLeft = new URL('@/assets/images/section3/left.png', import.meta.url).href;
const imageTop = new URL('@/assets/images/section3/top.png', import.meta.url).href;
const imageDown = new URL('@/assets/images/section3/down.png', import.meta.url).href;
const imageRight = new URL('@/assets/images/section3/right.png', import.meta.url).href;

</script>

<template>
<section class="w-full flex flex-col justify-center items-center relative">
    <!-- <div class="absolute flex flex-col z-20" style="top: 16.7%; left: 40.07%;">
        <img src="@/assets/images/section3/blue_stick.png" alt="" class="object-cover">
    </div> -->
    <div class="w-full relative h-48 sm:h-80 lg:h-96 2xl:h-[36rem]">
        <div class="w-1/2 mt-10 ml-16 sm:mt-16 sm:ml-24 lg:ml-48 2xl:mt-28 2xl:ml-96 flex flex-col z-10">
            <div class="mb-2">
                <img src="@/assets/images/section3/u_are_next.png" alt="" class="object-cover">
            </div>
            <div class="ml-20 sm:ml-28 w-2/3 lg:ml-48">
                <img src="@/assets/images/section3/title.png" alt="" class="object-cover">
            </div>
        </div>
        <div class="absolute w-24 sm:w-40 lg:w-48 2xl:w-80" style="top: 0%; right: 0%;">
            <img src="@/assets/images/section3/banner.png" alt="" class="object-cover">
        </div>
    </div>

    <div class="w-full flex flex-row justify-center items-center h-36 sm:h-60 md:h-80 xl:h-[36rem]">
        <div class="w-2/5 h-full mr-1 md:mr-2">
            <ImageContainer :src="imageLeft" alt="" />
        </div>
        <div class="w-1/5 h-full flex flex-col justify-center items-center mr-1 md:mr-2">
            <div class="w-full h-1/2 mb-1 md:mb-2">
                <ImageContainer :src="imageTop" alt="" />
            </div>
            <div class="w-full h-1/2">
                <ImageContainer :src="imageDown" alt="" />
            </div>
        </div>
        <div class="w-2/5 h-full">
            <ImageContainer :src="imageRight" alt="" />
        </div>
    </div>

    <div class="w-full h-36 sm:h-60 md:h-80 xl:h-96 flex flex-row">
        <div class="w-2/5 h-full"></div>
        <div class="w-3/5 h-full ml-2 flex items-center">
            <p class="text-primary-300 font-bold text-[0.5rem] sm:text-base xl:text-xl">
                5 分鐘雙鐵共構大慶站、中投快速道路<br/>
                捷運暢遊 COSTCO、迪卡農、文心秀泰、新市政中心···<br/>
                與 13 期重劃共榮共利，前景滾燙、磁吸效應驚人<br/>
                國圖館、國美館、中山醫、柳川、忠明綠園道···<br/>
                快繁華與慢悠閒，在此自由切換 —<br/>
                城市就是主場優勢，U ARE NEXT！
            </p>
        </div>

    </div>
</section>
</template>

<style scoped>
</style>
