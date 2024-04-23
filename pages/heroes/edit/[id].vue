<template>
  <div v-if="hero" class="space-y-6">
    <h2 class="text-base font-semibold leading-7">General</h2>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="firstName">First Name</Label>
      <Input
        type="firstName"
        id="firstName"
        v-model="hero.firstName"
        placeholder="First Name"
      />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="surname">Surname</Label>
      <Input
        type="surname"
        id="surname"
        v-model="hero.lastName"
        placeholder="Surname"
      />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="surname">Known As</Label>
      <Input
        type="knownAs"
        id="knownAs"
        v-model="hero.knownAs"
        placeholder="Known As"
      />
    </div>

    <h2 class="text-base font-semibold leading-7">Contact Details</h2>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="cellPhone">Cell Phone</Label>
      <Input
        type="cellPhone"
        id="cellPhone"
        v-model="hero.cellPhone"
        placeholder="Cell Phone"
      />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" v-model="hero.email" placeholder="Email" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Hero } from "@/pages/heroes/types";

const route = useRoute();
const { data: hero } = await useFetch<Hero>(`/api/hero/${route.params.id}`);
</script>
