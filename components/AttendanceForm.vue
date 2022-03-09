<template>
  <form class="attendance-form">
    <div
      class="form-item"
    >
      <label
        for="first-name"
        class="required"
      >First Name</label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        required
      >
    </div>
    <div
      class="form-item"
    >
      <label
        for="last-name"
        class="required"
      >Last Name</label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        required
      >
    </div>
    <div
      class="form-item"
    >
      <label
        for="email"
        class="required"
      >Email</label>
      <p>Preferably enter your school email address</p>
      <input
        type="email"
        name="email"
        id="email"
        required
      >
    </div>
    <div
      class="form-item"
    >
      <label
        for="text"
        class="required"
      >Table Group Number</label>
      <input
        type="text"
        name="group-number"
        id="group-number"
        required
      >
    </div>
    <div
      class="form-item"
    >
      <label
        for="desk-number"
        class="required"
      >Desk Number</label>
      <p>If you are seated on one of the ends of your desk, please put "EXTRA"</p>
      <input
        type="text"
        name="desk-number"
        id="desk-number"
        required
      >
    </div>
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
.attendance-form input[type="submit"]:hover,
.attendance-form input[type="submit"]:focus-visible {
  cursor: pointer;
  transform: scale(103%);
}

.form-item {
  padding-bottom: 20px;
  font-family: "Poppins";
  color: white;
}
.form-item * {
  margin: 0;
}
.form-item input {
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
.form-item input:-webkit-autofill,
.form-item input:-webkit-autofill:hover,
.form-item input:-webkit-autofill:focus,
.form-item input:-webkit-autofill:active {
  box-shadow: 0 0 0 100px var(--lighter-bg) inset, 1px 1px 4px #00000044 !important;
  -webkit-box-shadow: 0 0 0 100px var(--lighter-bg) inset, 1px 1px 4px #00000044 !important;
  -webkit-text-fill-color: white !important;
  caret-color: var(--light-green) !important;
}

.form-item label {
  font-size: 24px;
}
.form-item p {
  color: #FFFFFFCC;
}
.form-item label.required::after {
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
