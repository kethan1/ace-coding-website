<template>
  <div class="section light-section">
    <div class="text">
      <h1 class="heading"><!--
        -->Locations<!--
      --></h1>
      <p class="subheading"><!--
        -->We offer programming lessons for students all across Pleasanton.<!--
      --></p>
    </div>
    <div class="branches">
      <Branch
        class="branch"
        branch-name="Harvest Park Middle School"
        :branch-logo="hpmsLogo"
        :description="'Our oldest and most popular location. Lorem ipsum dolor sit amet '
          + 'consectetur adipisicing elit. Numquam non ad eius ipsa neque repellat?'"
        :fields="{
          'Meeting Times': '3:15 to 4:15 PM on Wednesdays',
          'Meeting Location': 'D-32',
        }"
      />
      <Branch
        class="branch"
        branch-name="Pleasanton Middle School"
        :branch-logo="pmsLogo"
        :description="'Our most quickly expanding location. Lorem ipsum dolor sit amet '
          + 'consectetur adipisicing elit. Numquam non ad eius ipsa neque repellat?'"
        :fields="{
          'Meeting Times': '3:15 to 4:15 PM on Thursdays',
          'Meeting Location': 'B-4',
        }"
      />
      <Branch
        class="branch"
        branch-name="Thomas Hart Middle School"
        :branch-logo="hmsLogo"
        :description="'The newest addition to ACE Coding. Lorem ipsum dolor sit amet '
          + 'consectetur adipisicing elit. Numquam non ad eius ipsa neque repellat?'"
        :fields="{
          'Meeting Times': '3:15 to 4:15 PM on Thursdays',
          'Meeting Location': 'A-6',
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
.description {
  margin: 0;
}
.branches {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: min(80vw, 1200px);
}
.branch {
  margin: 10px;
}
.branch:first-child {
  margin-top: 0;
}
.branch:last-child {
  margin-bottom: 0;
}
</style>
