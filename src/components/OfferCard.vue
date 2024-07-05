<template>
	<div
		class="transition-all duration-700 w-full max-w-[450px] min-h-[600px] flex flex-col items-center justify-center bg-[length:130%] shadow-md bg-center hover:bg-[length:150%] focus:bg-[length:150%]"
		:style="bgUrl(props.data.img)"
	>
		<h3 class="text-lg text-center text-slate-100 mb-12 md:mb-16 md:text-2xl">
			{{ props.data.title }}
		</h3>
		<BaseButton @click="emit('open')">
			Подробнее
		</BaseButton>
	</div>
</template>

<script>
	export default {
		name: "OfferCard"
	}
</script>

<script setup>
import bgUrl from "@/utilities/bgUrl";

const props = defineProps({
	data: {
		type: Object,
		required: true
	}
});

const emit = defineEmits(["open"]);

</script>

<style lang="scss" scoped>

</style>