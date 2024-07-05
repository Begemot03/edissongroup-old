<template>
	<RouterLink
		class="text-md py-2 text-custom-dark border-b border-custom-dark border-opacity-0 transition-all hover:border-opacity-100 hover:cursor-pointer focus:border-opacity-100 md:text-lg"
		:to="props.data.link"
	>
		{{ props.data.text }}
	</RouterLink>
</template>

<script>

export default {
	name: "BaseLink"
}

</script>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
})
</script>

<style lang="scss" scoped>

</style>