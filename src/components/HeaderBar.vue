<template>
	<header class="bg-slate-100 drop-shadow-md fixed top-0 left-0 right-0 z-10">
		<BaseContainer class="py-4 flex flex-wrap items-center justify-between">
			<BaseLogo />
			<BaseToggler @click.prevent="toogleMenu()" />
			<NavBar
				class="mt-4 w-full md:mt-0 md:w-auto"
				:hidden="hidden"
			/>
			<Transition>
				<BaseButton
					v-if="!hidden"
					class="mx-auto mt-4 md:m-0"
					@click="openModal"
				>
					Заказать звонок
				</BaseButton>
			</Transition>
		</BaseContainer>
	</header>
	<BaseModal
		:title="'Заказать звонок'"
		:hidden="isModalHidden"
		@close="closeModal"
	/>
</template>

<script>

export default {
	name: 'HeaderBar',
};
</script>

<script setup>
import { ref, onMounted } from "vue";
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));

const hidden = ref(false);
const isModalHidden = ref(true);

function toogleMenu() {
	hidden.value = !hidden.value;
}

onMounted(() => {
	const userAgent = navigator.userAgent.toLocaleLowerCase();
	const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
	hidden.value = isMobile;
});


function closeModal() {
	isModalHidden.value = true;
}

function openModal() {
	isModalHidden.value = false;
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
