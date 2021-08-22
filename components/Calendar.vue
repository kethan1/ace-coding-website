<template>
  <div class="section dark-section">
    <div class="text">
      <h1 class="header"><!--
        -->Calendar<!--
      --></h1>
      <p class="subheading"><!--
        -->Get notified for all of our upcoming events.<!--
      --></p>
    </div>
    <div class="events">
      <Event
        class="event"
        month="Aug"
        :day="18"
        time-range="All Day"
        calendar-dates="20210818%2F20210819"
        event-title="Website Redesign Contest Submissions"
        :event-description="
          'The deadline for submissions to the ACE Coding Website Redesign Contest.'"
      />
      <Event
        class="event"
        month="Sept"
        :day="22"
        time-range="3:15-4:15"
        calendar-dates="20210922T221500Z%2F20210922T231500Z"
        event-title="HPMS - First Lesson of the Year!"
        event-location="Harvest Park Middle School"
        :event-description="
          'The first ever ACE Coding session at Harvest Park Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <Event
        class="event"
        month="Sept"
        :day="23"
        time-range="3:15-4:15"
        calendar-dates="20210923T221500Z%2F20210923T231500Z"
        event-title="PMS - First Lesson of the Year!"
        event-location="Pleasanton Middle School"
        :event-description="
          'The first ever ACE Coding session at Pleasanton Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
      <Event
        class="event"
        month="Sept"
        :day="23"
        time-range="3:15-4:15"
        calendar-dates="20210923T221500Z%2F20210923T231500Z"
        event-title="HMS - First Lesson of the Year!"
        event-location="Hart Middle School"
        :event-description="
          'The first ever ACE Coding session at Hart Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </div>
  </div>
</template>

<script>
import hpmsLogo from "../assets/hpms-logo.png";
import pmsLogo from "../assets/pms-logo.png";
import hmsLogo from "../assets/hms-logo.png";

export default {
  data() {
    return {
      hpmsLogo,
      pmsLogo,
      hmsLogo,
    };
  },

};
</script>

<style>
.events {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: min(80vw, 1200px);
}
.event {
  margin: 10px;
}
.event:first-child {
  margin-top: 0;
}
.event:last-child {
  margin-bottom: 0;
}
</style>
