<template>
	<section class="bg-slate-100 pb-20">
		<offers-section />
	</section>
</template>

<script>
export default {
	name: "CatalogPage"
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue';

const OffersSection = defineAsyncComponent(() => import('@/components/OffersSection.vue'));
</script>

<style lang="scss" scoped>

</style>