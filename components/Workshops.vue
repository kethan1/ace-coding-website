<template>
  <div>
    <div class="mt-5 space-x-3 flex justify-start items-center text-2xl sm:text-3xl font-semibold text-white">
      <h1>Track</h1>
      <div class="relative">
        <button class="h-10 w-14 pl-2 flex items-center justify-center space-x-1 bg-slate-800 hover:bg-emerald-900/60 rounded-lg border border-slate-700 hover:border-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" @click="showTrackMenu = !showTrackMenu">
          <p>
            {{ track }}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
        <div class="absolute w-full translate-y-1" :class="{ 'hidden': !showTrackMenu }">
          <div class="text-center font-normal text-2xl flex flex-col divide-y border rounded shadow-lg bg-slate-700 border-slate-600">
            <button class="border-slate-600 hover:bg-emerald-900/60 hover:border-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" @click="track = 1; showTrackMenu = false;">
              1
            </button>
            <button class="border-slate-600 hover:bg-emerald-900/60 hover:border-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" @click="track = 2; showTrackMenu = false;">
              2
            </button>
            <button class="border-slate-600 hover:bg-emerald-900/60 hover:border-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500" @click="track = 3; showTrackMenu = false;">
              3
            </button>
          </div>
        </div>
      </div>
      <h1>Workshops:</h1>
    </div>
    <p class="mb-5 text-slate-400 text-base">
      Note: Click on workshop descriptions to expand/collapse them.
    </p>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-2 text-white">
      <Workshop
        v-for="(workshop, index) in trackWorkshops"
        v-bind="workshop"
        :key="`ws-${index}`"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      track: 1,
      showTrackMenu: false,
    };
  },
  computed: {
    trackWorkshops() {
      const filteredWorkshops = this.data.filter(workshop => workshop.tracks.includes(this.track));
      filteredWorkshops.sort((a, b) => (a.level > b.level) ? 1 : -1);
      return filteredWorkshops;
    },
  },
};
</script>

<style>

</style>
