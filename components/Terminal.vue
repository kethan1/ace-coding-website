<template>
  <div id="terminal-container">
    <div
      id="terminal-content"
      class="h-full text-base overflow-hidden"
      :class="{
        'font-windows-mono text-white leading-[1.15]': osInfo.os === 'windows',
        'font-mac-mono text-[#FAFAFA] leading-none': osInfo.os === 'mac',
        'font-linux-mono text-[#EEEEEC] leading-none': osInfo.os === 'linux',
      }"
    >
      <div class="flex flex-col h-full">
        <div
          v-show="showLogo"
          class="flex-1 flex justify-center items-center"
        >
          <span class="text-left whitespace-pre">{{ asciiArtLogo }}</span>
        </div>
        <p class="flex-none">
          <template v-if="osInfo.os === 'windows'">
            <span>C:\Users\Rexy></span>
          </template>
          <template v-else-if="osInfo.os === 'mac'">
            <span>Rexy-Desktop:~ rexy$&nbsp;</span>
          </template>
          <template v-else>
            <span class="text-[#8AE234] font-semibold">rexy@rexy-desktop</span><!--
        --><span class="font-semibold">:</span><!--
        --><span class="text-[#729FCF] font-semibold">~</span><!--
        --><span class="font-semibold">$&nbsp;</span>
          </template><!--
        --><span>{{ typedCmd }}</span><!--
        --><span
          id="cursor"
          :class="{
            'relative bottom-1 border-b-4 border-white': osInfo.os === 'windows',
            'bg-[#9CA3AF]': osInfo.os === 'linux',
            'bg-[#9C9C9C]': osInfo.os === 'mac',
          }"
        >&nbsp;</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import WinBox from "~/static/winbox/js/winbox";

export default {
  data() {
    return {
      typedCmd: "",
      asciiArtLogo:
        "                      __\n" +
        "                     / _)\n" +
        "            _.----._/ /\n" +
        "           /         /\n" +
        "        __/ (  | (  |\n" +
        "       /__.-'|_|--|_|\n" +
        " _  __ __    __               \n" +
        "|_|/  |_    /   _  _| o  _  _ \n" +
        "| |\\__|__   \\__(_)(_| | | |(_|\n" +
        "                           __|\n" +
        "    Learn. Code. Compete.",
      showLogo: false,
    };
  },
  computed: {
    containerWidth() {
      return document.getElementById("terminal-container").clientWidth;
    },
    containerHeight() {
      return document.getElementById("terminal-container").clientHeight;
    },
    osInfo() {
      let userNavigator;
      if (process.browser) {
        userNavigator = navigator;
      } else {
        return {};
      }
      if (userNavigator.userAgent.includes("Win")) {
        return {
          os: "windows",
          viewCmd: "type ace_coding.txt",
        };
      }
      if (userNavigator.userAgent.includes("Mac")) {
        return {
          os: "mac",
          viewCmd: "cat ace_coding.txt",
        };
      }
      return {
        os: "linux",
        viewCmd: "cat ace_coding.txt",
      };
    },
  },
  mounted() {
    let terminalWidth, terminalHeight;
    if (this.containerWidth < 640) {
      terminalWidth = Math.min(1000, this.containerWidth * 0.80);
      terminalHeight = terminalWidth * 1.25;
    } else {
      terminalWidth = Math.min(1000, this.containerWidth * 0.55);
      terminalHeight = terminalWidth * 0.6;
    }
    WinBox({
      class: [this.osInfo.os, "no-full"],
      x: "center",
      y: "center",
      width: terminalWidth,
      height: terminalHeight,
      root: document.getElementById("terminal-container"),
      mount: document.getElementById("terminal-content"),
      onclose(force) {
        alert("Rexy is currently admiring his terminal, and would prefer if you did not close it.");
        return true;
      },
    });
    let cursorOpacity = 0;
    setInterval(() => {
      document.getElementById("cursor").style.opacity = cursorOpacity;
      cursorOpacity++;
      cursorOpacity %= 2;
    }, 700);
    setTimeout(() => {
      this.showAsciiArt();
    }, 1250);
  },
  methods: {
    showAsciiArt() {
      const lettersToType = this.osInfo.viewCmd;
      let queueTime = 0;
      for (let i = 0; i < lettersToType.length; i++) {
        const letterToType = lettersToType[i];
        setTimeout(() => {
          this.typedCmd += letterToType;
          document.getElementById("cursor").style.opacity = 1;
        }, queueTime);
        queueTime += (2000 / lettersToType.length);
      }
      queueTime += 600;
      setTimeout(() => {
        this.typedCmd = "";
        this.showLogo = true;
      }, queueTime);
    },
  },
};
</script>

