<template>
  <div class="w-full h-14 px-3 fixed top-0 z-50 bg-[#164d46] shadow">
    <div class="max-w-[65ch] lg:max-w-[80ch] xl:max-w-[100ch] mx-auto h-full flex items-center justify-between">
      <div>
        <a class="px-2 py-1 rounded transition-shadow text-white text-2xl font-semibold hover:shadow-[0px_0px_15px_rgba(0,0,0,0.25)]" href="#home">
          ACE <code class="bg-[#27c940]/20 border border-[#27c940]/40 rounded px-1 font-normal">Coding</code>
        </a>
      </div>
      <button class="md:hidden text-white">
        <svg
          v-if="!showMenu"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="showMenu = true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          @click="showMenu = false"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="hidden md:inline-flex items-center space-x-2">
        <div
          v-for="(link, index) in links"
          :key="`link-${index}`"
        >
          <a class="p-2 rounded transition-shadow hover:shadow-[0px_0px_15px_rgba(0,0,0,0.25)] text-white text-lg font-semibold" :href="link.href">
            {{ link.title }}
          </a>
        </div>
      </div>
    </div>
    <div
      v-if="showMenu"
      class="absolute md:hidden w-full left-0 top-full flex flex-col items-center bg-[#1d5f57] divide-y"
    >
      <a
        v-for="(link, index) in links"
        :key="`link-${index}`"
        :href="link.href"
        class="py-1 w-full text-center transition-shadow hover:shadow-[0px_0px_15px_rgba(0,0,0,0.25)] text-white text-lg font-semibold border-[#257970]"
      >
        {{ link.title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      links: [
        {
          title: "About",
          href: "#about",
        },
        {
          title: "Join",
          href: "#join",
        },
        {
          title: "Calendar",
          href: "#calendar",
        },
        {
          title: "Team",
          href: "#team",
        },
      ],
    };
  },
};
</script>

<style>
</style>
