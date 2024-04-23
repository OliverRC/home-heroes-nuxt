<template>
  <div v-if="hero" class="flex flex-col">
    <div class="flex items-center gap-x-3">
      <h2
        class="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        {{ hero.firstName }} {{ hero.lastName }}
      </h2>
      <Button variant="secondary" size="sm" as-child>
        <NuxtLink :to="`/heroes/edit/${hero.id}`">
          <span class="text-sm">Edit</span>
        </NuxtLink>
      </Button>
    </div>

    <h3 class="text-muted-foreground">General</h3>

    <span> First Name: {{ hero.firstName }} </span>
    <span>Last Name: {{ hero.lastName }}</span>
    <span>Cell Phone: {{ hero.cellPhone }}</span>
    <span>Email: {{ hero.email }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from "@/pages/heroes/types";

const route = useRoute();
const { data: hero } = await useFetch<Hero>(`/api/hero/${route.params.id}`);
</script>
