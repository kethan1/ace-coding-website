<template>
  <div
    class="rexy-animation aspect-video"
    :style="{
      '--offset-to-top': `calc(-1 * (100vh - 28.125vw))`
    }"
  >
    <img
      src="../assets/images/rexy/desk.svg"
      alt="Desk"
      class="desk"
    >
    <img
      src="../assets/images/rexy/keyboard_mouse.svg"
      alt="Keyboard Mouse"
      class="keyboard-mouse"
    >
    <img
      src="../assets/images/rexy/back_arm.svg"
      alt="Back Arm"
      class="back-arm"
    >
    <img
      src="../assets/images/rexy/dino_body.svg"
      alt="Dino Body"
      class="dino-body"
    >
    <img
      src="../assets/images/rexy/front_arm.svg"
      alt="Front Arm"
      class="front-arm"
    >
    <img
      src="../assets/images/rexy/monitor.svg"
      alt="Monitor"
      class="monitor"
    >
  </div>
</template>

<script>
export default {
};
</script>

<style>
.rexy-animation > img {
  max-width: none;
  position: absolute;
}
.desk {
  top: 134.52%;
  left: -19.5%;
  right: 0;
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
  dino-slide 0.3s linear 0.75s forwards;
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
  arm-type 0.4s ease-in-out 5 1.25s alternate,
  arm-slide 0.18s linear 0.87s forwards;
}
.front-arm {
  transform-origin: 83.64% 23.15%;
  transform: rotate(0deg);
  animation:
  arm-type 0.3s ease-in-out 6 1.25s alternate,
  arm-type 0.3s ease-in-out 1 3.45s alternate,
  arm-slide 0.18s linear 0.87s forwards;
}
.keyboard-mouse {
  top: 153.94%;
  left: 56.3%;
  width: 35.4%;
  height: 34.03%;
  animation:
  km-slide-in 0.5s ease-in-out forwards;
}
.monitor {
  top: 113.38%;
  left: 14.9%;
  width: 33.7%;
  height: 82.74%;
  animation:
  monitor-slide-in 0.5s ease-in-out forwards;
}

@keyframes desk-slide {
  0% {
    top: 134.52%;
  }
  100% {
    top: 34.52%;
  }
}
@keyframes km-slide-in {
  0% {
    top: 153.94%;
  }
  100% {
    top: 53.94%;
  }
}
@keyframes monitor-slide-in {
  0% {
    top: 113.38%;
  }
  100% {
    top: 13.38%;
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
</style>
