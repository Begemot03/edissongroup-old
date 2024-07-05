<template>
	<div
		v-if="!props.hidden"
		class="z-20 fixed bg-custom-dark bg-opacity-80 top-0 left-0 bottom-0 right-0 flex items-center justify-center"
		@click="emit('close')"
	>
		<div
			class="bg-slate-100 px-12 py-12 shadow-md flex flex-col justify-start items-center space-y-8 md:space-y-12"
			@click.stop
		>
			<p class="text-custom-dark text-lg lg:text-2xl self-end">
				{{ props.title }}
				<span
					class="inline-block align-middle self-end text-custom-dark hover:cursor-pointer hover:opacity-80"
					@click="emit('close')"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						class="bi bi-x-lg"
						viewBox="0 0 16 16"
					>
						<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
					</svg>
				</span>
			</p>
			
			<form
				class="w-full flex flex-col justify-center items-center"
				@submit.prevent
			>
				<BaseInput
					v-model="formData.name"
					class="w-full"
					:dark="true"
					placeholder="Имя..."
				/>
				<BaseInput
					v-model="formData.phone"
					class="w-full mt-6"
					:dark="true"
					placeholder="Номер телефона..."
				/>
				<BaseButton
					class="mt-12 md:mt-16"
					@click="send"
				>
					Оставить заявку
				</BaseButton>
			</form>
			<span>
				<span class="inline-block align-middle">
					<svg
						class="w-8 h-8 text-custom-dark"
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
							d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
						/>
					</svg>
				</span>
				<span class="text-custom-dark">+7-993-553-78-88</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "BaseModal"
	}
</script>

<script setup>
import feedback from "@/utilities/feedback.js";
import { reactive } from 'vue';


const props = defineProps({
	hidden: {
		type: Boolean,
		required: false,
		default: true,
	},
	title: {
		type: String,
		required: true
	},
});

const formData = reactive({
	name: "",
	phone: "",
});

const emit = defineEmits(['close', 'click']);

function send(e) {
	if(formData.name === "" || !formData.phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) {
		alert("Пожалуйста заполните все поля.")
		return;
	}

	feedback({ name: formData.name, phone: formData.phone, ask: props.title });
}

</script>

<style lang="scss" scoped>

</style>