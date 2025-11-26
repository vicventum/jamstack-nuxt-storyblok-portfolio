import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	ssr: true,
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
})
