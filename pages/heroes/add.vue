<template>
  <form @submit.prevent="add">
    <div>
    <input type="text" v-model="firstName" class="border border-gray-800" />
    <input type="text" v-model="lastName" class="border border-gray-800" />

    ---

    <input type="tel" v-model="cellPhone" class="border border-gray-800" />
    <input type="email" v-model="email" class="border border-gray-800" />

    <button type="submit">Add</button>
  </div>
  </form>
</template>

<script setup lang="ts">

const firstName = ref('')
const lastName = ref('')
const cellPhone = ref('')
const email = ref('')

const { data } = await useFetch('/api/hero');
console.log(data.value);

const add = async () => {
  const { data } = await useFetch('/api/hero', {
    method: 'POST',
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      cellPhone: cellPhone.value,
      email: email.value,
    },
  });
  console.log(data.value);
};
</script>