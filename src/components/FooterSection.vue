<template>
	<footer class="bg-slate-100 py-8">
		<BaseContainer class="flex justify-between items-center flex-col space-y-12 md:flex-row md:space-y-0">
			<BaseLogo size="lg" />
			<div>
				<NavBar />
				<BaseLink
					class="block text-center"
					:data="{ text: 'Политика персональных данных', link: '/personal' }"
				/>
			</div>
			<BaseSocial :dark="true" />
		</BaseContainer>
	</footer>
</template>

<script>
	export default {
		name: "FooterSection"
	}
</script>

<script setup>
import { defineAsyncComponent } from 'vue';

const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));

</script>

<style lang="scss" scoped>

</style>