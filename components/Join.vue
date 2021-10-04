<template>
  <div class="section dark-section">
    <div class="text">
      <h1 class="heading"><!--
        -->Join<!--
      --></h1>
      <p class="description">
        Fill out the form below to register as a student. To be informed of all the things happening
        throughout our club, join our <a href="https://acecoding.org/discord">Discord</a>
        and our <a href="https://acecoding.org/slack">Slack</a>.
      </p>
    </div>
    <iframe
      class="join-form"
      src="https://docs.google.com/forms/d/e/1FAIpQLSdqhR8YB2x1Cb7PMRIbfHM5EZ-oAJSGFxLJgiSOeTVoLWwi4w/viewform?embedded=true"
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
  width: min(640px, 100%);
  height: 600px;
  border-radius: 10px;
  background: #EDEDF3;
}
.description {
  text-align: center;
  width: min(640px, 100%);
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
