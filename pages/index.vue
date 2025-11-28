<script setup>
const story = await useStoryblok(
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
</script>
<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>
