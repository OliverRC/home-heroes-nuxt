<template>
  <NuxtLink to="/heroes/add">Add</NuxtLink>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <NuxtLink v-for="hero in heroes" :key="hero.id" :to="'/heroes/' + hero.id">
      <div class="">
        <!-- <img :src="hero.image" :alt="hero.name" class="w-full h-48 object-cover"> -->
        <div class="p-4">
          <h2 class="">{{ hero.name }}</h2>
          <p class="">{{ hero.email }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from '@/pages/heroes/types';

const { data: heroes } = await useFetch<Hero[]>('/api/hero/list');
</script>