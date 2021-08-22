<template>
  <div class="section dark-section">
    <div class="text">
      <h1 class="heading"><!--
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
        :day="29"
        time-range="3:15-4:15"
        calendar-dates="20210929T221500Z%2F20210929T231500Z"
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
        :day="30"
        time-range="3:15-4:15"
        calendar-dates="20210930T221500Z%2F20210930T231500Z"
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
        :day="30"
        time-range="3:15-4:15"
        calendar-dates="20210930T221500Z%2F20210930T231500Z"
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

export default {
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
  margin: 10px 0;
}
.event:first-child {
  margin-top: 0;
}
.event:last-child {
  margin-bottom: 0;
}
</style>
