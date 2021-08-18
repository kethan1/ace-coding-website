<template>
  <div
    :class="[osInfo.os, 'terminal']"
    :style="{
      '--terminal-header-height': osInfo.headerHeight,
    }"
  >
    <div
      class="window-header"
    >
      <div
        class="window-info"
      >
        <img
          v-if="osInfo.windowIcon"
          class="window-icon"
          :src="osInfo.windowIcon"
        >
        <p class="window-title">{{ osInfo.terminalTitle }}</p>
      </div>
      <div class="window-options">
        <div
          v-for="(optionImage, option, index) in osInfo.windowOptions"
          :key="index"
          :class="option"
        >
          <img
            :src="optionImage"
          >
        </div>
      </div>
    </div>
    <div class="window-content"><!--
      --><div
          class="ascii-art-logo"
          v-show="showLogo"
        ><!--
        --><span><!--
          -->{{ asciiArtLogo }}<!--
        --></span><!--
      --></div><!--
      --><p class="cmd-prompt"><!--
        --><span
              v-for="(span, index) in osInfo.terminalPrefix"
              :key="index"
              :class="span.spanClass"
            >{{ span.spanText }}</span><!--
        --><span
            class="type-cmd"
           >{{ typedCmd }}</span><!--
        --><span class="cursor">&nbsp;</span><!--
      --></p>
    </div>
  </div>
</template>

<script>
import windowsTerminalIcon from "../assets/win/terminal_icon.png";
import windowsMinimizeIcon from "../assets/win/minimize_icon.svg";
import windowsMaximizeIcon from "../assets/win/maximize_icon.svg";
import windowsCloseIcon from "../assets/win/close_icon.svg";
import macTerminalIcon from "../assets/mac/terminal_icon.png";
import macMinimizeIcon from "../assets/mac/minimize_icon.svg";
import macMaximizeIcon from "../assets/mac/maximize_icon.svg";
import macCloseIcon from "../assets/mac/close_icon.svg";
import linuxMinimizeIcon from "../assets/linux/minimize_icon.svg";
import linuxMaximizeIcon from "../assets/linux/maximize_icon.svg";
import linuxCloseIcon from "../assets/linux/close_icon.svg";

