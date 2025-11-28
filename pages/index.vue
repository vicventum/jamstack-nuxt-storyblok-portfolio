<script setup>
let story = null
try {
	story = await useStoryblok(
		'home',
		{
			version: useRoute().query._storyblok ? 'draft' : 'published',
			// ? `resolve_relations` es para mostrar toda la información de los proyectos y no solo el id (que es lo que viene por defecto)
			resolve_relations: 'featuredProjects.projects',
		},
		{
			// ? `resolveRelations` es para que el editor de Storyblok pueda detectar los cambios de forma automática al borrar o editar un proyecto. De lo contrario, no se actualizarán los cambios hasta pulsar el botón de "Save" o "Publish" en el editor de Storyblok.
			resolveRelations: 'featuredProjects.projects',
		}
	)
} catch (e) {
	console.warn('useStoryblok failed in pages/index.vue:', e)
	story = null
}
</script>
<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
	<div v-else>Contenido no disponible durante la generación estática.</div>
</template>
