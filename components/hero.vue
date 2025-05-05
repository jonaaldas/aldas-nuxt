<template>
  <div class="w-full">
    <NuxtLink
      to="#about"
      class="text-gray-500 text-xs w-full mr-auto px-4 italic"
      >#About</NuxtLink
    >
    <div class="flex flex-col md:flex-row items-center justify-between max-w-4xl w-full gap-8 px-4">
      <div class="flex flex-col gap-4 md:w-2/3">
        <h1 class="text-4xl md:text-5xl font-bold">Hi, I'm Jonathan</h1>
        <p class="text-lg text-gray-600">
          I'm a software dev and entrepreneur passionate about building products that make a difference. With years of experience in full-stack development, I focus on creating elegant solutions to
          complex problems. When I'm not coding, you can find me exploring new technologies, contributing to open source, or mentoring other developers.
        </p>
      </div>
      <div class="md:w-1/3 flex justify-center">
        <Avatar class="w-48 h-48">
          <AvatarImage
            src="https://github.com/jonaaldas.png"
            alt="@jonathan-a-a"
            class="object-cover" />
          <AvatarFallback>JA</AvatarFallback>
        </Avatar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<style scoped></style>
