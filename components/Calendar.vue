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
        month="Feb"
        :day="21"
        time-range="3:30-4:30"
        calendar-dates="20220221T233000Z%2F20220221T243000Z"
        event-title="HPMS - First Meeting of the Year!"
        event-location="Harvest Park Middle School"
        :event-description="
          'The first ever ACE Coding meeting at Harvest Park Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://forms.gle/6ZpanzSSG9pbS1tN8"
      />
      <Event
        class="event"
        month="Mar"
        :day="2"
        time-range="3:45-4:45"
        calendar-dates="20220202T234500Z%2F20220202T244500Z"
        event-title="PMS - First Meeting of the Year!"
        event-location="Pleasanton Middle School"
        :event-description="
          'The first ever ACE Coding meeting at Pleasanton Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://forms.gle/Thzd1TEfCMA7iq7H8"
      />
      <!-- <Event
        class="event"
        month="Mar"
        :day="2"
        time-range="3:45-4:45"
        calendar-dates="20220202T234500Z%2F20220202T244500Z"
        event-title="HMS - First Meeting of the Year!"
        event-location="Hart Middle School"
        :event-description="
          'The first ever ACE Coding meeting at Hart Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="#"
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
