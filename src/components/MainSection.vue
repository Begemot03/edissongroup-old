<template>
	<carousel
		ref="mycarousel"
		class="z-0 min-h-screen"
		:wrap-around="true"
		:transition="1000"
	>
		<slide
			v-for="content in slides"
			:key="content.id"
		>
			<slide-content
				:slide-data="content"
			/>
		</slide>
		<template #addons>
			<navigation />
			<CarouselArrows
				class="text-slate-100 bottom-8 right-8 md:right-translate-y-12"
				@next-slide="nextSlide"
				@prev-slide="prevSlide"
			/>
		</template>
	</carousel>
</template>

<script>



export default {
	name: "MainSection"
}
</script>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from "vue";
import { defineAsyncComponent } from 'vue';

const CarouselArrows = defineAsyncComponent(() => import('@/components/CarouselArrows.vue'));
const SlideContent = defineAsyncComponent(() => import('@/components/SlideContent.vue'));


const mycarousel = ref(null);

const slides = [
	{ id: 1, price: 1700, title: "Термопанели от производителя в Чебоксарах", link: "mainSection/1.webp" },
	{ id: 2, price: 1600, title: "Изделия из гибкого камня от производителя в Чебоксарах", link: "mainSection/2.webp" },
	{ id: 3, price: 1600, title: "Каменные обои от производителя в Чебоксарах", link: "mainSection/3.webp" },
	{ id: 4, price: 1, title: "Архитектурный декор от производителя в Чебоксарах", link: "mainSection/4.webp" },
	{ id: 5, price: 1600, title: "Гибкий кирпич от производителя в Чебоксарах", link: "mainSection/5.webp" },
];

function nextSlide() {
	mycarousel.value.next();
}

function prevSlide() {
	mycarousel.value.prev();
}

</script>

<style>
.carousel__item {
	min-height: 100vh;
	width: 100%;
	color: var(--vc-clr-white);
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__prev,
.carousel__next {
	display: none;
}
</style>