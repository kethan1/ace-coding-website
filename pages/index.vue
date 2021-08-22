<template>
  <div>
    <NavBar />
    <Hero id="home" />
    <About id="about" />
    <Calendar id="calendar" />
    <Locations id="locations" />
    <Team id="team" />
    <Contact id="contact" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      "logo-link": "#home",
    };
  },
};
</script>
<style>
body {
  margin: 0;
  overflow-x: hidden;
  background: transparent;
  background-position-x: 0;
  transition: background-position-x 0.1s;
}
/* For Firefox */
html {
  background: #162e54;
  scrollbar-color: #224885 #0c182c;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}
body:hover {
  background-position: 100% 0;
  scrollbar-color: #1d3e74 #0f203a;
}

body::-webkit-scrollbar {
  background: linear-gradient(
    90deg,
    #0f1e38 0%,
    #0c182c 25%,
    #0f1e38 50%,
    #0f203b 50%,
    #0f203a 75%,
    #0f203b 100%
  );
  background-size: 200% 100%;
  background-position-x: inherit;
  width: 10px;
}
body::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    #224885 0%,
    #224885 50%,
    #1d3e74 50%
  );
  background-size: 200% 100%;
  background-position-x: inherit;
  border-radius: 5px;
  -moz-box-shadow:    inset 1px 1px 3px #FFFFFF22, -1px -1px 3px #00000022;
  -webkit-box-shadow: inset 1px 1px 3px #FFFFFF22, -1px -1px 3px #00000022;
  box-shadow:         inset 1px 1px 3px #FFFFFF22, -1px -1px 3px #00000022;
}
.something {
  width: 100vw;
  height: 100vh;
}
</style>
