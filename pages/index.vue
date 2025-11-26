<script lang="jsx" setup>
const { story } = useStoryblok('home', {
	version: 'published',
})
</script>

<template>
	<div
		style="
			display: flex;
			place-items: center;
			height: 100vh;
			justify-content: center;
			flex-direction: column;
			background: salmon;
		"
	>
		<h1>{{ story.name }}</h1>
	</div>
</template>
