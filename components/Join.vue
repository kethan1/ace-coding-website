<template>
  <div class="section dark-section">
    <div class="text">
      <h1 class="heading"><!--
        -->Join<!--
      --></h1>
      <p class="description">
        Fill out the appropriate form below to register as a student.
        To be informed of all the things happening throughout our club, join our <a href="https://acecoding.org/discord">Discord</a>
        and our <a href="https://acecoding.org/slack">Slack</a>.
      </p>
      <div class="join-links">
        <a href="https://forms.gle/6ZpanzSSG9pbS1tN8">HPMS Sign up Form <OpenInNew /></a>
        <a href="https://forms.gle/Thzd1TEfCMA7iq7H8">PMS Sign up Form <OpenInNew /></a>
        <a href="https://forms.gle/GKKCeGoRmLzBTZnTA">HMS Sign up Form <OpenInNew /></a>
      </div>
    </div>
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
.join-links {
  width: 500px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
}
.join-links a {
  width: 100%;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  background: #FFFFFF22;
  color: white;
  transition: transform 0.2s;
}
.join-links a:hover {
  transform: scale(102%);
}
</style>
