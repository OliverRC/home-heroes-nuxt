<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <NuxtLink v-for="hero in heroes" :key="hero.id" :to="'/heroes/' + hero.id">
      <div class="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
        <img :src="hero.image" :alt="hero.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold text-gray-800">{{ hero.name }}</h2>
          <p class="text-gray-600">{{ hero.description }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

interface Hero {
  id: number;
  name: string;
  description: string;
  image: string;
}

const heroes = reactive<Hero[]>([
  {
    id: 1,
    name: 'Superman',
    description: 'The Man of Steel',
    image: 'https://via.placeholder.com/300x200?text=Superman',
  },
  {
    id: 2,
    name: 'Batman',
    description: 'The Dark Knight',
    image: 'https://via.placeholder.com/300x200?text=Batman',
  },
  {
    id: 3,
    name: 'Spider-Man',
    description: 'Your Friendly Neighborhood Spider-Man',
    image: 'https://via.placeholder.com/300x200?text=Spider-Man',
  },
  {
    id: 4,
    name: 'Wonder Woman',
    description: 'The Amazon Princess',
    image: 'https://via.placeholder.com/300x200?text=Wonder+Woman',
  },
]);
</script>