<template>
	<main-section />
	<season-section />
	<advantage-section />
	<offers-section />
	<examples-section />
	<whywe-section />
	<testimonials-section />
	<answers-section />
</template>

<script>

export default {
    name: "HomePage",
}
</script>

<script setup>
import { defineAsyncComponent } from 'vue';

const WhyweSection = defineAsyncComponent(() => import('@/components/WhyweSection.vue'));
const TestimonialsSection = defineAsyncComponent(() => import('@/components/TestimonialsSection.vue'));
const SeasonSection = defineAsyncComponent(() => import('@/components/SeasonSection.vue'));
const OffersSection = defineAsyncComponent(() => import('@/components/OffersSection.vue'));
const MainSection = defineAsyncComponent(() => import('@/components/MainSection.vue'));
const ExamplesSection = defineAsyncComponent(() => import('@/components/ExamplesSection.vue'));
const AnswersSection = defineAsyncComponent(() => import('@/components/AnswersSection.vue'));
const AdvantageSection = defineAsyncComponent(() => import('@/components/AdvantageSection.vue'));

</script>