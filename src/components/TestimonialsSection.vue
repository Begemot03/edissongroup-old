<template>
	<section class="bg-slate-100 min-h-screen">
		<BaseContainer class="relative flex flex-col">
			<BaseTitle>Отзывы наших клиентов</BaseTitle>
			<carousel
				ref="mycarousel"
				class="z-0"
				:wrap-around="true"
				:transition="1000"
				:breakpoints="breakpoints"
			>
				<slide
					v-for="testimonial in testimonials"
					:key="testimonial.id"
				>
					<TestimonialCard
						:data="testimonial"
					/>
				</slide>
				<template #addons>
					<navigation />
					<carousel-arrows
						class="bottom-0 right-0 translate-y-[75px] md:translate-y-[100px]"
						dark="true"
						@next-slide="nextSlide"
						@prev-slide="prevSlide"
					/>
				</template>
			</carousel>
		</BaseContainer>
	</section>
</template>

<script>
	export default {
		name: "TestimonialsSection"
	}
</script>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';

const CarouselArrows = defineAsyncComponent(() => import('@/components/CarouselArrows.vue'));
const TestimonialCard = defineAsyncComponent(() => import('@/components/TestimonialCard.vue'));

const testimonials = [
	{ id: 1, title: "Петров Андрей", stage: "Частный Сектор", description: "Утеплили цоколь деревянного дома Термопанелями, толщина 100мм. Не плохой материал, мои монтажники довольно быстро их смонтировали. Не понравилось и смутило то, что панели в первые дни монтажа были по краям немного другого цвета, производитель сказал что это уйдет как только панели полностью просохнут на фасаде. Сейчас уже прошло с момента монтажа где-то 3 месяца, все в порядке, где-то через недельку все эти пятна ушли и цоколь стал весь в один цвет." },
	{ id: 2, title: "Иванов Степан", stage: "Бригадир", description: "Я бригадир, мы занимаемся монтажом фасадов, так вот один из наших заказчиков решил утеплить и закрыть фасад своего дома термопанелями. Выбор пал на данного производителя. С термопанелями ранее мы не работали, поэтому монтаж выполняли впервые. Сразу скажу честно, монтаж не такой простой, как кажется на первый взгляд, но если смотреть на другие материалы, то везде есть свои нюансы. Тут плюс то что не нужно никакой подсистемы." },
	{ id: 3, title: "Папеева Яна", stage: "Частный Сектор", description: "Отделали дом данными термопанелями, понравилось обслуживание в данной компании, очень оперативно проконсультировали нас по данным панелям, сделали расчеты всей сметы. В итоге всем практически остались довольны, материал свой получили через 3 недели после оплаты. Лично нам свой дом после отделки этими панелями понравился, мрамор красиво переливается на солнце." },
	{ id: 4, title: "Фардиев Сергей", stage: "Частный Сектор", description: "В интернете познакомился с фасадными термопанелями с декоративным покрытием из натурального мрамора. В Чебоксарах нашел только эту производственную компанию, которая имеет все сертификаты и производит продукцию не в гаражных условиях. Предоставил все замеры и пожелания, подобрали нужный цвет термопанелей. В итоге за неделю пришли к договору. Монтаж сам буду делать. 220кв.м вышло, этот объем мне произвели за неделю. Отличная альтернатива виниловому и металло-Сайдингу, на монтаже сэкономил и на фасаде." },
	{ id: 5, title: "Каштанов Ильсаф", stage: "Проектировщик ИЖС", description: "Работаю проектировщиком ИЖС и искал интересный материал для облицовки фасадов. Нашел гибкий камень. В городе Чебоксары производством занимается компания Edisson Group. Связался с ними проконсультироваться по необходимым материалам, рассказали про термические характеристики и про условия эксплуатации. С большим удовольствием буду использовать данный материал в своих проектах!" },
];

const breakpoints = {
	0: {
		itemsToShow: 1,
	},
	600: {
		itemsToShow: 1.5,
	},
	1200: {
		itemsToShow: 2.5,
	},
	1700: {
		itemsToShow: 3.5,
	},
}

const mycarousel = ref(null);

function nextSlide() {
	mycarousel.value.next();
}

function prevSlide() {
	mycarousel.value.prev();
}
</script>

<style lang="scss" scoped>

</style>