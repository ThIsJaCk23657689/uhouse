<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import ImageContainer from '@/components/ImageContainer.vue';

const image1 = new URL('@/assets/images/section4/pic1.png', import.meta.url).href;
const image2 = new URL('@/assets/images/section4/pic2.png', import.meta.url).href;

</script>

<template>
<section class="w-full flex flex-col justify-center items-center relative">

    <div class="w-full bg-zinc-200 lg:bg-transparent relative lg:absolute top-0 left-0 flex flex-col lg:flex-row items-center">
        <!-- 圖片1 -->
        <div class="w-full h-96 lg:w-2/3 lg:h-[52rem] mb-8 lg:mb-0 lg:mr-6">
            <ImageContainer :src="image1" alt="" />
        </div>

        <!-- 標題1 -->
        <div class="flex flex-col w-2/3 lg:w-1/3 justify-center items-start">
            <div class="w-full mb-10 lg:mb-0">
                <img src="@/assets/images/section4/title.png" alt="" class="object-cover">
            </div>
            <div class="w-full flex lg:hidden">
                <p class="text-primary-300 font-bold text-[0.5rem] sm:text-base xl:text-xl">
                    灰白色系、層層遞進的框架，透過天光勾勒建築秩序<br>
                    將石材基座、格珊、琴鍵律動點亮<br>
                    川流地景相映，形成獨特座標美學<br>
                    步入大廳，宛如置身寶格麗飯店<br>
                    潑墨般大理石紋牆面、摩登傢飾，鋪陳出新復古情調<br>
                    家的顏值　有型有款，U ARE STYLE！<br>
                </p>
            </div>
        </div>

    </div>

    <div class="w-full lg:h-32"></div>
    <div class="w-full lg:h-[54rem] bg-zinc-200"></div>

    <div class="w-full flex flex-col justify-center items-center relative bg-zinc-200 pt-8 lg:pt-0">

        <!-- 內文介紹 -->
        <div class="w-full flex flex-col justify-center items-start lg:ml-[62rem] mb-24 lg:mb-48 lg:border-l-4 lg:border-primary-200">
            <div class="mb-6 lg:mb-12 pl-4">
                <p class="text-primary-300 font-bold text-[0.5rem] sm:text-base xl:text-xl hidden lg:flex">
                    灰白色系、層層遞進的框架，透過天光勾勒建築秩序<br>
                    將石材基座、格珊、琴鍵律動點亮<br>
                    川流地景相映，形成獨特座標美學<br>
                    步入大廳，宛如置身寶格麗飯店<br>
                    潑墨般大理石紋牆面、摩登傢飾，鋪陳出新復古情調<br>
                    家的顏值　有型有款，U ARE STYLE！<br>
                </p>
            </div>
            <div class="w-full lg:w-1/2 h-96 lg:h-[36rem]">
                <ImageContainer :src="image2" alt="" />
            </div>
        </div>
        
    </div>

</section>
</template>

<style scoped>
</style>
