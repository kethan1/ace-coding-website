<template>
  <div>
    <NavBar />
    <Hero id="home" />
    <Locations />
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
  scrollbar-color: #221DC4 #100D2E;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}
body:hover {
  background-position: 100% 0;
  scrollbar-color: #1D1693 #15103E;
}

body::-webkit-scrollbar {
  background: linear-gradient(
    90deg,
    #0C0922 0%,
    #100D2E 25%,
    #0C0922 50%,
    #120D33 50%,
    #15103E 75%,
    #120D33 100%
  );
  background-size: 200% 100%;
  background-position-x: inherit;
  width: 10px;
}
body::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    #221DC4 0%,
    #221DC4 50%,
    #1D1693 50%
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
