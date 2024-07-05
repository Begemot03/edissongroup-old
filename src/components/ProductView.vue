<template>
	<div
		class="fixed z-50 w-screen h-screen top-0 bg-custom-dark bg-blend-overlay transition-all duration-500 text-slate-100 bg-center bg-cover"
		:style="bgUrl(props.productInfo.img)"
		:class="props.hidden ? 'right-full' : 'right-0'"
		@click.stop
	>
		<BaseContainer>
			<span
				class="inline-block py-2 -translate-x-2 transition-all rotate-180 hover:-translate-x-4 hover:opacity-80 hover:cursor-pointer focus:opacity-80"
				@click="emit('close')"
			>
				<svg
					class="w-12 h-12 text-slate-100"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m9 5 7 7-7 7"
					/>
				</svg>
			</span>
			<h2 class="text-xl md:text-3xl md:mt-12">
				{{ props.productInfo.title }}
			</h2>
			<p class="max-w-[900px] mt-2 mb-4 text-md md:text-lg md:mt-4">
				{{ props.productInfo.content }}
			</p>
			<p class="hidden max-w-[900px] mt-2 text-md xl:text-lg xl:mb-12 xl:block">
				{{ props.productInfo.desktopContent }}
			</p>
			
			<div class="mb-4 md:mb-16">
				<div class="font-extrabold mb-2 text-md md:mb-4 md:text-xl">
					Свойства материала:
				</div>
				<ul class="space-y-2 md:space-y-4">
					<li
						v-for="beh in props.productBeh"
						:key="beh.id"
						class="text-md md:text-lg"
					>
						<span class="inline-block align-middle">
							<svg
								class="w-8 h-8 text-slate-100"
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
									:d="beh.icon"
								/>
							</svg>
						</span>
						{{ beh.data }}
					</li>
				</ul>
			</div>			
			<div class="flex space-x-2">
				<BaseButton>
					<a
						:href="props.productInfo.catalog"
						download
					>Получить каталог</a>
				</BaseButton>
				<BaseButton @click="openModal">
					Оставить заявку
				</BaseButton>
			</div>
		</BaseContainer>
		<BaseModal
			:title="'Оставить заявку'"
			:hidden="isModalHidden"
			@close="closeModal"
		/>
	</div>
</template>

<script>
	export default {
		name: "ProductView"
	}
</script>

<script setup>
import bgUrl from '@/utilities/bgUrl'; 
import { ref } from 'vue';

const props = defineProps({
	hidden: {
		type: Boolean,
		required: false,
		default: true
	},
	productInfo: {
		type: Object,
		required: true,
	},
	productBeh: {
		type: Object,
		required: true,
	}
});

const emit = defineEmits(["close"]);

const isModalHidden = ref(true);

function closeModal() {
	isModalHidden.value = true;
}

function openModal() {
	isModalHidden.value = false;
}


</script>

<style lang="scss" scoped>

</style>