export default {
  data() {
    return {
      typedCmd: "",
      asciiArtLogo:
        "                      __\n"
        + "                     / _)\n"
        + "            _.----._/ /\n"
        + "           /         /\n"
        + "        __/ (  | (  |\n"
        + "       /__.-'|_|--|_|\n"
        + " _  __ __    __               \n"
        + "|_|/  |_    /   _  _| o  _  _ \n"
        + "| |\\__|__   \\__(_)(_| | | |(_|\n"
        + "                           __|\n"
        + "    Learn. Code. Compete.",
      showLogo: false,
    };
  },
  props: {
    runViewCmd: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    osInfo() {
      let userNavigator;
      if (process.browser) {
        userNavigator = navigator;
      } else {
        return {};
      }
      if (userNavigator.userAgent.indexOf("Win") !== -1) {
        return {
          os: "windows",
          terminalTitle: "Command Prompt",
          terminalPrefix: [{
            spanClass: undefined,
            spanText: "C:\\Users\\rexy>",
          }],
          viewCmd: "type ace_coding.txt",
          windowOptions: {
            minimize: windowsMinimizeIcon,
            maximize: windowsMaximizeIcon,
            close: windowsCloseIcon,
          },
          windowIcon: windowsTerminalIcon,
          headerHeight: "max(4vmin, 30px)",
        };
      }
      if (userNavigator.userAgent.indexOf("Mac") !== -1
        || userNavigator.userAgent.indexOf("like Mac") !== -1) {
        return {
          os: "mac",
          terminalTitle: "rexy —— -bash",
          terminalPrefix: [{
            spanClass: undefined,
            spanText: "Rexy-Desktop:~ rexy$",
          }],
          viewCmd: "cat ace_coding.txt",
          windowOptions: {
            close: macCloseIcon,
            minimize: macMinimizeIcon,
            maximize: macMaximizeIcon,
          },
          windowIcon: macTerminalIcon,
          headerHeight: "max(4vmin, 30px)",
        };
      }
      return {
        os: "linux",
        terminalTitle: "rexy@rexy-desktop: ~",
        terminalPrefix: [{
          spanClass: "green",
          spanText: "rexy@rexy-desktop",
        }, {
          spanClass: undefined,
          spanText: ":",
        }, {
          spanClass: "blue",
          spanText: "~",
        }, {
          spanClass: undefined,
          spanText: "$",
        }],
        viewCmd: "cat ace_coding.txt",
        windowOptions: {
          minimize: linuxMinimizeIcon,
          maximize: linuxMaximizeIcon,
          close: linuxCloseIcon,
        },
        headerHeight: "max(4.5vmin, 36px)",
      };
    },
  },
  methods: {
    showAsciiArt() {
      const lettersToType = this.osInfo.viewCmd;
      let queueTime = 0;
      for (let i = 0; i < lettersToType.length; i++) {
        const letterToType = lettersToType[i];
        setTimeout(() => {
          this.typedCmd += letterToType;
          document.querySelector(".cursor").style.opacity = 1;
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
  mounted() {
    /* Blink Cursor */
    let shouldBlink = 0;
    setInterval(() => {
      if (shouldBlink % 2 === 0) {
        document.querySelector(".cursor").style.opacity = 1;
      } else {
        document.querySelector(".cursor").style.opacity = 0;
      }
      shouldBlink++;
    }, 1000);
  },
  watch: {
    runViewCmd(newVal, oldVal) {
      if (oldVal === true) {
        return;
      }
      if (newVal === true) {
        this.showAsciiArt();
      }
    },
  },
};
</script>

<style>
/* Span Styles */
span.green {
  color: #8AE234;
}
span.blue {
  color: #729FCF;
}

/* General Terminal Styles */
.terminal {
  display: flex;
  flex-direction: column;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.terminal p {
  margin: 0;
}
.window-header {
  height: var(--terminal-header-height);
  background: linear-gradient(
    #2C3133,
    #2C3133 90%,
    #262A2C
  );
}
.window-info {
  display: flex;
  align-items: center;
  padding-left: calc(4 / 15 * var(--terminal-header-height));
}
.window-title {
  padding-left: calc(1 / 6 * var(--terminal-header-height));
  color: #EEEAC9;
  font-family: "Ubuntu", sans-serif;
}
.window-content {
  background: #232729;
  color: #EEEEEC;
  font-size: calc(8 / 15 * var(--terminal-header-height));
  font-family: "Ubuntu Mono", monospace;
  flex-grow: 1;
  overflow: hidden;
}
.ascii-art-logo {
  white-space: pre;
  width: 100%;
  height: calc(100% - var(--terminal-header-height));
  display: flex;
  justify-content: center;
  align-items: center;
}
.window-options {
  height: 100%;
  display: flex;
}
.cmd-prompt {
  padding: calc(1 / 4 * var(--terminal-header-height));
}

/* Windows Styles */
.windows.terminal
.window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
}
.windows.terminal
.window-title {
  color: #FFFFFF;
  font-family: 'Segoe UI', sans-serif;
  font-size: calc(0.4 * var(--terminal-header-height));
}
.windows.terminal
.window-options > div {
  width: calc(1.5 * var(--terminal-header-height));
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.windows.terminal
.window-options > div:hover {
  background: #1A1A1A;
}
.windows.terminal
.window-options > .close:hover {
  background: #E81123;
}
.windows.terminal
.window-options > div > img {
  width: calc(1 / 3 * var(--terminal-header-height))
}
.windows.terminal
.window-content {
  background: #0C0C0C;
  color: #F3F3F3;
  font-family: Consolas, 'Courier New', Courier, monospace;
}
.windows.terminal
.window-icon {
  width: calc( 8 / 15 * var(--terminal-header-height));
}
.windows.terminal
.cursor {
  position: relative;
  bottom: calc(2 / 15 * var(--terminal-header-height));
  border-bottom: calc(2 / 15 * var(--terminal-header-height)) solid white;
}

/* Mac Styles */
.mac.terminal
.window-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    #525252,
    #484848 100%
  );
  border-radius:
    max(calc(5/23 * var(--terminal-header-height)), 5px)
    max(calc(5/23 * var(--terminal-header-height)), 5px)
    0
    0;
}
.mac.terminal
.window-title {
  color: #C4C4C4;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: calc(12/23 * var(--terminal-header-height));
}
.mac.terminal
.window-options {
  position: absolute;
  left: 0;
  padding-left: max(calc(8/23 * var(--terminal-header-height)), 8px);
  width: max(calc(52/23 * var(--terminal-header-height)), 52px);
  display: flex;
  justify-content: space-between;
}
.mac.terminal
.window-options > div {
  height: 100%;
  display: flex;
  align-items: center;
}
.mac.terminal
.window-options > div > img {
  width: calc(12 / 23 * var(--terminal-header-height))
}
.mac.terminal
.window-content {
  background: #1E1E1E;
  color: #FAFAFA;
  font-family: Menlo, Consolas, 'Courier New', Courier, monospace;
  border-radius:
    0
    0
    max(calc(5/23 * var(--terminal-header-height)), 5px)
    max(calc(5/23 * var(--terminal-header-height)), 5px);
}
.mac.terminal
.window-icon {
  width: calc( 14 / 23 * var(--terminal-header-height));
}
.mac.terminal
.type-cmd {
  margin-left: max(calc(5/23 * var(--terminal-header-height)), 5px);
}
.mac.terminal
.cursor {
  background: #9C9C9C;
}

/* Linux */
.linux.terminal
.window-header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: linear-gradient(
    #2C3133,
    #2C3133 90%,
    #262A2C
  );
  border-radius:
    max(calc(5/23 * var(--terminal-header-height)), 5px)
    max(calc(5/23 * var(--terminal-header-height)), 5px)
    0
    0;
}
.linux.terminal
.window-title {
  color: #FFFFFF;
}
.linux.terminal
.window-options {
  position: absolute;
  right: 0;
}
.linux.terminal
.window-options > div {
  width: calc(1 * var(--terminal-header-height));
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.linux.terminal
.window-options > div > img {
  width: calc(1 / 3 * var(--terminal-header-height))
}
.linux.terminal
.window-options .minimize > img {
  width: max(calc(8 / 36 * var(--terminal-header-height)), 8px)
}
.linux.terminal
.window-options .maximize > img {
  width: max(calc(8 / 36 * var(--terminal-header-height)), 8px)
}
.linux.terminal
.window-options .close > img {
  width: max(calc(6 / 36 * var(--terminal-header-height)), 6px)
}
.linux.terminal
.window-content {
  background: #232729;
  color: #EEEEEC;
}
.linux.terminal
.type-cmd {
  margin-left: max(calc(5/23 * var(--terminal-header-height)), 5px);
}
.linux.terminal
.cursor {
  background: #EEEEEC;
}
</style>
