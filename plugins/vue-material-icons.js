import Vue from "vue";
import "vue-material-design-icons/styles.css";
import mapMarker from "vue-material-design-icons/MapMarker.vue";
import calendarImport from "vue-material-design-icons/CalendarImport.vue";
import laptop from "vue-material-design-icons/Laptop.vue";
import clipboardText from "vue-material-design-icons/ClipboardText.vue";

export default function materialIcons() {
  Vue.component("MapMarker", mapMarker);
  Vue.component("CalendarImport", calendarImport);
  Vue.component("Laptop", laptop);
  Vue.component("ClipboardText", clipboardText);
}
