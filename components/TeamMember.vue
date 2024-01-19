<template>
  <div class="inline-flex flex-col not-prose space-y-2 border-2 border-[#27c940]/25 rounded-md bg-[#27c940]/10 p-2">
    <img class="aspect-square rounded shadow-md object-cover" :alt="name" :src="require(`../assets/${src}`)">
    <div class="text-center">
      <h2 class="text-xl text-white font-medium overflow-ellipsis whitespace-nowrap overflow-hidden">
        {{ name }}
      </h2>
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    src: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
};
</script>
