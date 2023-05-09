<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: String
})

const sizeClass = computed(() => {
  switch(props.size) {
    case 'md':
      return 'w-14 h-14'
    case 'lg':
      return 'w-22 h-22'
    default:
      return 'w-10 h-10'
  }
})

</script>

<template>
<div class="relative">
  <img class="rounded-full" src="http://placekitten.com/300/300" alt="" :class="[sizeClass]">
  <!-- <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> -->
</div>
</template>