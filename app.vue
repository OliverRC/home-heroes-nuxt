<template>
  <div class="flex gap-4 items-center p-4 border-b border-gray-200">
    <i class="fa-regular fa-mask"></i>

    <h1 class="text-indigo-500 font-semibold">Home Heroes</h1>

    <ul>
      <li v-for="hero in heroes" :key="hero.name">
        {{ hero.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const heroes = ref([{
  name: "Patricia Lebsack",
}]);
</script>