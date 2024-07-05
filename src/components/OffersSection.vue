<template>
	<section
		id="OFFERS"
		class="bg-slate-100 min-h-screen"
	>
		<BaseContainer class="flex flex-col">
			<BaseTitle>Мы предлагаем</BaseTitle>
			<div
				class="w-full grid grid-cols-1 place-items-center gap-12 lg:grid-cols-2 md:gap-16 xl:grid-cols-3"
			>
				<OfferCard
					v-for="(offer, i) in offerCards"
					:key="offer.id"
					:data="offer"
					@open="openProductView(i)"
				/>
				<BaseButton
					class="place-self-center lg:place-self-start"
					@click="openModal"
				>
					Подобрать вариант
				</BaseButton>
			</div>
		</BaseContainer>
		<BaseModal
			:title="'Подобрать вариант'"
			:hidden="isModalHidden"
			@close="closeModal"
		/>
		<ProductView
			:product-info="focusProducInfo"
			:product-beh="focusProducBeh"
			:hidden="isProductViewHidden"
			@close="closeProductView"
		/>
	</section>
</template>

<script>
	export default {
		name: "OffersSection"
	}
</script>

<script setup>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';

const ProductView = defineAsyncComponent(() => import('@/components/ProductView.vue'));
const OfferCard = defineAsyncComponent(() => import('@/components/OfferCard.vue'));

const isModalHidden = ref(true);
const isProductViewHidden = ref(true);

const focusProducInfo = ref({ title: "Термопанели", img: "productView/termopanel.webp" ,catalogLink: "termopanel.link", content: "Уникальный отделочный материал на основе любого твердого утеплителя, с декоративным слоем из натурального камня, применяется в облицовке и утеплении фасадов." });
const focusProducBeh = ref([
		{ id: 1, icon: "scale", data: "Легковесность. Весят всего 2-3 кг/кв.м" },
		{ id: 2, icon: "local_fire_department", data: "Выдерживает от -40 до +150" },
		{ id: 3, icon: "screenshot_tablet", data: "Материал может принять любую форму" },
		{ id: 4, icon: "temp_preferences_eco", data: "Не выделяет вредных для здоровья" },
	]);


const offerCards = [
	{ id: 1, title: "Термопанели", img: "offersSection/1.webp" },
	{ id: 2, title: "Гибкий камень", img: "offersSection/6.webp" },
	{ id: 3, title: "Гибкая доска", img: "offersSection/5.webp" },
	{ id: 4, title: "Гибкий кирпич", img: "offersSection/2.webp" },
	{ id: 5, title: "Каменные обои", img: "offersSection/3.webp" },
	{ id: 6, title: "Архитектурные решения", img: "offersSection/4.webp" },
];

const productsFullInfo = [
	{ title: "Термопанели", catalog:"/pdf/kirpich.pdf", img: "productView/termopanel.webp", content: "Уникальный отделочный материал на основе любого твердого утеплителя, с декоративным слоем из натурального камня, применяется в облицовке и утеплении фасадов.", desktopContent: "В основе термопанелей из гибкого камня лежит плотный фасадный пенополистирол различной толщины (от 30мм до 100мм). Он с успехом противостоит перепадам температуры, влаге и солнечному свету и исключает образование мостиков холода и уход тепла наружу. У Вас не будет необходимости приобретать два разных материала: утеплитель и облицовку, подготавливать их и наносить по отдельности. Наши панели для фасада сочетают в себе отделку и утепление дома, а также простой и быстрый монтаж на любую даже неподготовленную поверхность стен." },
	{ title: "Гибкий камень", catalog:"/pdf/kamen.pdf", img: "productView/gibkikamen.webp", content: "Интересная и перспективная новинка на рынке современных отделочных материалов. Он способен превратить самые изысканные и смелые идеи в реальность.", desktopContent: "Гибкий камень — это каменная фракция из натурального мрамора или кварца, соединённая при помощи акриловых связующих, с гибким основанием. Акриловые связующие обеспечивают гибкость и пластичность материала. А натуральный камень делает нашу продукцию прочной и долговечной, устойчивой к перепаду температур, воздействию влаги и ультрафиолета. Материал применяют для отделки помещений и облицовки фасадов." },
	{ title: "Гибкая доска", catalog:"/pdf/doska.pdf", img: "productView/gibkidoska.webp", content: "Инновационный материал, который уже завоевал популярность в строительной индустрии. Эти доски в результате инновационных технологий получили гибкую форму и могут быть использованы для отделки фасадов самых сложных форм и дизайнов.", desktopContent: "Одним из главных достоинств фасадных гибких досок является их способность адаптироваться к любой форме и поверхности. Это материал, который можно использовать как для плоских, так и для криволинейных поверхностей, создавая уникальные и оригинальные дизайны фасадов зданий." },
	{ title: "Гибкий кирпич", catalog:"/pdf/kirpich.pdf", img: "productView/gibkikirpich.webp", content: "Это современный, универсальный, практичный отделочный материал. Натуральная мраморная крошка делает нашу продукцию прочной и долговечной, устойчивой к перепаду температур, воздействию влаги и ультрафиолета, а акриловые связующие придают гибкость.", desktopContent: "" },
	{ title: "Каменные обои", catalog:"/pdf/kamen.pdf", img: "productView/oboi.webp", content: "Великолепный способ придать вашему дому изысканный, стильный вид и обновить интерьер.", desktopContent: "Необычное решение для стен, которые превратят ваш дом в место роскоши и эксклюзивного дизайна. Наши обои - это не только стильно, но и практично, подходят для любого помещения, включая ванные комнаты. Каменные обои экологически чистые и долговечные они прекрасно выглядят на стенах в течение многих лет и характеризуются подлинным качеством." },
	{ title: "Архитектурные решения", catalog:"/pdf/arhitect.pdf", img: "productView/decor.webp", content: "Прекрасный способ придать вашему интерьеру или экстерьеру дополнительный визуальный интерес и эксклюзивность.", desktopContent: "Архитектурный декор - прекрасный способ придать вашему интерьеру или экстерьеру дополнительный визуальный интерес и эксклюзивность. В наше время, когда дизайн стал настоящим искусством, все больше людей ищут способы привнести индивидуальность в свой дом или офис." },
];

