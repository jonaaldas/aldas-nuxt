<template>
  <nav class="w-full fixed top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-200">
    <div class="flex justify-between items-center w-full py-4 h-16 px-4 md:px-8">
      <div>
        <NuxtLink
          to="/"
          class="text-xl font-bold"
          >JA</NuxtLink
        >
      </div>

      <div class="hidden md:flex gap-6">
        <NuxtLink
          to="/"
          class="hover:text-gray-600 transition-colors"
          >Projects</NuxtLink
        >
        <NuxtLink
          to="/"
          class="hover:text-gray-600 transition-colors"
          >Uses</NuxtLink
        >
        <NuxtLink
          to="/"
          class="hover:text-gray-600 transition-colors"
          >Blog</NuxtLink
        >
      </div>

      <div class="md:hidden">
        <Sheet>
          <SheetTrigger class="p-3 hover:bg-gray-100 rounded-lg transition-colors">
            <div class="space-y-1.5">
              <span class="block w-6 h-0.5 bg-gray-600"></span>
              <span class="block w-6 h-0.5 bg-gray-600"></span>
              <span class="block w-6 h-0.5 bg-gray-600"></span>
            </div>
          </SheetTrigger>
          <SheetContent
            side="right"
            class="w-[250px] sm:w-[300px] p-6">
            <SheetHeader>
              <SheetTitle class="text-xl font-bold mb-4">Menu</SheetTitle>
            </SheetHeader>
            <div class="flex flex-col gap-6 mt-8">
              <NuxtLink
                to="/"
                class="text-lg hover:text-gray-600 transition-colors px-2 py-1"
                >Projects</NuxtLink
              >
              <NuxtLink
                to="/"
                class="text-lg hover:text-gray-600 transition-colors px-2 py-1"
                >Uses</NuxtLink
              >
              <NuxtLink
                to="/"
                class="text-lg hover:text-gray-600 transition-colors px-2 py-1"
                >Blog</NuxtLink
              >
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
</script>

<style scoped></style>
