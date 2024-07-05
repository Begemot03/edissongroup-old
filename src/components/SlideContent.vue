<template>
	<div
		class="carousel__item bg-cover bg-center bg-custom-dark/80 bg-blend-overlay"
		:style="bgUrl(props.slideData.link)"
	>
		<BaseContainer class="flex flex-col items-start justify-center">
			<h1 class="text-slate-100 text-2xl font-bold text-left max-w-[800px] md:text-5xl">
				{{ slideData.title }}
			</h1>
			<p class="text-md md:text-lg font-extrabold my-4">
				<span class="inline-block align-middle">
					<svg
						class="w-12 h-12"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12 2a3 3 0 0 0-2.1.9l-.9.9a1 1 0 0 1-.7.3H7a3 3 0 0 0-3 3v1.2c0 .3 0 .5-.2.7l-1 .9a3 3 0 0 0 0 4.2l1 .9c.2.2.3.4.3.7V17a3 3 0 0 0 3 3h1.2c.3 0 .5 0 .7.2l.9 1a3 3 0 0 0 4.2 0l.9-1c.2-.2.4-.3.7-.3H17a3 3 0 0 0 3-3v-1.2c0-.3 0-.5.2-.7l1-.9a3 3 0 0 0 0-4.2l-1-.9a1 1 0 0 1-.3-.7V7a3 3 0 0 0-3-3h-1.2a1 1 0 0 1-.7-.2l-.9-1A3 3 0 0 0 12 2Zm3.7 7.7a1 1 0 1 0-1.4-1.4L10 12.6l-1.3-1.3a1 1 0 0 0-1.4 1.4l2 2c.4.4 1 .4 1.4 0l5-5Z"
							clip-rule="evenodd"
						/>
					</svg>
  
				</span> <span class="border-b border-slate-100">Гарантия 50 лет</span>
			</p>
			<p
				v-if="props.slideData.price !== 1"
				class="text-md md:text-lg font-extrabold"
			>
				Цена от {{ props.slideData.price }} рублей за м<sup>2</sup>
			</p>
			<p
				v-else
				class="text-md md:text-lg font-extrabold"
			>
				Цена по каталогу
			</p>
		</BaseContainer>
	</div>
</template>

<script>
	
export default {
	name: "SlideContent"
}
</script>

<script setup>
import bgUrl from "@/utilities/bgUrl";

const props = defineProps({
	slideData: {
		type: Object,
		required: true
	}
});

</script>

<style lang="scss" scoped>

</style>