const productBeh = [
	[
		{ id: 1, icon: "M8.7 8.7c1.1-1 2.2-2 3.3-2.7m0 0c3.1-2 6-2.6 7.4-1.3 1.8 1.8 0 6.6-4 10.7-4.1 4-8.9 5.8-10.7 4C3.4 18 4 15.2 6 12m6-6C9 4 6 3.3 4.7 4.6c-1.8 1.8 0 6.6 4 10.7M12 6c1.2.7 2.3 1.7 3.4 2.7m2.7 3.4c2 3 2.6 6 1.3 7.3C18 20.7 15 20 12 18m2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z", data: "Легковесность. Весят всего 5-6 кг/кв.м" },
		{ id: 2, icon: "M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.3 5A1 1 0 0 0 5 6.2l1.4 1.5a1 1 0 0 0 1.5-1.5L6.3 5Zm12.8 1.3A1 1 0 0 0 17.7 5l-1.5 1.4a1 1 0 0 0 1.5 1.5L19 6.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.8 17.7a1 1 0 1 0-1.5-1.5L5 17.7A1 1 0 1 0 6.3 19l1.5-1.4Zm9.9-1.5a1 1 0 0 0-1.5 1.5l1.5 1.4a1 1 0 0 0 1.4-1.4l-1.4-1.5ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z", data: "Выдерживает от -40 до +150" },
		{ id: 3, icon: "M16 4h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5", data: "Материал может принять любую форму" },
		{ id: 4, icon: "M5 3a2 2 0 0 0-1.5 3.3l5.4 6v5c0 .4.3.9.6 1.1l3.1 2.3c1 .7 2.5 0 2.5-1.2v-7.1l5.4-6C21.6 5 20.7 3 19 3H5Z", data: "Не выделяет вредных для здоровья токсинов" },
	],
	[
		{ id: 1, icon: "M11.6 3h.8l7 2.7c.3.2.6.6.6 1a17.7 17.7 0 0 1-7.4 14.1 1 1 0 0 1-1.2 0A17.4 17.4 0 0 1 4 6.7c0-.4.3-.8.6-1l7-2.6Zm4 7.3a1 1 0 0 0-1.3-1.6l-3.3 3-.8-1a1 1 0 0 0-1.4 1.5l1.5 1.5c.4.4 1 .4 1.4 0l4-3.4Z", data: "Прочность. Только качественный пенопласт" },
		{ id: 2, icon: "M4 4.5V19c0 .6.4 1 1 1h15M7 14l4-4 4 4 5-5m0 0h-3.2M20 9v3.2", data: "Высокий коэффициент износостойкости" },
		{ id: 3, icon: "M20.3 8.6c.1.3.3.6.6.8a3.5 3.5 0 0 1 0 5.2 2.4 2.4 0 0 0-.8 1.9 3.5 3.5 0 0 1-3.6 3.6 2.5 2.5 0 0 0-2 .8 3.5 3.5 0 0 1-5 0 2.4 2.4 0 0 0-2-.8A3.5 3.5 0 0 1 4 16.5a2.4 2.4 0 0 0-.8-2 3.5 3.5 0 0 1 0-5 2.4 2.4 0 0 0 .8-2A3.5 3.5 0 0 1 7.5 4a2.4 2.4 0 0 0 2-.8 3.5 3.5 0 0 1 5 0 2.4 2.4 0 0 0 2 .8A3.5 3.5 0 0 1 20 7.5c0 .4 0 .7.2 1ZM9.9 7.4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 2.2a1 1 0 0 0-1.5-1.4l-6.2 6.2a1 1 0 0 0 1.4 1.4l6.2-6.2Zm-2.9 5a1 1 0 1 0 0 2 1 1 0 1 0 0-2Z", data: "Экономически выгодный продукт" },
	]
] 

function closeModal() {
	isModalHidden.value = true;
}

function openModal() {
	isModalHidden.value = false;
}

function closeProductView() {
	isProductViewHidden.value = true;
}

function openProductView(id) {
	focusProducInfo.value = productsFullInfo[id];
	focusProducBeh.value = productBeh[id === 5 ? 1 : 0];
	isProductViewHidden.value = false;
}


</script>

<style lang="scss" scoped>

</style>