<template>
	<Transition>
		<nav
			v-if="!hidden"
			class="flex flex-col items-center md:flex-row md:space-x-4 lg:space-x-8 overflow-hidden"
		>
			<BaseLink 
				v-for="link in links"
				:key="link.id"
				:data="link"
			/>
		</nav>
	</Transition>
</template>

<script>
export default {
	name: "NavBar",
}
</script>

<script setup>
const props = defineProps({
	hidden: {
		type: Boolean,
		default: false
	},
});

const links = [
	{ id: 1, text: "Главная", link: "/" },
	{ id: 2, text: "Каталог", link: "/catalog" },
	{ id: 3, text: "Наши работы", link: "/examples" },
	{ id: 4, text: "О нас", link: "/about" },
];

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