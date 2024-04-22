<template>
  <form @submit.prevent="add">
    <div class="flex flex-col max-w-96 gap-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          type="firstName"
          id="firstName"
          v-model="firstName"
          placeholder="First Name"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="surname">Surname</Label>
        <Input
          type="surname"
          id="surname"
          v-model="lastName"
          placeholder="Surname"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="cellPhone">Cell Phone</Label>
        <Input
          type="cellPhone"
          id="cellPhone"
          v-model="cellPhone"
          placeholder="Cell Phone"
        />
      </div>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" v-model="email" placeholder="Email" />
      </div>

      <Button type="submit">Add</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useToast } from "@/components/ui/toast/use-toast";
import type { Hero } from "@/pages/heroes/types";

const { toast } = useToast();

const firstName = ref("");
const lastName = ref("");
const cellPhone = ref("");
const email = ref("");

const add = async () => {
  const request = {
    firstName: firstName.value,
    lastName: lastName.value,
    cellPhone: cellPhone.value,
    email: email.value,
  };

  const { data: hero } = await useFetch<Hero>("/api/hero", {
    method: "POST",
    body:request,
  });

  toast({
    description: "Hero added successfully",
  });

  await navigateTo(`/heroes/${hero.value.id}`);
};
</script>
