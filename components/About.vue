<template>
  <div class="section light-section">
    <div class="text">
      <h1 class="heading"><!--
        -->About Us<!--
      --></h1>
      <div class="text-image">
        <p class="about-text">
          We are a group of high school students from Amador Valley High School dedicated <!--
          -->to spreading the knowledge of programming to people of all ages. Founded in the <!--
          -->summer of 2013 at a local Starbucks, ACE Coding began with the goal of giving as <!--
          -->many people as possible the skills for and interest in programming as a hobby or <!--
          -->career. Since its inaugural four student class, ACE Coding has expanded to each <!--
          -->of the local middle schools and has now reached hundreds of students in our <!--
          -->community through its weekly lessons, as well as several hundred more across the <!--
          -->Bay Area through its annual ACE Code Day. In fact, several of its former students <!--
          -->have now joined the team to teach programming to others just as they were taught <!--
          -->a few years earlier.
        </p>
        <div class="about-image">
          <img
            src="../assets/ace-coding-stock-photo.jpg"
            alt="ACE Coding Stock Photo"
          >
          <p>One of our first ever ACE Coding lessons • 20 Dec 2013</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
};
</script>

<style>
.text-image {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  width: var(--inner-content-width);
  margin: 10px 0;

  background: linear-gradient(
    #00AAAA22,
    #00AAAA55
  );
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px var(--secondary-bg);
  transition: background-size 0.2s, box-shadow 0.25s;
}
.text-image:hover {
  background-size: 100% 100%;
  box-shadow: 3px 3px 0px var(--secondary-bg);
}
.text-image:first-child {
  margin-top: 0;
}
.text-image:last-child {
  margin-bottom: 0;
}
.text-image > * {
  width: 50%;
}
.about-text {
  text-align: center;
  font-size: 18px;
}
.about-image {
  width: min(45%, 600px);
}
.about-image img {
  width: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 0px var(--secondary-bg);
}
.about-image p {
  font-size: 14px;
  margin: 0;
}
@media only screen and (max-width: 850px) {
  .text-image {
    flex-direction: column;
  }
  .text-image > * {
    width: 80%;
  }
}
</style>
