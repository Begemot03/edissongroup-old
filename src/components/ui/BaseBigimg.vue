<template>
	<img
		class="mt-12 drop-shadow-md object-cover w-full max-w-[450px] justify-self-center lg:mt-0 lg:justify-self-end lg:w-auto max-h-[800px]"
		:src="props.link"
		alt="Термопанели"
		loading="lazy"
	>
</template>

<script>
	export default {
		name: "BaseBigimg",
	}
</script>

<script setup>

const props = defineProps({
	link: {
		type: String,
		required: true,
	}
});

</script>

<style lang="scss" scoped>

</style>