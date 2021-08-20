<template>
  <div class="section light-section">
    <div class="text">
      <h1 class="header"><!--
        -->Locations<!--
      --></h1>
      <p class="subheading"><!--
        -->We offer programming lessons for middle schoolers all throughout Pleasanton.<!--
      --></p>
    </div>
    <div class="branches">
      <Branch
        branch-name="Harvest Park Middle School"
        :branch-logo="hpmsLogo"
        :fields="{
          'Meeting Times': '3:15 to 4:15 PM on Wednesdays',
          'Location': 'D-32',
          'Address': '4900 Valley Ave, Pleasanton, CA 94566',
        }"
      />
      <Branch
        branch-name="Pleasanton Middle School"
        :branch-logo="pmsLogo"
        :fields="{
          'Meeting Times': '3:15 to 4:15 PM on Thursdays',
          'Location': 'Zoom',
          'Address': '5001 Case Ave, Pleasanton, CA 94566',
        }"
      />
      <Branch
        branch-name="Thomas Hart Middle School"
        :branch-logo="hmsLogo"
        :fields="{
          'Meeting Times': '3:15 to 4:15 PM on Thursdays',
          'Location': 'Zoom',
          'Address': '4433 Willow Rd, Pleasanton, CA 94588',
        }"
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
.text {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins, sans-serif;
  margin-bottom: 2.5vw;
}
.header,
.description {
  margin: 0;
}
.branches {
  display: flex;
  justify-content: space-between;
  max-width: min(80vw, 1200px);
}
</style>
