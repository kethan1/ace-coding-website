<template>
  <form class="attendance-form">
    <label
      class="form-label"
      for="first-name"
    >
      <h2 class="required">First Name</h2>
      <input
        type="text"
        name="first-name"
        id="first-name"
        required
      >
    </label>
    <label
      class="form-label"
      for="last-name"
    >
      <h2 class="required">Last Name</h2>
      <input
        type="text"
        name="last-name"
        id="last-name"
        required
      >
    </label>
    <label
      class="form-label"
      for="email"
    >
      <h2 class="required">Email</h2>
      <p>Preferably enter your school email address</p>
      <input
        type="email"
        name="email"
        id="email"
        required
      >
    </label>
    <label
      class="form-label"
      for="group-number"
    >
      <h2 class="required">Table Group Number</h2>
      <input
        type="text"
        name="group-number"
        id="group-number"
        required
      >
    </label>
    <label
      class="form-label"
      for="desk-number"
    >
      <h2 class="required">Desk Number</h2>
      <p>If you are seated on one of the ends of your desk, please put "EXTRA"</p>
      <input
        type="text"
        name="desk-number"
        id="desk-number"
        required
      >
    </label>
    <input
      type="submit"
      value="Submit"
    >
  </form>
</template>

<script>
export default {

};
</script>

<style>
.attendance-form {
  display: flex;
  flex-direction: column;
}
.attendance-form input[type="submit"] {
  width: 100%;
  background: linear-gradient(
    var(--lighter-bg) -100%,
    var(--light-green) 700%
  );
  border: none;
  outline: none;
  box-shadow: 1px 1px 4px #00000044;
  font-size: 20px;
  font-family: "Poppins";
  padding: 5px;
  margin-top: 15px;
  border-radius: 5px;
  color: white;
  caret-color: var(--light-green);
  transition: transform 0.2s;
}
.attendance-form input[type="submit"]:hover {
  cursor: pointer;
  transform: scale(103%);
}

.form-label {
  padding-bottom: 20px;
  font-family: "Poppins";
  color: white;
}
.form-label * {
  margin: 0;
}
.form-label input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  background: var(--lighter-bg);
  border: none;
  outline: none;
  box-shadow: 1px 1px 4px #00000044;
  font-size: 17px;
  font-family: "Poppins";
  padding: 5px;
  margin-top: 7px;
  border-radius: 5px;
  color: white;
  caret-color: var(--light-green);
}
.form-label h2 {
  font-size: 24px;
}
.form-label p {
  color: #FFFFFFCC;
}
.form-label h2.required::after {
  content: "*";
  font-size: 30px;
  font-weight: 400;
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
