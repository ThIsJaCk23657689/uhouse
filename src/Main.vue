<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';

import Section1 from '@/views/Sections/Section1.vue';
import Section2 from '@/views/Sections/Section2.vue';
import Section3 from '@/views/Sections/Section3.vue';
import Section4 from '@/views/Sections/Section4.vue';
import Section5 from '@/views/Sections/Section5.vue';
import Section6 from '@/views/Sections/Section6.vue';
import Section7 from '@/views/Sections/Section7.vue';
import Section8 from '@/views/Sections/Section8.vue';
import Section9 from '@/views/Sections/Section9.vue';

const Sections = [
	Section1,
	Section2,
	Section3,
	Section4,
	Section5,
	Section6,
	Section7,
	Section8,
	Section9
];

</script>

<template>
<div class="w-full flex flex-col justify-center items-center">
	<component
		v-for="(Section, index) in Sections"
		:key="index"
		:is="Section"
		class="section"
	/>
</div>
</template>

<style scoped>
</style>
