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
        <Input
          type="email"
          id="email"
          v-model="email"
          placeholder="Email"
        />
      </div>

      <Button type="submit">Add</Button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"

const firstName = ref("");
const lastName = ref("");
const cellPhone = ref("");
const email = ref("");

const add = async () => {
  const { data } = await useFetch("/api/hero", {
    method: "POST",
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      cellPhone: cellPhone.value,
      email: email.value,
    },
  });
};
</script>
