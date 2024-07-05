<template>
	<header-bar />
	<div class="min-h-screen bg-slate-100">
		<router-view />
	</div>
	
	<feedback-section />
	<yandex-section />
	<footer-section />
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import FeedbackSection from "@/components/FeedbackSection.vue";
import YandexSection from "@/components/YandexSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
    name: "App",
	components: [HeaderBar, FeedbackSection, YandexSection, FooterSection]
};
</script>

<style></style>
