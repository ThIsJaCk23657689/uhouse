<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount  } from 'vue';

const container = ref<HTMLElement | null>(null);
const panoramaImage = ref<HTMLElement | null>(null);
const imageOffset = ref(0);
const startX = ref(0);
const isDragging = ref(false);
const imageMaxOffset = ref(0);
const imageTransform = ref<string>('translateX(0px)');

const imageWidth = ref<number>(0);
const imageHeight = ref<number>(0);
const bgUrl = new URL('@/assets/images/section2/map.png', import.meta.url).href;

const startDrag = (e: MouseEvent | TouchEvent) => {
	isDragging.value = true;
	const initialOffset = (e instanceof MouseEvent ? e.pageX : e.touches[0].pageX);
	startX.value = initialOffset - imageOffset.value;
};

const onDrag = (e: MouseEvent | TouchEvent) => {
	if (!isDragging.value) return;

	console.log('onDrag');

	const currentX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
	let offset = currentX - startX.value;

	if (offset > imageMaxOffset.value) {
		offset = imageMaxOffset.value; // 限制向右滑動的極限
	} else if (offset < -imageMaxOffset.value) {
		offset = -imageMaxOffset.value; // 限制向左滑動的極限
	}

	imageOffset.value = offset;
	imageTransform.value = `translateX(${imageOffset.value}px)`;
	console.log('imageOffset', imageTransform.value);
};

const stopDrag = () => {
	isDragging.value = false;
};

// 計算圖片的最大偏移量
const calculateOffsets = () => {
	const containerWidth = container.value?.clientWidth || 0;
	const containerHeight = container.value?.clientHeight || 0;

	const img = new Image();
	img.src = bgUrl;
	
	img.onload = () => {
		const aspectRatio = img.width / img.height;

		if (containerWidth / aspectRatio >= containerHeight) {
			// 要把圖片等比放大到與 container 寬度相等
			imageWidth.value = containerWidth;
			imageHeight.value = containerWidth / aspectRatio;
		}
		else {
			// 要把圖片等比放大到與 container 高度相等
			imageHeight.value = containerHeight;
			imageWidth.value = containerHeight * aspectRatio;
		}
	};

	imageMaxOffset.value = (imageWidth.value - containerWidth) / 2;
	if ( imageMaxOffset.value < 0 ) {
		imageMaxOffset.value = 0;
	}

	if (imageOffset.value > imageMaxOffset.value) {
		imageOffset.value = imageMaxOffset.value;
	} else if (imageOffset.value < -imageMaxOffset.value) {
		imageOffset.value = -imageMaxOffset.value;
	}
	imageTransform.value = `translateX(${imageOffset.value}px)`;
};

onMounted(() => {
	calculateOffsets();

	// 監聽視窗調整事件
	window.addEventListener('resize', calculateOffsets);
});

onBeforeUnmount(() => {
	// 清除視窗調整事件的監聽
	window.removeEventListener('resize', calculateOffsets);
});
</script>

<template>
<section id="main" 
		class="w-full h-screen flex justify-center items-center relative overflow-hidden cursor-grab lg:cursor-default"
		@mousedown="startDrag"
		@mousemove="onDrag"
		@mouseup="stopDrag"
		@mouseleave="stopDrag"
		@touchstart="startDrag"
		@touchmove="onDrag"
		@touchend="stopDrag">
		
	<div ref="container" class="w-full h-full flex justify-center items-center overflow-hidden">
		<img ref="panoramaImage" 
			:src="bgUrl" 
			alt="" 
			class="max-w-none max-h-none" 
			:style="{ width: imageWidth + 'px', height: imageHeight + 'px', transform: imageTransform }">
	</div>

	<div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 z-10 hover:bg-opacity-5 transition-1000-out">
	</div>

</section>
</template>

<style scoped>
</style>
