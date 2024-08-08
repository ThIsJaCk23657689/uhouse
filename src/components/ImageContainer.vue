<script setup lang="ts">
import { defineProps } from 'vue';

interface ImageContainerProps {
    src: string;
    alt: string;
}

const props = defineProps<ImageContainerProps>();
</script>

<template>
<div class="w-full h-full relative overflow-hidden">
    <img :src="src" 
         :alt="alt" 
         class="object-cover absolute inset-0 w-full h-full transition-1000-out transform hover:scale-105">
</div>
</template>

<style scoped>
</style>
