<script setup lang="ts">
import { ref, onMounted } from 'vue';
</script>

<template>
<section class="w-full h-min-screen flex justify-end items-center bg-primary-100 relative">
    <div class="absolute top-0" style="left: -7%;">
        <Transition name="slide-right" appear>
            <img src="@/assets/images/section1/big_u.png" alt="" class="object-cover" style="width: 90%;">
        </Transition>
    </div>
    <div class="w-3/5 h-screen flex flex-row justify-cener items-center">
        <div class="mr-6">
            <Transition name="slide-down" appear>
                <img src="@/assets/images/section1/small_u.png" alt="" class="object-cover">
            </Transition>
        </div>
        <div class="flex flex-col justify-cener items-start">
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
                <div class="flex flex-col justify-center items-start">
                    <span class="text-4xl font-bold text-primary-300 tracking-widest">同興協記 25TH 新作</span>
                    <span class="text-4xl font-bold text-primary-300 tracking-widest">U HOUSE 給懂生活的你</span>
                </div>
            </Transition>
        </div>
    </div>
</section>
</template>

<style scoped>
</style>
