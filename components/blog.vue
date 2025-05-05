<template>
  <div class="flex flex-col gap-4 w-full">
    <NuxtLink
      to="#blog"
      class="text-gray-500 text-xs w-full mr-auto px-4 italic"
      >#Blog</NuxtLink
    >
    <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full gap-8 px-4">
      <h2 class="text-2xl font-bold">Blog</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 min-h-72">
      <NuxtLink
        v-for="post in data"
        :key="post.id"
        :to="`/blog/${post.slug}`">
        <Card>
          <CardHeader>
            <CardTitle>{{ post.title }}</CardTitle>
          </CardHeader>
          <CardContent>
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
