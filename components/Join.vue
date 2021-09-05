<template>
  <div class="section dark-section">
    <div class="text">
      <h1 class="heading"><!--
        -->Join<!--
      --></h1>
      <p class="description">
        Fill out the form below to register as a teacher. To be informed of all the things happening
        throughout our club, join our <a href="http://discord.acecoding.org">Discord</a>
        and our <a href="http://slack.acecoding.org">Slack</a>.
      </p>
    </div>
    <iframe
      class="join-form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSf20K4LSKW1sP24M5LdO-F63W61eTdkCfT-k9zP1jd1lIJLjQ/viewform?embedded=true"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >Loading…</iframe>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.join-form {
  width: min(800px, 100%);
  height: 600px;
  border-radius: 10px;
  background: #EDEDF3;
}
.description {
  text-align: center;
  width: min(800px, 100%);
  font-size: 18px;
}
.description a {
  text-decoration: none;
  font-weight: bold;
  color: transparent;
  background: linear-gradient(
    var(--light-green) 50%,
    #FFF 100%
  );
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
