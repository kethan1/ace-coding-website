<template>
  <div class="not-prose flex space-x-3 bg-slate-800/50 rounded border-slate-700 border-2">
    <div class="shrink-0 flex flex-col items-center min-w-20 border-r border-slate-700 p-4">
      <p class="uppercase tracking-wide font-semibold text-slate-300">
        {{ month }}
      </p>
      <h1 class="text-5xl font-bold text-white">
        {{ day }}
      </h1>
    </div>
    <div class="p-2 space-y-2.5">
      <div>
        <h2 class="text-2xl text-white font-medium">
          {{ title }}
        </h2>
        <div class="[&>*]:inline-flex [&>*]:items-center [&>*]:space-x-1 space-x-3">
          <div>
            <IconClock class="w-4 h-4" />
            <p>{{ timeRange }}</p>
          </div>
          <div v-if="location">
            <IconMapPin class="w-4 h-4" />
            <h3>{{ location }}</h3>
          </div>
        </div>
      </div>
      <p>
        <slot />
      </p>
      <div>
        <a :href="calendarLink" target="_blank" class="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-slate-800 border-slate-700 border rounded hover:bg-slate-900/25 hover:text-white">
          <IconCalendar class="w-4 h-4" />
          <span>
            Add to Calendar
          </span>
        </a>
        <a v-if="signUp" :href="signUp" target="_blank" class="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-slate-800 border-slate-700 border rounded hover:bg-slate-900/25 hover:text-white">
          <IconClipboard class="w-4 h-4" />
          <span>
            Sign Up
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    month: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    timeRange: {
      type: String,
      required: true,
    },
    calendarDates: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: false,
      default: undefined,
    },
    signUp: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  computed: {
    calendarLink() {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${
        this.calendarDates
      }&location=${
        this.location || "Online"
      }&text=${
        this.title
      }`;
    },
  },
};
</script>
