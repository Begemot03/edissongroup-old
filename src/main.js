import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router';
import ui from "@/components/ui/index";
import "./index.css";

const app = createApp(App);

ui.forEach(
	comp => app.component(comp.name, comp)
);

app.use(router)
	.mount('#app');
