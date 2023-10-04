<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="p-8 flex flex-col md:flex-row">
      <div class="mb-4 md:w-1/2 md:pr-8">
        <img :src="hero.picture" :alt="hero.name" class="w-full rounded-lg shadow-lg">
        <h1 class="text-3xl font-bold mt-4">{{ hero.name }}</h1>
        <p class="text-lg mt-2">{{ hero.description }}</p>
      </div>
      <div class="md:w-1/2">
        <ul class="text-lg mb-4">
          <li><span class="font-bold">Real Name:</span> {{ hero.realName }}</li>
          <li><span class="font-bold">Superpowers:</span> {{ hero.superpowers.join(', ') }}</li>
          <li><span class="font-bold">Weaknesses:</span> {{ hero.weaknesses.join(', ') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  setup(props) {
    const hero = ref({
      name: '',
      description: '',
      realName: '',
      superpowers: [],
      weaknesses: [],
      picture: ''
    })

    onMounted(async () => {
      // Fetch hero data from API using props.id
      const data = {
        name: 'Superman',
        description: 'The Man of Steel',
        realName: 'Clark Kent',
        superpowers: ['Super strength', 'Flight', 'Heat vision'],
        weaknesses: ['Kryptonite', 'Magic'],
        picture: 'https://via.placeholder.com/300x400'
      }
      hero.value = data
    })

    return {
      hero
    }
  }
}
</script>

<style>
/* Add your tailwind styles here */
</style>