<style>
/* Linux Terminal */
.winbox.linux {
  position: static;
  user-select: none;
  background: linear-gradient(
    #59574E 0px,
    #3D3C37 30px
  );
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 0px 15px #00000060;
  min-height: 30px;
  min-width: 300px;
}
.winbox.linux .wb-body {
  top: 30px;
  background: #161619;
}
.winbox.linux .wb-header {
  position: relative;
}
.winbox.linux .wb-header,
.winbox.linux .wb-header * {
  height: 30px;
}
.winbox.linux .wb-title {
  z-index: 9;
  font-family: "Ubuntu", sans-serif;
  color: #EEEAC9;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.winbox.linux .wb-title::after {
  content: "rexy@rexy-desktop: ~";
}
.winbox.linux .wb-icon {
  z-index: 10;
  position: absolute;
  right: 4px;
}
.winbox.linux .wb-icon > * {
  width: 20px;
  background-position: 50% 50%;
  background-size: 18px;
}
.winbox.linux .wb-icon > *:hover {
  cursor: default;
}
.winbox.linux .wb-min {
  background-image: url("../assets/images/terminal/linux/normal/min_icon.png");
}
.winbox.linux .wb-min:hover {
  background-image: url("../assets/images/terminal/linux/hover/min_icon.png");
}
.winbox.linux .wb-max {
  background-image: url("../assets/images/terminal/linux/normal/max_icon.png");
}
.winbox.linux .wb-max:hover {
  background-image: url("../assets/images/terminal/linux/hover/max_icon.png");
}
.winbox.linux .wb-close {
  background-image: url("../assets/images/terminal/linux/normal/close_icon.png");
}
.winbox.linux .wb-close:hover {
  background-image: url("../assets/images/terminal/linux/hover/close_icon.png");
}

/* Windows Terminal */
.winbox.windows {
  position: static;
  user-select: none;
  background: #000000;
  box-shadow: 0px 0px 15px #00000060;
  border: 1px solid #2B2D2F;
  min-height: 30px;
  min-width: 300px;
}
.winbox.windows .wb-body {
  top: 30px;
  background: #0C0C0C;
}
.winbox.windows .wb-header,
.winbox.windows .wb-header * {
  height: 30px;
}
.winbox.windows .wb-title {
  position: relative;
  padding-left: 29px;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
  font-size: 12px;
  line-height: 30px;
}
.winbox.windows .wb-title::before {
  content: "";
  position: absolute;
  top: 0; bottom: 0; left: 8px;
  width: 16px; height: 16px;
  margin: auto;
  background-image: url("../assets/images/terminal/windows/terminal_icon.png");
  background-size: 16px 16px;
}
.winbox.windows .wb-title::after {
  content: "Command Prompt";
}
.winbox.windows .wb-icon > * {
  width: 45px;
  background-position: 50% 50%;
  background-size: 10px;
}
.winbox.windows .wb-icon > *:hover {
  cursor: default;
}
.winbox.windows .wb-min {
  background-image: url("../assets/images/terminal/windows/min_icon.svg");
}
.winbox.windows .wb-max {
  background-image: url("../assets/images/terminal/windows/max_icon.svg");
}
.winbox.windows .wb-close {
  background-image: url("../assets/images/terminal/windows/close_icon.svg");
}
.winbox.windows .wb-min:hover,
.winbox.windows .wb-max:hover {
  background-color: #1A1A1A;
}
.winbox.windows .wb-close:hover {
  background-color: #D30F20;
}

/* Mac Terminal */
.winbox.mac {
  position: static;
  user-select: none;
  background: linear-gradient(
    #525252 0px,
    #484848 30px
  );
  border-radius: 5px 5px 0 0;
  box-shadow: 0px 0px 15px #00000060;
  min-height: 30px;
  min-width: 300px;
}
.winbox.mac .wb-body {
  top: 30px;
  background: #161619;
}
.winbox.mac .wb-header {
  position: relative;
}
.winbox.mac .wb-header,
.winbox.mac .wb-header * {
  height: 30px;
}
.winbox.mac .wb-title {
  z-index: 9;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #C4C4C4;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.winbox.mac .wb-title::after {
  content: "rexy —— -bash";
}
.winbox.mac .wb-icon {
  z-index: 10;
  position: absolute;
  left: 4px;
}
.winbox.mac .wb-icon > * {
  width: 25px;
  background-position: 50% 50%;
  background-size: 16px;
}
.winbox.mac .wb-icon > *:hover {
  cursor: default;
}
.winbox.mac .wb-min {
  background-image: url("../assets/images/terminal/mac/normal/min_icon.png");
}
.winbox.mac .wb-min:hover {
  background-image: url("../assets/images/terminal/mac/hover/min_icon.png");
}
.winbox.mac .wb-max {
  background-image: url("../assets/images/terminal/mac/normal/max_icon.png");
}
.winbox.mac .wb-max:hover {
  background-image: url("../assets/images/terminal/mac/hover/max_icon.png");
}
.winbox.mac .wb-close {
  float: left;
  background-image: url("../assets/images/terminal/mac/normal/close_icon.png");
}
.winbox.mac .wb-close:hover {
  background-image: url("../assets/images/terminal/mac/hover/close_icon.png");
}
</style>
