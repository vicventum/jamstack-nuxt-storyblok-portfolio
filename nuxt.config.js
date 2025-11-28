import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	ssr: true,
	nitro: {
		prerender: {
			failOnError: false,
		},
	},
	app: {
		head: {
			title: 'jamstack-nuxt-storyblock',
		},
	},
	modules: [
		[
			'@storyblok/nuxt',
			{
				accessToken: 'YrLMeExyNGtrFsmyPLSrLAtt',
			},
		],
	],
	css: ['@/assets/main.css'],
})
