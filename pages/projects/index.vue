<template>
  <div class="container py-12">
    <h1 class="text-4xl font-bold mb-12">Projects</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProjectCard :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(useRoute().path, () => queryCollection('projects').all())
const projects = computed(() => data.value ?? [])
</script>

<style scoped></style>
