<template>
  <div class="writing">
    <NuxtLink
      to="/"
      class="text-sm text-muted-foreground flex items-center">
      <Icon
        name="mdi:arrow-left"
        class="mr-2" />
      Back to Home
    </NuxtLink>
    <ContentRenderer
      v-if="data"
      :value="data"
      :prose="true" />
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(() => queryCollection('blog').where('slug', '=', useRoute().params.id).first())
</script>

<style scoped>
:deep(.prose) {
  max-width: 768px;
}
</style>
