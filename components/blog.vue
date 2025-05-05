<template>
  <div class="flex flex-col gap-4 w-full mb-40">
    <NuxtLink
      to="#blog"
      class="text-gray-500 text-xs w-full mr-auto px-4 italic"
      >#Thoughts</NuxtLink
    >
    <div class="flex flex-col md:flex-row items-center justify-between w-full gap-8 px-4">
      <NuxtLink
        to="/blog"
        class="w-full">
        <h2 class="text-2xl font-bold flex justify-between items-center gap-2">
          Blog
          <span class="text-muted-foreground text-sm">View All</span>
        </h2>
      </NuxtLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 min-h-72">
      <NuxtLink
        v-for="post in data"
        :key="post.id"
        :to="`/blog/${post.slug}`"
        class="h-full">
        <Card class="h-full flex flex-col">
          <CardHeader>
            <CardTitle>{{ post.title }}</CardTitle>
          </CardHeader>
          <CardContent class="flex-1">
            <p>{{ post.slug }}</p>
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(useRoute().path, () => {
  return queryCollection('blog').order('date', 'DESC').limit(3).all()
})
</script>

<style scoped></style>
