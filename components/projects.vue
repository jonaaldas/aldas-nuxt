<template>
  <div class="flex flex-col gap-4 w-full">
    <NuxtLink
      to="#projects"
      class="text-gray-500 text-xs w-full mr-auto px-4 italic"
      >#Projects</NuxtLink
    >
    <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full gap-8 px-4">
      <h2 class="text-2xl font-bold">Projects</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
      <Card
        v-for="project in displayedProjects"
        :key="project.id"
        class="overflow-hidden">
        <CardHeader>
          <CardTitle>{{ project.title }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.title"
            class="w-full h-48 object-cover rounded-md" />
          <p class="text-sm text-muted-foreground">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="tech in project.tech"
              :key="tech"
              variant="secondary">
              {{ tech }}
            </Badge>
          </div>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button
            v-if="project.github"
            variant="outline"
            @click="navigateToUrl(project.github)">
            <Icon
              name="mdi:github"
              class="mr-2" />
            GitHub
          </Button>
          <Button
            v-if="project.demo"
            @click="navigateToUrl(project.demo)">
            <Icon
              name="mdi:eye"
              class="mr-2" />
            Demo
          </Button>
        </CardFooter>
      </Card>
    </div>
    <div class="flex justify-center mt-8">
      <Button
        v-if="hasMoreProjects"
        @click="loadMore"
        variant="outline"
        class="w-full max-w-xs">
        View More
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const { data } = await useAsyncData(() => queryCollection('projects').all())
const itemsPerPage = 3
const currentPage = ref(1)

const displayedProjects = computed(() => {
  if (!data.value) return []
  return data.value.slice(0, currentPage.value * itemsPerPage)
})

const hasMoreProjects = computed(() => {
  if (!data.value) return false
  return displayedProjects.value.length < data.value.length
})

const loadMore = () => {
  currentPage.value++
}

const navigateToUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped></style>
