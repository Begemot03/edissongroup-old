<template>
	<section
		class="bg-cover bg-center bg-fixed"
		:style="bgUrl('feedbackSection/feedback.webp')"
	>
		<BaseContainer class="flex flex-col justify-between min-h-[90vh]">
			<BaseTitle :darken="false">
				Остались вопросы?
			</BaseTitle>
			<div class="grid grid-cols-1 w-full lg:grid-cols-[1fr_2fr] gap-6">
				<p class="text-lg lg:text-2xl text-slate-100">
					Оставьте заявку и наши специалисты свяжутся с вами в течение 10 минут.
				</p>
				<form
					class="grid grid-cols-1 gap-6 md:grid-cols-2"
					@submit.prevent
				>
					<div class="flex flex-col w-full justify-between space-y-6">
						<BaseInput
							v-model="inputs.name"
							placeholder="Имя..."
						/>
						<BaseInput
							v-model="inputs.phone"
							placeholder="Номер телефона..."
						/>
						<BaseInput
							v-model="inputs.email"
							placeholder="Почта..."
						/>
					</div>
					<div class="flex flex-col w-full justify-between">
						<BaseInput
							v-model="inputs.ask"
							placeholder="Вопрос..."
						/>

						<BaseButton
							class="mt-12 md:mt-0 self-center md:self-end"
							@click="send"
						>
							Оставить заявку
						</BaseButton>
					</div>
				</form>
			</div>
			<div class="flex flex-col justify-between items-center py-8 space-y-6 md:space-y-0 md:flex-row">
				<div class="space-x-6">
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
								d="m18.4 14.8-1.2-1.3a1.7 1.7 0 0 0-2.4 0l-.7.7a1.7 1.7 0 0 1-2.4 0l-1.9-1.9a1.7 1.7 0 0 1 0-2.4l.7-.6a1.7 1.7 0 0 0 0-2.5L9.2 5.6a1.6 1.6 0 0 0-2.4 0c-3.2 3.2-1.7 6.9 1.5 10 3.2 3.3 7 4.8 10.1 1.6a1.6 1.6 0 0 0 0-2.4Z"
							/>
						</svg>
					</span>
					<span class="text-slate-100">+7-993-553-78-88</span>
				</div>
				<div class="flex items-center space-x-6">
					<BaseLogo size="sm" />
					<span class="text-slate-100 text-md lg:text-lg ">edisson group</span>
				</div>
				<BaseSocial />
			</div>
		</BaseContainer>
	</section>
</template>

<script>
export default {
	name: "FeedbackSection"
}
</script>


<script setup>
import feedback from "@/utilities/feedback";
import bgUrl from "@/utilities/bgUrl";
import { reactive } from "vue";

const inputs = reactive({
	name: "",
	ask: "",
	email: "",
	phone: "",
})

function send() {
	if (inputs.name === "" || (!inputs.phone.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/) && !inputs.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))) {
		alert("Пожалуйста заполните все поля.")
		return;
	}

	feedback({ name: inputs.name, phone: inputs.phone, ask: inputs.ask, email: inputs.email });
}

</script>


<style
	lang="scss"
	scoped
></style>