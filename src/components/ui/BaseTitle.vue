<template>
	<h2
		class="relative my-24 text-xl after:absolute after:-bottom-2 after:left-0 after:w-16 after:h-0.5 md:text-3xl md:my-32 md:after:-bottom-4 md:after:h-1"
		:class="darken ? 'text-custom-dark after:bg-custom-dark after:opacity-20' : 'text-slate-100 after:bg-slate-100 after:opacity-100'"
	>
		<slot />
	</h2>
</template>

<script>
export default {
	name: "BaseTitle",		
}
</script>

<script setup>

const props = defineProps({
	darken: {
		type: Boolean,
		default: true
	}
});

</script>

<style lang="scss" scoped>

</style>