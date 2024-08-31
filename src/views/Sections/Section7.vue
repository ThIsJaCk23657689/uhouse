<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

const image1 = new URL('@/assets/images/section7/1.png', import.meta.url).href;
const image2 = new URL('@/assets/images/section7/2.png', import.meta.url).href;
const image3 = new URL('@/assets/images/section7/3.png', import.meta.url).href;
const image4 = new URL('@/assets/images/section7/4.png', import.meta.url).href;

</script>

<template>
<section class="w-full flex flex-col justify-center items-center pt-24">

    <div class="w-full flex flex-col lg:flex-row justify-center items-start mb-20 lg:mb-64">

        <!-- 左側 -->
        <div class="w-full lg:w-1/2 h-full flex flex-col justify-start items-end pr-0 lg:pr-4 xl:pr-8">

            <div class="w-full lg:w-4/5 xl:w-3/5 h-[28rem] mb-2">
                <ImageContainer :src="image1" alt="" />
            </div>

            <div class="w-full lg:w-4/5 xl:w-3/5 h-[28rem] mb-16 lg:mb-32">
                <ImageContainer :src="image2" alt="" />
            </div>

            <!-- 文字 -->
            <div class="w-full lg:w-3/5 pl-6 lg:pl-0 mb-24 lg:mb-12">
                <p class="text-primary-300 font-bold text-[0.5rem] sm:text-base xl:text-xl">
                    精品就是生活，生活就是精品<br>
                    以高級訂製概念，打造居家質感<br>
                    國際級頂規選品，有機能也要夠美型<br>
                    夢想清單　美好一室，U ARE UNIQUE！<br>
                </p>
            </div>

        </div>

        <!-- 右側 -->
        <div class="w-full lg:w-1/2 h-full flex flex-col justify-start items-start lg:pt-32 pl-0 lg:pl-4 xl:pl-8">

            <div class="w-full lg:w-4/5 xl:w-3/5 h-[62rem] mb-2">
                <ImageContainer :src="image3" alt="" />
            </div>

            <div class="w-full lg:w-4/5 xl:w-3/5 h-[24rem]">
                <ImageContainer :src="image4" alt="" />
            </div>
    
        </div>

    </div>
</section>
</template>

<style scoped>
</style>
