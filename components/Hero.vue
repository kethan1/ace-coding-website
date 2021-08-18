<template>
  <div>
    <div class="nav-placeholder" />
    <div
      class="hero-section"
      :style="{
        '--animation-height': `${this.animationHeight}px`,
        '--animation-width': `${this.animationWidth}px`,
        '--offset-to-top': this.offsetToTop,
      }"
    >
      <div class="nav-placeholder" />
      <div class="pretty-section">
        <Terminal
          class="terminal"
          :run-view-cmd="showDinoLogo"
        />
        <button
          class="register-btn"
        >
          Register Now!
        </button>
      </div>
      <div class="main-animation">
        <img
          src="../assets/desk.svg"
          alt="Desk"
          class="desk"
        >
        <img
          src="../assets/keyboard_mouse.svg"
          alt="Keyboard Mouse"
          class="keyboard-mouse"
        >
        <img
          src="../assets/back_arm.svg"
          alt="Back Arm"
          class="back-arm"
        >
        <img
          src="../assets/dino_body.svg"
          alt="Dino Body"
          class="dino-body"
        >
        <img
          src="../assets/front_arm.svg"
          alt="Front Arm"
          class="front-arm"
        >
        <img
          src="../assets/monitor.svg"
          alt="Monitor"
          class="monitor"
        >
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      showDinoLogo: false,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    });
    setTimeout(() => {
      this.showDinoLogo = true;
    }, 2000);
  },
  computed: {
    animationWidth() {
      if (this.windowWidth <= 767) {
        return this.windowWidth;
      }
      if (this.windowWidth <= 1024) {
        return this.windowWidth * 0.6;
      }
      return this.windowWidth * 0.5;
    },
    animationHeight() {
      return this.animationWidth * (9 / 16);
    },
    offsetToTop() {
      return `${-((this.windowHeight - this.animationHeight) / this.animationHeight) * 100}%`;
    },
  },
};
</script>

<style scoped>
* {
  font-family: Poppins, sans-serif;
}

.hero-section {
  width: 100vw;
  height: calc(100vh - 60px);
  background: #1D1654;
  overflow: hidden;
  position: relative;
}
.nav-placeholder {
  height: 60px;
}

