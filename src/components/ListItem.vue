<template>
	<div
		class="flex justify-start items-start"
	>
		<img
			class="w-20 md:w-28"
			:src="require(`@/assets/${props.data.img}`)"
			:alt="props.data.img"
			loading="lazy"
		>
		<div class="flex flex-col ml-4 md:ml-8">
			<h3 class="mb-2 text-lg md:text-2xl">
				{{ props.data.title }} 
				<span
					v-if="props.data.icon !== undefined"
					class="inline-block align-middle"
				>
					<svg
						class="text-custom-dark"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						viewBox="0 0 16 16"
					>
						<path :d="props.data.icon" />
					</svg>
				</span>
			</h3>
						
			<p class="text-md md:text-lg">
				{{ props.data.description }}
			</p>
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		name: "ListItem"
	}
</script>

<script setup>

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});

</script>

<style lang="scss" scoped>

</style>