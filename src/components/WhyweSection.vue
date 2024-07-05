<template>
	<section class="bg-slate-100">
		<BaseContainer class="flex flex-col">
			<BaseTitle class="text-custom-dark">
				Почему выбирают нас
			</BaseTitle>
			<div class="relative w-full grid grid-cols-1 lg:grid-cols-2">
				<div class="space-y-12 flex flex-col items-start md:space-y-16">
					<ListItem
						v-for="advantage in advantages"
						:key="advantage.id"
						:data="advantage"
					>
						<ol
							v-if="advantage.id===1"
							class="list-disc pl-4 pt-2"
						>
							<li class="text-md md:text-lg">
								На 21% дешевле винилового  сайдинга с утеплением.
							</li>
							<li class="text-md md:text-lg">
								На 39% дешевле металло-сайдинга с утеплением.
							</li>
							<li class="text-md md:text-lg">
								На 51% дешевле кирпичной кладки.
							</li>
						</ol>
					</ListItem>
					<BaseButton
						class="place-self-center lg:place-self-start"
						@click="openModal"
					>
						Запросить консультацию
					</BaseButton>
				</div>
				<BaseBigimg :link="require('@/assets/whyweSection/whywe.webp')" />
			</div>
		</BaseContainer>
		<BaseModal
			:title="'Заказать консультацию'"
			:hidden="isModalHidden"
			@close="closeModal"
		/>
	</section>
</template>

<script>
	export default {
		name: "WhyweSection"
	}
</script>

<script setup>
import { ref } from 'vue';

const isModalHidden = ref(true);

const advantages = [
	{ id: 1, title: 'Экономим бюджет', description: 'Как показывает практика наши фасадные термопанели с утеплением:', img: 'advantageSection/1.svg'},
	{ id: 2, title: 'Расчет материалов', description: 'Бесплатный выезд замерщика и честный расчет материалов на ваш объект.', img: 'advantageSection/2.svg'},
	{ id: 3, title: 'Гибкая система оплаты', description: 'Несколько видов оплаты: расчетный счет, онлайн оплата, наличные, рассрочка.', img: 'advantageSection/3.svg'},
];

function closeModal() {
	isModalHidden.value = true;
}

function openModal() {
	isModalHidden.value = false;
}

</script>

<style lang="scss" scoped>

</style>