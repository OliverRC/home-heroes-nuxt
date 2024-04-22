<template>
  <div class="space-y-4">
    <NuxtLink to="/heroes/add">
      <Button>Add</Button>
    </NuxtLink>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <NuxtLink
        v-for="hero in heroes"
        :key="hero.id"
        :to="'/heroes/' + hero.id"
      >
        <div class="border border-border rounded-md">
          <!-- <img :src="hero.image" :alt="hero.name" class="w-full h-48 object-cover"> -->
          <div class="p-4">
            <h2 class="">{{ hero.firstName }} {{ hero.lastName }}</h2>
            <p class="">{{ hero.email }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import type { Hero } from "@/pages/heroes/types";

const { data: heroes } = await useFetch<Hero[]>("/api/hero/list");
</script>
