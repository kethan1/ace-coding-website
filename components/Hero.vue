<template>
  <div id="hero" class="relative h-screen max-h-[1024px] overflow-hidden bg-gradient-to-br from-[#22213f] to-[#16474d]">
    <Terminal class="w-full h-full relative animate-[slide-down_0.5s_ease-in-out_forwards]" />
    <Rexy class="absolute bottom-0 right-0 w-[80vw] sm:w-[40vw] max-w-2xl" />
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style>
@keyframes slide-down {
  from {
    bottom: 100%;
  } to {
    bottom: 0%;
  }
}
</style>
