<template>
	<section class="bg-slate-100 min-h-screen">
		<BaseContainer class="flex flex-col">
			<BaseTitle class="text-custom-dark">
				Преимущества термопанелей
			</BaseTitle>
			<div class="relative w-full grid grid-cols-1 lg:grid-cols-2">
				<div class="space-y-12 flex flex-col justify-between items-start md:space-y-16">
					<ListItem
						v-for="advantage in advantages"
						:key="advantage.id"
						:data="advantage"
					/>
				</div>
				<BaseBigimg :link="require('@/assets/advantageSection/advantage.webp')" />
			</div>
		</BaseContainer>
	</section>
</template>

<script>
export default {
	name: 'AdvantageSection'
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue';

const BaseBigimg = defineAsyncComponent(() => import('@/components/ui/BaseBigimg'));

const advantages = [
	{ id: 1, title: 'Долговечность', description: 'Инновационная технология позволяет иметь термопанелям срок службы более 50 лет.', img: 'advantageSection/1.svg', icon: 'M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916z'},
	{ id: 2, title: 'Высокое энергосбережение', description: 'По статистике, после утепления здания, затраты на отопление снижаются на 36-39%.', img: 'advantageSection/2.svg', icon: 'M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708'},
	{ id: 3, title: 'Легкий монтаж', description: 'Скорость монтажа по сравнению с другими фасадными материалами быстрее в 2-3 раза.', img: 'advantageSection/3.svg', icon: 'M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5zM3 4v2h4.5V4zm5.5 0v2H13V4zM3 10v2h4.5v-2zm5.5 0v2H13v-2zM1 1v2h3.5V1zm4.5 0v2h5V1zm6 0v2H15V1zM1 7v2h3.5V7zm4.5 0v2h5V7zm6 0v2H15V7zM1 13v2h3.5v-2zm4.5 0v2h5v-2zm6 0v2H15v-2z'},
	{ id: 4, title: 'Уникальный дизайн', description: 'Возможность выбрать дизайн из широкого спектра цветов для создания неповторимого дизайна.', img: 'advantageSection/4.svg', icon: 'M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7'},
];


</script>

<style lang="scss" scoped>

</style>