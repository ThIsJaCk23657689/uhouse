<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
    to: {
        type: [String, Object],
        default: null,
    },
    class: {
        type: String,
        default: '',
    },
});

const { push, replace } = useRouter();

const navigateToRoute = () => {
    if (props.to) {
        push(props.to);
    } else {
        console.error('RouteButton: No route specified');
    }
};

</script>

<template>
    <button :class="class" @click="navigateToRoute">
        <slot></slot>
    </button>
</template>

<style scoped>
</style>