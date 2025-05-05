<template>
  <div class="flex flex-col items-center gap-10">
    <Hero />
    <Projects />
    <Blog />
    <div class="flex justify-between items-center w-full mb-10">
      <span class="">Built by Aldas 🚀</span>
      <div class="flex gap-4">
        <NuxtLink
          external
          to="https://github.com/jonaaldas"
          class="hover:text-primary">
          <Icon name="mdi:github" />
        </NuxtLink>
        <NuxtLink
          external
          to="https://linkedin.com/in/jonaaldas"
          class="hover:text-primary">
          <Icon name="mdi:linkedin" />
        </NuxtLink>
        <NuxtLink
          external
          to="https://x.com/aldasdev"
          class="hover:text-primary">
          <Icon name="mdi:twitter" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
