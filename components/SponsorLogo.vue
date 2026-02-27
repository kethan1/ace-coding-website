<template>
  <div class="flex flex-col items-center justify-center not-prose border-2 border-[#27c940]/25 rounded-xl bg-[#27c940]/5 hover:bg-[#27c940]/10 transition-colors p-6">
    <img v-if="src" class="h-24 w-auto object-contain mb-4 filter drop-shadow-md" :alt="name" :src="src">
    <div v-else class="h-24 w-24 bg-slate-800/50 rounded-lg mb-4 flex flex-col items-center justify-center text-slate-400 border border-slate-700 border-dashed">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 mb-1 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span class="text-xs font-medium uppercase tracking-wider">Logo</span>
    </div>
    <div class="text-center">
      <h2 class="text-xl text-white font-semibold tracking-tight">
        {{ name }}
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: false,
      type: String,
      default: "",
    },
    name: {
      required: true,
      type: String,
    },
  },
};
</script>
