<script lang="jsx" setup>
defineProps({
	blok: Object,
})
</script>
<template>
	<div v-editable="blok">
    <h1>oli</h1>
		<!-- ? Componente que viene del paquete @storyblok/nuxt -->
		<StoryblokComponent
			v-for="blok in blok.body"
			:key="blok._uid"
			:blok="blok"
		/>
	</div>
</template>
