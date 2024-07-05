<template>
	<section
		id="EXAMPLES"
		class="bg-slate-100"
	>
		<BaseContainer class="relative flex flex-col">
			<BaseTitle>Потрясающий отделочный материал, который вызывает восторг</BaseTitle>
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
						alt="Отделка гибким камнем"
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
		name: "SeasonSection"
	}
</script>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';

const CarouselArrows = defineAsyncComponent(() => import('@/components/CarouselArrows.vue'));



const examples = [
	{ id: 1, img: 'season/1.jpg' },
	{ id: 2, img: 'season/2.jpg' },
	{ id: 3, img: 'season/3.jpg' },
	{ id: 4, img: 'season/4.jpg' },
	{ id: 5, img: 'season/5.jpg' },
	{ id: 6, img: 'season/6.jpg' },
	{ id: 7, img: 'season/7.jpg' },
	{ id: 8, img: 'season/8.jpg' },
	{ id: 9, img: 'season/9.jpg' },
	{ id: 10, img: 'season/10.jpg' },
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