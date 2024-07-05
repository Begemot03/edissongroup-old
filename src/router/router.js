import { createRouter, createWebHistory } from "vue-router";


const routes = [
	{
		path: '/',
		name: '',
		component: () => import('@/pages/HomePage.vue')
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('@/pages/AboutPage.vue')
	},
	{
		path: '/catalog',
		name: 'catalog',
		component: () => import('@/pages/CatalogPage.vue')
	},
	{
		path: '/examples',
		name: 'examples',
		component: () => import('@/pages/ExamplePage.vue')
	},
	{
		path: '/personal',
		name: 'personal',
		component: () => import('@/pages/PersonalPage.vue')
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/'
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
	scrollBehavior: function(to, from, savedPosition) {
		window.scrollTo(0, 0)
	} 
});

export default router;