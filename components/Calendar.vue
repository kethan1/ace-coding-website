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
        month="Nov"
        :day="2"
        time-range="3:30-4:30"
        calendar-dates="20221102T233000Z%2F20221102T243000Z"
        event-title="HPMS - First Meeting of the Year!"
        event-location="Harvest Park Middle School"
        :event-description="
          'The first ever ACE Coding meeting at Harvest Park Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://hpms.acecoding.org"
      />
      <Event
        class="event"
        month="Nov"
        :day="2"
        time-range="3:35-4:35"
        calendar-dates="20221102T233500Z%2F20221102T243500Z"
        event-title="PMS - First Meeting of the Year!"
        event-location="Pleasanton Middle School"
        :event-description="
          'The first ever ACE Coding meeting at Pleasanton Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://pms.acecoding.org"
      />
      <Event
        class="event"
        month="Nov"
        :day="3"
        time-range="3:45-4:45"
        calendar-dates="20221103T234500Z%2F20221103T244500Z"
        event-title="HMS - First Meeting of the Year!"
        event-location="Hart Middle School"
        :event-description="
          'The first ever ACE Coding meeting at Hart Middle School '
            + 'for the 2021-2022 school year.'"
        sign-up-link="https://hms.acecoding.org"
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
