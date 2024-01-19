<template>
  <div>
    <NavBar />
    <Hero id="home" class="pt-14" />
    <div id="about" class="bg-slate-900 px-6 py-8 sm:py-14 scroll-mt-14">
      <nuxt-content class="lg:max-w-[80ch] xl:max-w-[100ch] mx-auto prose prose-sm sm:prose-base prose-invert" :document="about" />
    </div>
    <div id="join" class=" bg-gradient-to-br from-[#16474d] to-[#22213f] px-6 py-8 sm:py-14 scroll-mt-14">
      <nuxt-content class="lg:max-w-[80ch] xl:max-w-[100ch] mx-auto prose prose-sm sm:prose-base prose-invert" :document="join" />
    </div>
    <div id="calendar" class="bg-slate-900 px-6 py-8 sm:py-14 scroll-mt-14">
      <nuxt-content class="lg:max-w-[80ch] xl:max-w-[100ch] mx-auto prose prose-sm sm:prose-base prose-invert" :document="calendar" />
    </div>
    <div id="team" class="bg-gradient-to-br from-[#16474d] to-[#22213f] px-6 py-8 sm:py-14 scroll-mt-14">
      <nuxt-content class="lg:max-w-[80ch] xl:max-w-[100ch] mx-auto prose prose-sm sm:prose-base prose-invert" :document="team" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const about = await $content("about").fetch();
    const join = await $content("join").fetch();
    const calendar = await $content("calendar").fetch();
    const team = await $content("team").fetch();
    return {
      about,
      join,
      calendar,
      team,
    };
  },
};
</script>

<style>
</style>
