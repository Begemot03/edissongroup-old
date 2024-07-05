<template>
	<div class="w-3/4 min-w-[350px] bg-red-500 text-slate-100 px-8 py-12 text-start h-full shadow-md">
		<h3 class="font-bold text-lg lg:text-2xl">
			{{ props.data.title }}
		</h3>
		<div class="text-md opacity-70 pb-4 lg:text-lg">
			{{ props.data.stage }}
		</div>
		<p class="text-md lg:text-lg">
			{{ props.data.description }}
		</p>
	</div>
</template>

<script>
	export default {
		name: "TestimonialCard"
	}
</script>

<script setup>

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
})

</script>

<style lang="scss" scoped>

</style>