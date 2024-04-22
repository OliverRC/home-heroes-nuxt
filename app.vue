<template>
  <div class="flex gap-4 items-center p-4 border-b border-gray-200">
    <i class="fa-regular fa-mask"></i>

    <NuxtLink to="/" class="text-indigo-500 font-semibold">Home Heroes</NuxtLink>

    <span class="text-gray-300">/</span>
    <span>My Home</span>
  </div>
  <div class="p-6">
    <div>
      <NuxtLoadingIndicator />
      <Toaster />
      <NuxtPage />
    </div>
  </div>
 
</template>

<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>