<template>
  <div class="p-3 flex flex-col rounded shadow bg-slate-800 border border-slate-700 prose-sm prose-invert sm:prose sm:prose-invert">
    <p
      class="my-0 px-2 sm:my-0 sm:px-2 self-start rounded-full"
      :class="{
        'bg-emerald-600/30 text-emerald-200': level === 1,
        'bg-amber-600/30 text-amber-200': level === 2,
        'bg-rose-600/30 text-rose-200': level === 3,
      }"
    >
      {{ levelStr }}
    </p>
    <h2 class="font-semibold mt-3 mb-4 sm:mt-3 sm:mb-4">
      {{ title }}
    </h2>
    <div>
      <p class="mt-0 mb-1 text-base sm:mt-0 sm:mb-1 sm:text-lg font-light text-slate-400">
        Description
      </p>
      <p
        class="relative mt-0 sm:mt-0 after:absolute after:bottom-0 after:right-0 after:px-2 after:rounded-full after:shadow-lg after:bg-slate-700 after:border after:border-slate-600 after:text-lg after:font-semibold after:text-white after:transition-opacity after:opacity-0 hover:cursor-pointer hover:after:opacity-100"
        :class="[
          !showDescription ? 'overflow-y-ellipsis' : '',
          showDescription ? 'after:content-collapse' : 'after:content-expand',
        ]"
        @click="showDescription = !showDescription"
      >
        {{ description }}
      </p>
    </div>
    <div>
      <p class="mt-0 mb-1 text-base sm:mt-0 sm:mb-1 sm:text-lg font-light text-slate-400">
        Prerequisites
      </p>
      <p
        class="relative mt-0 sm:mt-0"
        @click="showPrereqs = !showPrereqs"
      >
        {{ prereqs }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
    level: {
      required: true,
      type: Number,
    },
    description: {
      required: true,
      type: String,
    },
    tracks: {
      required: true,
      type: Array,
    },
    prereqs: {
      default: "None",
      type: String,
    },
  },
  data() {
    return {
      showDescription: false,
    };
  },
  computed: {
    levelStr() {
      if (this.level === 1) {
        return "Beginner";
      } else if (this.level === 2) {
        return "Intermediate";
      } else {
        return "Advanced";
      }
    },
  },
};
</script>

<style>

</style>
