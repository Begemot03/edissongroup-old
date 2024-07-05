<template>
	<div
		class="relative h-4 w-8 flex flex-col justify-between hover:cursor-pointer"
		:class=" { 'md:hidden': props.visibilityAll } "
	>
		<div class="w-full h-0.5 bg-custom-dark" />
		<div class="w-full h-0.5 bg-custom-dark" />
		<div class="w-full h-0.5 bg-custom-dark" />
	</div>
</template>

<script>
export default {
	name: "BaseToggler",
}
</script>

<script setup>

const props = defineProps({
	visibilityAll: {
		type: Boolean,
		required: false,
		default: true
	}
})

</script>

<style lang="scss" scoped>

</style>