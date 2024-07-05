<template>
	<RouterLink :to="'/'">
		<img
			class="transition-all hover:cursor-pointer hover:opacity-80"
			:class="state[size]"
			src="@/assets/logo.webp"
			alt="edisson group logo"
			loading="lazy"
		>
	</RouterLink>
</template>

<script>
export default {
	name: "BaseLogo"
}
</script>

<script setup>
import { RouterLink } from 'vue-router';


const props = defineProps({
	size: {
		type: String,
		required: false,
		default: "sm"
	}
});

const state = {
	sm: "w-8 md:w-12",
	md: "w-10 md:w-14",
	lg: "w-12 md:w-16"
};


</script>

<style lang="scss" scoped>

</style>