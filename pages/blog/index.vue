<template>
  <div class="container py-12">
    <h1 class="text-3xl font-bold mb-8">Blog Posts</h1>
    <div class="space-y-4">
      <div
        v-for="post in data"
        :key="post.id"
        class="flex items-center justify-between py-2 border-b">
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="text-lg hover:text-primary transition-colors">
          {{ post.title }}
        </NuxtLink>
        <time
          :datetime="post.date"
          class="text-sm text-muted-foreground">
          {{
            new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })
          }}
        </time>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(useRoute().path, () => {
  return queryCollection('blog').order('date', 'DESC').all()
})
</script>

<style scoped></style>
