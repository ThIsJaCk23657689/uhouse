<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

</script>

<template>
<section class="w-full flex flex-col justify-center items-center relative">

    <!-- 圖片1 -->
    <div class="absolute top-0 left-0 w-2/3">
        <img src="@/assets/images/section4/pic1.png" alt="" class="object-cover">
    </div>

    <!-- 標題1 -->
    <div class="absolute top-[36rem] right-28">
        <img src="@/assets/images/section4/title.png" alt="" class="object-cover">
    </div>

    <div class="w-full h-32"></div>
    <div class="w-full h-[56rem] bg-zinc-200"></div>

    <div class="w-full flex flex-col justify-center items-center relative bg-zinc-200">

        <!-- 內文介紹 -->
        <div class="w-full flex flex-col justify-center items-start ml-[62rem] mb-48 border-l-4 border-primary-200">
            <div class="mb-12 pl-4">
                <p class="text-primary-300 font-bold text-[0.5rem] sm:text-base xl:text-xl">
                    灰白色系、層層遞進的框架，透過天光勾勒建築秩序<br>
                    將石材基座、格珊、琴鍵律動點亮<br>
                    川流地景相映，形成獨特座標美學<br>
                    步入大廳，宛如置身寶格麗飯店<br>
                    潑墨般大理石紋牆面、摩登傢飾，鋪陳出新復古情調<br>
                    家的顏值　有型有款，U ARE STYLE！<br>
                </p>
            </div>
            <div class="w-1/2">
                <img src="@/assets/images/section4/pic2.png" alt="" class="w-full object-cover">
            </div>
        </div>



    </div>
</section>
</template>

<style scoped>
</style>
