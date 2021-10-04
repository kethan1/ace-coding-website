<template>
  <div class="section light-section">
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
        month="October"
        :day="20"
        time-range="3:30-4:30"
        calendar-dates="20211020T223000Z%2F20211020T233000Z"
        event-title="First session of ACE Coding"
        :event-description="
          `On October 20th, we will be holding the first session of ACE Coding
          for the 2021-2022 school year. The event will be held online via
          Zoom.`
        "
      />
      <!-- <Event
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
      /> -->
      <!-- <Event
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
      /> -->
      <!-- <Event
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
      /> -->
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
  width: var(--inner-content-width);
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
