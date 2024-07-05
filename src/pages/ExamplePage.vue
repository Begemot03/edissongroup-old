<template>
	<section class="bg-slate-100 pb-32">
		<ExamplesSection />
	</section>
</template>

<script>
export default {
	name: "ExamplePage"
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue';

const ExamplesSection = defineAsyncComponent(() => import('@/components/ExamplesSection.vue'));
</script>

<style lang="scss" scoped>

</style>