<template>
	<div>
		<div
			class="transition-all group hover:opacity-80 border-b-2 border-custom-dark border-opacity-20 hover:cursor-pointer "
			@click="toggleHide"
		>
			<span class="text-lg lg:text-2xl">{{ title }}</span>
			<span
				class="transition-all inline-block will-change-transform text-lg pl-0.5 align-middle md:text-2xl group-hover:translate-x-2 md:pl-2"
			>
				<svg
					class="w-6 h-6 text-custom-dark"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1"
						d="m9 5 7 7-7 7"
					/>
				</svg>
			</span>
		</div>
		<Transition>
			<div
				v-if="!hidden"
				class="mt-4 text-md lg:text-lg"
			>
				{{ content }}
			</div>
		</Transition>
	</div>
</template>

<script>
	export default {
		name: "BasePopup"
	}
</script>

<script setup>
import { ref } from 'vue';

const hidden = ref(true);

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: false,
		default: "Тут пока пусто"
	},
});

function toggleHide() {
	hidden.value = !hidden.value;
}

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>