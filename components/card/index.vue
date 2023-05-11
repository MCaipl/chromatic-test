<script setup lang="ts">

const { text = "T", description = "A" } = defineProps<{
  text?: string,
  description?: string
}>()

</script>

<template>
<div class="block shadow max-w-[22rem] bg-slate-600 rounded-lg">
  <a href="">
    <img
      class="rounded-t-lg"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
      alt="" 
    />
  </a>
  <div class="p-4">
    <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{{ text }}</h5>
    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">{{ description }}</p>
  </div>
</div>




</template>