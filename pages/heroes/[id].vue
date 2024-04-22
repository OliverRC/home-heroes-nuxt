<template>
  <div v-if="hero" class="flex flex-col">
    <span> First Name: {{ hero.firstName }} </span>
    <span>Last Name: {{ hero.lastName }}</span>
    <span>Cell Phone: {{ hero.cellphone }}</span>
    <span>Email: {{ hero.email }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from "@/pages/heroes/types";

const route = useRoute();
const { data: hero } = await useFetch<Hero>(`/api/hero/${route.params.id}`);
</script>
