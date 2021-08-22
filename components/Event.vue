<template>
  <div class="event-overview">
    <div class="event-time">
      <p class="month">{{ month }}</p>
      <h1 class="month-day">{{ day }}</h1>
      <p class="time-range">{{ timeRange }}</p>
    </div>
    <div class="event-info">
      <div class="event-header">
        <h2 class="event-title">{{ eventTitle }}</h2>
        <div class="event-location">
          <component
            :is="eventLocation == undefined ? 'Laptop' : 'MapMarker'"
          />
          <h3>&nbsp;{{ eventLocation || "Online" }}</h3>
        </div>
      </div>
      <p class="event-description">
        {{ eventDescription }}
      </p>
      <div class="calendar-btns">
        <a
          :href="calendarLink"
          class="calendar-btn"
          target="_blank"
        >
          <CalendarImport />
          Add to Calendar
        </a>
        <a
          v-if="signUpLink"
          :href="signUpLink"
          class="calendar-btn"
          target="_blank"
        >
          <ClipboardText />
          Sign Up
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
      type: Number,
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
    eventTitle: {
      type: String,
      required: true,
    },
    eventLocation: {
      type: String,
      required: false,
      default: undefined,
    },
    eventDescription: {
      type: String,
      required: true,
    },
    signUpLink: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  computed: {
    calendarLink() {
      return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${
        this.calendarDates
      }&details=${
        this.eventDescription
      }&location=${
        this.eventLocation || "Online"
      }&text=${
        this.eventTitle
      }`;
    },
  },
};
// #162e54
</script>

<style>
.event-overview {
  background: var(--primary-bg);
  overflow: hidden;
  font-family: Poppins;
  display: flex;
  color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0px 0px 0px #00000088;
  transition: box-shadow 0.25s;
}
.event-overview:hover {
  box-shadow: 3px 3px 0px #00000088;
}
.event-time {
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FFFFFF44;
}
.event-time > * {
  margin: 0;
}
.month {
  font-size: 17px;
}
.month-day {
  font-size: 40px;
  line-height: 1;
}
.event-header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px 0;
}
.event-header > * {
  margin: 0 10px;
}
.event-description {
  margin: 0 10px;
}
.event-location {
  display: flex;
  align-items: center;
  opacity: 0.7;
}
.event-location h3 {
  margin: 0;
}
.event-location svg,
.event-location span[role="img"] {
  width: 20px !important;
  height: 20px !important;
  margin-bottom: 2px;
}
.event-description {
  color: #EEE;
}
.event-info {
  width: 80%;
}
.calendar-btns {
  margin-left: 10px;
}
.calendar-btn {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 2px;
  background: #FFFFFF22;
  color: #FFFFFF;
  text-decoration: none;
  transition: transform 0.25s;
}
.calendar-btn:first-child {
  margin-left: 0;
}
.calendar-btn:last-child {
  margin-right: 0;
}
.calendar-btn:hover {
  transform: scale(103%);
}
@media only screen and (min-width: 1024px) {
}
@media only screen and (max-width: 1023px) {
}
@media only screen and (max-width: 478px) {
}
</style>
