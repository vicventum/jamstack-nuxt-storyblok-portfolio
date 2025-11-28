<script setup>
const props = defineProps({
	blok: Object,
})

const renderedDescription = computed(() => {
	return renderRichText(props.blok.description) || 'No description'
})
</script>
<template>
	<div class="container project-page">
		<div class="project-title">
			<h1>{{ blok.name || 'New Project' }}</h1>
			<NuxtLink :to="{ name: 'index' }">Go Back</NuxtLink>
		</div>

		<div class="project-description">
			<img
				:src="blok.image?.filename || 'https://picsum.photos/300/175'"
				:alt="blok.image?.alt"
			/>
			<div v-html="renderedDescription" />
		</div>
	</div>
</template>
