<template>
  <form @submit.prevent="add">
    <div class="flex flex-col max-w-96 gap-4">
      <label>First Name</label>
      <input type="text" v-model="firstName" class="border border-gray-800" />

      <label>Last Name</label>
      <input type="text" v-model="lastName" class="border border-gray-800" />

      <label>Cell Phone</label>
      <input type="tel" v-model="cellPhone" class="border border-gray-800" />

      <label>Email</label>
      <input type="email" v-model="email" class="border border-gray-800" />

      <button type="submit">Add</button>
    </div>
  </form>
</template>

<script setup lang="ts">
const firstName = ref("");
const lastName = ref("");
const cellPhone = ref("");
const email = ref("");

const { data } = await useFetch("/api/hero");

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
