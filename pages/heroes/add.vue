<template>
  <form @submit.prevent="add">
    <input type="text" v-model="name" class="border border-gray-800" />
    <input type="email" v-model="email" class="border border-gray-800" />

    <button type="submit">Add</button>
  </form>
</template>

<script setup lang="ts">

const name = ref('')
const email = ref('')

const { data } = await useFetch('/api/hero');
console.log(data.value);

const add = async () => {
  const { data } = await useFetch('/api/hero', {
    method: 'POST',
    body: {
      name: name.value,
      email: email.value,
    },
  });
  console.log(data.value);
};
</script>