@media only screen and (min-width: 1025px) {
  .hero-section {
    --terminal-width: 60vw;
    --terminal-height: 58vh;
    --terminal-margin-tl: 3vw;
  }
  .register-btn {
    --register-btn-width: 200px;
    --register-btn-height: 50px;
    --register-btn-font-size: 25px;
    --register-btn-margin-top: 2vmin;
  }
@media only screen and (min-width: 1600px) {
  .register-btn {
    --register-btn-width: 250px;
    --register-btn-height: 70px;
    --register-btn-font-size: 30px;
    --register-btn-margin-top: 2vmin;
  }
}
  .main-animation {
    z-index: 1000;
  }
}
@media only screen and (max-width: 1024px) {
  .hero-section {
    --terminal-width: 60vw;
    --terminal-height: 45vh;
    --terminal-margin-tl: 5vw;
  }
  .register-btn {
    --register-btn-width: 150px;
    --register-btn-height: 45px;
    --register-btn-font-size: 20px;
    --register-btn-margin-top: 2vmin;
  }
}
@media only screen and (max-width: 767px) {
  .hero-section {
    --terminal-width: 90vw;
    --terminal-height: 40vh;
    --terminal-margin-tl: 5vw;
  }
  .register-btn {
    --register-btn-width: 150px;
    --register-btn-height: 45px;
    --register-btn-font-size: 20px;
    --register-btn-margin-top: 2vmax;
  }
  .main-animation {
    z-index: 0;
  }
}
@media only screen and (max-width: 478px) {
  .hero-section {
    --terminal-width: 90vw;
    --terminal-height: 50vh;
    --terminal-margin-tl: 5vw;
  }
  .register-btn {
    --register-btn-width: 150px;
    --register-btn-height: 45px;
    --register-btn-font-size: 20px;
    --register-btn-margin-top: 2vmax;
  }
}
.pretty-section {
  position: absolute;
  left: calc(((var(--terminal-width) + var(--terminal-margin-tl)) * -1));
  top: var(--terminal-margin-tl);
  animation: terminal-slide 0.3s linear 1.5s forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.terminal {
  z-index: 2;
  height: var(--terminal-height);
  width: var(--terminal-width);
  box-shadow: 0px 0px 10px #00000088;
}
.register-btn {
  z-index: 1;
  background: #221DC4;
  color: white;
  border-radius: 5px;
  font-size: var(--register-btn-font-size);
  width: var(--register-btn-width);
  height: var(--register-btn-height);
  border-style: none;
  box-shadow: 0px 0px 5px #00000088;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  bottom: calc(var(--register-btn-margin-top) * 2 + var(--register-btn-height));
  margin: var(--register-btn-margin-top) 0;
  animation: button-slide-in 0.5s 5s forwards;
}
.register-btn:hover {
  cursor: pointer;
  transform: scale(1.1);
  box-shadow: 0px 0px 10px #00000088;
}
.main-animation {
  position: absolute;
  bottom: 0;
  right: 0;
  width: var(--animation-width);
  height: var(--animation-height);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.main-animation > * {
  position: absolute;
}
.desk {
  top: 34.52%;
  left: -21.5%;
  width: 132.8%;
  height: 102.1%;
  animation:
  desk-slide 0.5s ease-in-out forwards;
}
.dino-body {
  top: 0%;
  left: 100%;
  width: 82.6%;
  height: 69.68%;
  animation:
  dino-slide 0.3s linear 1.5s forwards;
}
.back-arm, .front-arm {
  top: 42.9%;
  left: 100%;
  width: 27.3%;
  height: 34.52%;
}
.back-arm {
  transform-origin: 64% 12.5%;
  transform: rotate(0deg);
  animation:
  arm-type 0.4s ease-in-out 5 2s alternate,
  arm-slide 0.18s linear 1.62s forwards;
}
.front-arm {
  transform-origin: 83.64% 23.15%;
  transform: rotate(0deg);
  animation:
  arm-type 0.3s ease-in-out 6 2s alternate,
  arm-type 0.3s ease-in-out 1 4.2s alternate,
  arm-slide 0.18s linear 1.62s forwards;
}
.keyboard-mouse {
  top: calc(var(--offset-to-top) - 34.03%);
  left: 56.3%;
  width: 35.4%;
  height: 34.03%;
  animation:
  km-slide-in 0.5s cubic-bezier(0.82, 1.49, 0.54, 0.82) 1s forwards;
}
.monitor {
  top: calc(var(--offset-to-top) - 82.74%);
  left: 14.9%;
  width: 33.7%;
  height: 82.74%;
  animation:
  monitor-slide-in 0.5s cubic-bezier(0.82, 1.49, 0.54, 0.82) 0.5s forwards;
}

@keyframes desk-slide {
  0% {
    top: 100%;
  }
  100% {
    top: 34.52%;
  }
}
@keyframes km-slide-in {
  0% {
    top: calc(var(--offset-to-top) - 34.03%);
  }
  100% {
    top: 53.94%;
  }
}
@keyframes monitor-slide-in {
  0% {
    top: calc(var(--offset-to-top) - 82.74%);
  }
  100% {
    top: 13.38%;
  }
}
@keyframes km-slide-out {
  0% {
    top: calc(var(--offset-to-top) - 34.03%);
  }
  100% {
    top: 51.94%;
  }
}
@keyframes monitor-slide-out {
  0% {
    top: 46.2%;
  }
  100% {
    top: 100%;
  }
}

@keyframes dino-slide {
  0% {
    left: 100%;
  }
  100% {
    left: 41.6%;
  }
}
@keyframes arm-slide {
  0% {
    left: 100%;
  }
  100% {
    left: 70.6%;
  }
}
@keyframes arm-type {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes terminal-slide {
  0% {
    left: calc(((var(--terminal-width) + var(--terminal-margin-tl)) * -1));
  }
  100% {
    left: var(--terminal-margin-tl);
  }
}
@keyframes button-slide-in {
  0% {
    bottom: calc(var(--register-btn-margin-top) * 2 + var(--register-btn-height));
  }
  100% {
    bottom: 0;
  }
}
</style>
