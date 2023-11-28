<template>
  <div class="">
    <ul class="">
      <li><span class="font-bold">Real Name:</span> {{ hero.realName }}</li>
      <li>
        <span class="font-bold">Superpowers:</span>
        {{ hero.superpowers.join(", ") }}
      </li>
      <li>
        <span class="font-bold">Weaknesses:</span>
        {{ hero.weaknesses.join(", ") }}
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup(props) {
    const hero = ref({
      name: "",
      description: "",
      realName: "",
      superpowers: [],
      weaknesses: [],
      picture: "",
    });

    onMounted(async () => {
      // Fetch hero data from API using props.id
      const data = {
        name: "Superman",
        description: "The Man of Steel",
        realName: "Clark Kent",
        superpowers: ["Super strength", "Flight", "Heat vision"],
        weaknesses: ["Kryptonite", "Magic"],
        picture: "https://via.placeholder.com/300x400",
      };
      hero.value = data;
    });

    return {
      hero,
    };
  },
};
</script>

<style>
/* Add your tailwind styles here */
</style>
