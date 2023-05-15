<script setup lang="ts">

type Tags = {
  name: string
}

const { text = "T", description = "A", avatar = false } = defineProps<{
  text?: string,
  description?: string
  avatar?: boolean,
  tags?: Tags[] 
}>()

</script>

<template>
<div class="block shadow-xl max-w-[22rem] rounded-lg">
  <a href="">
    <img
      class="rounded-lg aspect-video object-cover"
      src="/img/snow.jpg"
      alt="" 
    />
  </a>
  <div class="flex p-4 space-x-2">
    <div class="flex-none" v-if="avatar">
      <img src="/img/avatar.jpg" class="w-8 h-8 rounded-full">
    </div> 
    <div class="grow space-y-0.5">
      <h5 class="text-xl font-medium leading-tight">{{ text }}</h5>
      <p class="text-base line-clamp-3" >{{ description }}</p>
    </div>
  </div>

  <div class="flex p-4" v-if="tags?.length > 0">
    <div v-for="tag in tags"
      class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] items-center justify-between rounded-full bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f]"
    >{{tag.name}}</div>
  </div>
</div>
</template>