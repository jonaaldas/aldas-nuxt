<template>
  <Card
    v-for="project in projects"
    :key="project.title"
    class="group overflow-hidden border-0 bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl">
    <div class="relative overflow-hidden aspect-video w-full">
      <img
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div
        v-else
        class="w-full h-full bg-gray-100 flex items-center justify-center">
        <Icon
          name="mdi:image-off"
          class="w-12 h-12 text-gray-400" />
      </div>
    </div>
    <CardHeader class="pt-6">
      <CardTitle class="text-xl font-semibold group-hover:text-primary transition-colors">
        {{ project.title }}
      </CardTitle>
    </CardHeader>
    <CardContent class="space-y-4">
      <p class="text-sm text-gray-600 line-clamp-3">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="tech in project.tech"
          :key="tech"
          variant="secondary"
          class="bg-gray-100 text-gray-700 hover:bg-gray-200">
          {{ tech }}
        </Badge>
      </div>
    </CardContent>
    <CardFooter class="flex justify-start gap-4">
      <Button
        v-if="project.github"
        variant="outline"
        class="group/btn hover:bg-gray-900 hover:text-white transition-all duration-200"
        @click="navigateToUrl(project.github)">
        <Icon
          name="mdi:github"
          class="mr-2 group-hover/btn:scale-110 transition-transform" />
        GitHub
      </Button>
      <Button
        v-if="project.demo"
        class="bg-primary hover:bg-primary/90 text-white transition-all duration-200"
        @click="navigateToUrl(project.demo)">
        <Icon
          name="mdi:eye"
          class="mr-2 group-hover:scale-110 transition-transform" />
        Live Demo
      </Button>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

type Project = {
  title: string
  description: string
  image: string
  github: string
  demo: string
}
defineProps<{
  projects: Project[]
}>()

const navigateToUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped></style>
