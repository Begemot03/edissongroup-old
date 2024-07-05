<template>
	<input
		class="transition-all bg-transparent outline-none text-md py-2 px-4 border-b border-opacity-80 placeholder:opacity-80 focus:border-opacity-100 focus:placeholder:opacity-100 md:text-lg "
		:class="props.dark ? 'text-custom-dark  border-b-custom-dark focus:caret-custom-dark' : 'text-slate-100  border-b-slate-100 focus:caret-slate-100'"
		type="text"
		:value="props.modelValue"
		@input="emit('update:modelValue', $event.target.value)"
	>
</template>

<script>
	export default {
		name: "BaseInput",
	}
</script>

<script setup>

const props = defineProps({
	modelValue: {
		type: String,
		default: ""
	},
	dark: {
		type: Boolean,
		required: false,
		default: false
	}
});

const emit = defineEmits(["update:modelValue"])

</script>

<style lang="scss" scoped>

</style>