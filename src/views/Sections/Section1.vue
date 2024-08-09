<script setup lang="ts">
import { ref, onMounted } from 'vue';
</script>

<template>
<section class="w-full h-svh flex justify-end items-center bg-primary-100 relative">
    <div class="absolute top-0 lg:w-5/12" style="left: -7%;">
        <Transition name="slide-right" appear>
            <img src="@/assets/images/section1/big_u.png" alt="" class="object-cover w-full">
        </Transition>
    </div>
    <div class="w-full lg:w-6/12 h-screen flex flex-col lg:flex-row justify-end lg:justify-center items-end xl:items-center pb-36 xl:pb-0 z-10">
        <div class="mr-8 mb-24 hidden lg:mr-6 lg:flex">
            <Transition name="slide-down" appear>
                <img src="@/assets/images/section1/small_u.png" alt="" class="object-cover">
            </Transition>
        </div>
        <div class="flex flex-col justify-cener lg:items-start w-full px-8 lg:px-0 w-auto xl:w-2/3">
            <div class="mb-6">
                <Transition name="slide-left" appear>
                    <img src="@/assets/images/section1/are.png" alt="" class="object-cover">
                </Transition>
            </div>
            <div class="mb-6">
                <Transition name="fade" appear>
                    <img src="@/assets/images/section1/what_u_are.png" alt="" class="object-cover">
                </Transition>
            </div>
            <Transition name="fade" appear>
                <div class="flex flex-col justify-center items-end lg:items-start">
                    <span class="text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary-300 tracking-widest">同興協記 25TH 新作</span>
                    <span class="text-2xl sm:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-primary-300 tracking-widest">U HOUSE 給懂生活的你</span>
                </div>
            </Transition>
        </div>
    </div>
    <div class="hidden lg:flex w-1/12"></div>
</section>
</template>

<style scoped>
</style>
