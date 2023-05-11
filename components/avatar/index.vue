<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: String,
  form: String
})

const sizeClass = computed(() => {
  switch(props.size) {
    case 'md':
      return 'w-14 h-14'
    case 'lg':
      return 'w-24 h-24'
    case 'xl':
      return 'w-32 h-32'
    default:
      return 'w-12 h-12'
  }
})

const formClass = computed(() => {
  switch(props.form) {
    case 'rounded':
      return 'rounded'
    default:
      return 'rounded-full'
  }
})

</script>

<template>
<div class="relative">
  <img src="http://placekitten.com/300/300" alt="" :class="[sizeClass, formClass]">
</div>
</template>