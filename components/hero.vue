<template>
  <div class="w-full flex flex-col items-center">
    <NuxtLink
      to="#about"
      class="text-gray-500 text-xs w-full px-4 italic"
      >#About</NuxtLink
    >
    <div class="flex flex-col md:flex-row items-center justify-center w-full gap-8 px-4">
      <div class="flex flex-col gap-4 md:w-2/3 text-center md:text-left">
        <h1 class="text-4xl md:text-5xl font-bold">Hi, I'm Jonathan</h1>
        <p class="text-lg text-gray-600">
          I am full stack developer, Italian 🇮🇹 food lover living in Barcelona Spain. I love building products and testing my skills. Vue is what I know best but I can do anything Full Stack. If you
          have new opportunity or just want to say hi, please reach out.
        </p>
        <div class="flex gap-2">
          <Badge
            v-for="skill in skills"
            :key="skill.name"
            variant="outline"
            >{{ skill.name }}</Badge
          >
        </div>
      </div>
      <div class="md:w-1/3 flex justify-center flex-col items-center gap-4">
        <Avatar class="w-48 h-48">
          <AvatarImage
            src="https://github.com/jonaaldas.png"
            alt="@jonathan-a-a"
            class="object-cover" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
        <div class="flex gap-2">
          <NuxtLink
            to="mailto:j@aldas.dev"
            external
            title="Email">
            <Icon name="mdi:envelope" />
          </NuxtLink>
          <NuxtLink
            title="Resume"
            to="https://drive.google.com/file/d/1-_0000000000000000000000000000000000000000/view?usp=sharing"
            external>
            <Icon name="mdi:paper" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
const skills = ref([
  {
    name: 'Nuxt',
    icon: 'mdi:nuxt',
  },
  {
    name: 'TS',
    icon: 'mdi:typescript',
  },
  {
    name: 'Vue',
    icon: 'mdi:vue',
  },
  {
    name: 'Node',
    icon: 'mdi:nodejs',
  },
  {
    name: 'GO',
    icon: 'mdi:go',
  },
])
</script>

<style scoped></style>
