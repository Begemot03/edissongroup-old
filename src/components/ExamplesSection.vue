<template>
	<section
		id="EXAMPLES"
		class="bg-slate-100"
	>
		<BaseContainer class="relative flex flex-col">
			<BaseTitle>Примеры отделки</BaseTitle>
			<carousel
				ref="mycarousel"
				class="z-0"
				:wrap-around="true"
				:transition="1000"
				:breakpoints="breakpoints"
			>
				<slide
					v-for="example in examples"
					:key="example.id"
				>
					<img
						class="shadow-md w-[350px] h-[300px]"
						:src="require(`@/assets/${example.img}`)"
						alt="Примеры отделки термопанелями"
						loading="lazy"
					>
				</slide>
				<template #addons>
					<navigation />
					<CarouselArrows
						class="bottom-0 right-0 translate-y-[75px] md:translate-y-[100px]"
						dark="true"
						@next-slide="nextSlide"
						@prev-slide="prevSlide"
					/>
				</template>
			</carousel>
		</BaseContainer>
	</section>
</template>

<script>
	export default {
		name: "ExamplesSection"
	}
</script>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from 'vue';

import { defineAsyncComponent } from 'vue';

const CarouselArrows = defineAsyncComponent(() => import('@/components/CarouselArrows.vue'));

const examples = [
	{ id: 1, img: 'examplesSection/2.webp' },
	{ id: 2, img: 'examplesSection/1.webp' },
	{ id: 3, img: 'examplesSection/3.webp' },
	{ id: 4, img: 'examplesSection/4.webp' },
	{ id: 5, img: 'examplesSection/5.webp' },
	{ id: 6, img: 'examplesSection/6.webp' },
	{ id: 7, img: 'examplesSection/7.webp' },
	{ id: 8, img: 'examplesSection/8.webp' },
	{ id: 9, img: 'examplesSection/9.webp' },
];

const breakpoints = {
	0: {
		itemsToShow: 1,
	},
	600: {
		itemsToShow: 1.5,
	},
	1200: {
		itemsToShow: 2.5,
	},
	1700: {
		itemsToShow: 3.5,
	},
};

const mycarousel = ref(null);

function nextSlide() {
	mycarousel.value.next();
}

function prevSlide() {
	mycarousel.value.prev();
}

</script>

<style lang="scss" scoped>

</style>