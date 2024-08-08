<script setup lang="ts">
import ImageContainer from '@/components/ImageContainer.vue';

const imageLeft = new URL('@/assets/images/section3/left.png', import.meta.url).href;
const imageTop = new URL('@/assets/images/section3/top.png', import.meta.url).href;
const imageDown = new URL('@/assets/images/section3/down.png', import.meta.url).href;
const imageRight = new URL('@/assets/images/section3/right.png', import.meta.url).href;

</script>

<template>
<section class="w-full h-min-screen flex flex-col justify-center items-center relative">
    <div class="absolute flex flex-col z-20" style="top: 16.7%; left: 40.07%;">
        <img src="@/assets/images/section3/blue_stick.png" alt="" class="object-cover">
    </div>
    <div class="w-full relative" style="height:560px;">
        <div class="absolute w-full flex flex-col" style="top: 28%; left: 21.5%;">
            <div class="mb-4">
                <img src="@/assets/images/section3/u_are_next.png" alt="" class="object-cover">
            </div>
            <div class="" style="margin-left: 21.5%;">
                <img src="@/assets/images/section3/title.png" alt="" class="object-cover">
            </div>
        </div>
        <div class="absolute" style="width: 15.8%; top: 0%; right: 0%;">
            <img src="@/assets/images/section3/banner.png" alt="" class="object-cover">
        </div>
    </div>
    <div class="w-full flex flex-row justify-center items-center" style="height:544px;">
        <div class="w-2/5 h-full mr-4">
            <ImageContainer :src="imageLeft" alt="" />
        </div>
        <div class="w-1/5 h-full flex flex-col justify-center items-center mr-2">
            <div class="w-full h-1/2 mb-2">
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
    <div class="w-full h-half-screen flex flex-row justify-center">
        <p class="w-1/3 text-primary-300 font-bold text-xl" style="margin-left: 14.5%; margin-top: 124px;">
            5 分鐘雙鐵共構大慶站、中投快速道路<br/>
            捷運暢遊 COSTCO、迪卡農、文心秀泰、新市政中心···<br/>
            與 13 期重劃共榮共利，前景滾燙、磁吸效應驚人<br/>
            國圖館、國美館、中山醫、柳川、忠明綠園道···<br/>
            快繁華與慢悠閒，在此自由切換 —<br/>
            城市就是主場優勢，U ARE NEXT！
        </p>
    </div>
</section>
</template>

<style scoped>
</style>
