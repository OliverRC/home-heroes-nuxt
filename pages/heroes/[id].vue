<template>
  <div v-if="hero" class="">
      {{ hero.name }}
      {{ hero.email }}
  </div>
</template>

<script setup lang="ts">
import type { Hero } from '@/pages/heroes/types';

const route = useRoute()
const { data: hero } = await useFetch<Hero>(`/api/hero/${route.params.id}`);
</script>
