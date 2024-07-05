<template>
	<div class="absolute">
		<span
			class="inline-block transition-all rotate-180 hover:opacity-80 hover:cursor-pointer focus:opacity-80"
			@click="emits('prevSlide', $event)"
		>
			<svg
				class="w-12 h-12"
				:class="dark ? 'text-custom-dark' : 'text-white'"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m9 5 7 7-7 7"
				/>
			</svg>
		</span>
		<span
			class="inline-block transition-all hover:opacity-80 hover:cursor-pointer focus:opacity-80"
			@click="emits('nextSlide', $event)"
		>
			<svg
				class="w-12 h-12"
				:class="dark ? 'text-custom-dark' : 'text-white'"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="m9 5 7 7-7 7"
				/>
			</svg>
		</span>
	</div>
</template>

<script>
	export default {
		name: "CarouselArrows",
	}
</script>

<script setup>

const emits = defineEmits(["prevSlide", "nextSlide"])
const props = defineProps({
	dark: {
		type: Boolean,
		default: false
	}
});

</script>

<style lang="scss" scoped>

</style>