<template>
  <div class="flex gap-4 items-center p-4 border-b border-gray-200">
    <i class="fa-regular fa-mask"></i>

    <NuxtLink to="/" class="text-indigo-500 font-semibold">Home</NuxtLink>
    <h1 class="text-indigo-500 font-semibold">Home Heroes</h1>

    <span class="text-gray-300">/</span>
    <div class="flex items-center gap-2">
      <ul>
        <li v-for="hero in heroes" :key="hero.name">
          {{ hero.name }}
        </li>
      </ul>
      <i class="fa-solid fa-angles-up-down text-gray-400"></i>
    </div>
  </div>
  <div class="p-6">
    <NuxtPage />
  </div>
 
</template>

<script setup lang="ts">
const heroes = ref([{
  name: "Patricia Lebsack",
}]);
</script>