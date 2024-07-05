<template>
	<button
		class="text-md w-auto max-w-[300px] bg-red-500 text-slate-100 py-4 px-4 border-2 border-custom-blue transition-all hover:bg-custom-blue hover:translate-x-1 hover:cursor-pointer md:text-lg"
	>
		<slot />
	</button>
</template>

<script>
export default {
	name: "BaseButton"
}
</script>

<style lang="scss" scoped>

</style>