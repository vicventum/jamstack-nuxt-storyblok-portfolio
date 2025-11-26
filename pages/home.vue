<script setup>
const story = await useStoryblok('home')
console.log('🚀 ~ story:', story)
</script>

<template>
	<div style="">
		<h1>{{ story }}</h1>
	</div>
</template>
