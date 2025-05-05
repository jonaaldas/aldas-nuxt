<template>
  <div class="flex flex-col gap-4 w-full">
    <NuxtLink
      to="#projects"
      class="text-gray-500 text-xs w-full mr-auto px-4 italic"
      >#Work</NuxtLink
    >
    <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8 px-4">
      <NuxtLink
        to="/projects"
        class="w-full">
        <h2 class="text-2xl font-bold flex justify-between items-center gap-2">
          Projects
          <span class="text-muted-foreground text-sm">View All</span>
        </h2>
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      <ProjectCard :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('projects').all())
const projects = computed(() => data.value ?? [])
</script>

<style scoped></style>
