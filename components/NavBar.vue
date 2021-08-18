<template>
  <div>
    <div class="nav-bar">
      <div class="nav-content">
        <a
          href="#home"
          class="logo"
        >
          <img
            style="height:100%;"
            src="../assets/ACE_Logo.png"
            alt="ACE"
          >
        </a>
        <div class="nav-links">
          <a
            v-for="(page, index) in pages"
            :key="index"
            :href="page.pageLink"
          >{{ page.pageName }}</a>
          <div
            class="menu-btn"
            @click="toggleMobileMenu"
          >
            <div class="bar-1" />
            <div class="bar-2" />
            <div class="bar-3" />
          </div>
        </div>
      </div>
      <div class="mobile-menu">
        <a
          v-for="(page, index) in pages"
          :key="index"
          :href="page.pageLink"
        >{{ page.pageName }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pages: [
        {
          pageName: "Home",
          pageLink: "#home",
        },
        {
          pageName: "About",
          pageLink: "#",
        },
        {
          pageName: "Team",
          pageLink: "#",
        },
        {
          pageName: "Contact",
          pageLink: "#",
        },
      ],
    };
  },
  methods: {
    toggleMobileMenu() {
      document.querySelector(".mobile-menu").classList.toggle("mobile-menu-show");
    },
  },
};
</script>

<style>
@media only screen and (min-width: 478px) {
  .nav-links a {
    display: none !important;
  }
  .menu-btn {
    display: inline-flex !important;
  }
  .mobile-menu {
    display: flex !important;
  }
}
@media only screen and (min-width: 1024px) {
  .nav-links a {
    display: inline-flex !important;
  }
  .menu-btn {
    display: none !important;
  }
  .mobile-menu {
    display: none !important;
  }
}

.nav-bar {
  --nav-bar-height: 60px;
  --nav-bar-font-size: 22px;
  z-index: 1000000;
  position: fixed;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-content {
  z-index: 1000001;
  width: 90vw;
  padding: 0 5vw;
  background-color: #90E4A3;
  box-shadow: 0px 0px 6px #000000AA;
  height: var(--nav-bar-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  display: flex;
  align-items: center;
}
.logo {
  height: 75%;
}
.nav-links a,
.mobile-menu a {
  text-decoration: none;
  font-family: Poppins;
  font-weight: bold;
  font-size: var(--nav-bar-font-size);
  color: black;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: calc(var(--nav-bar-height) * 0.75);
  border-radius: 5px;
  box-shadow: 0;
  transition:
    box-shadow 0.2s,
    color 0.2s,
    background-color 0.2s;
}
.nav-links a {
  min-width: calc(var(--nav-bar-height) + 15px);
  padding: 0 10px;
  margin: 0 2px;
}
.mobile-menu a {
  width: 100%;
}
.nav-links a:hover,
.mobile-menu a:hover {
  box-shadow: 0px 0px 4px #44694daa;
  background-color: #00000008;
  color: #201ba8;
}
.mobile-menu {
  width: 100%;
  max-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #7ab88a;
  overflow: hidden;
  transition: max-height 0.5s;
}
.mobile-menu-show {
  max-height: 100vh;
}
.menu-btn {
  display: inline-flex;
  width: calc(var(--nav-bar-height) * 0.3);
  height: calc(var(--nav-bar-height) * 0.3);
  flex-direction: column;
  justify-content: space-between;
}
.menu-btn:hover {
  cursor: pointer;
}
.menu-btn:hover div {
  width: 100%;
}
.bar-1,
.bar-2,
.bar-3 {
  background: black;
  height: 20%;
  border-radius: 40px;
  transition: width 0.3s;
}
.bar-1 {
  width: 100%;
}
.bar-2 {
  width: 70%;
}
.bar-3 {
  width: 40%;
}
</style>
