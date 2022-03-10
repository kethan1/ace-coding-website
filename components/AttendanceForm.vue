<template>
  <form
    class="attendance-form"
    @submit="validateResponses"
  >
    <div
      class="form-item"
    >
      <label
        for="first-name"
        class="required"
      >First Name</label>
      <input
        type="text"
        v-model="firstName"
        name="first-name"
        id="first-name"
      >
      <p
        v-if="submitAttempted && firstName === ''"
        class="required-reminder"
      >
        This field is required
      </p>
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
        v-model="lastName"
        name="last-name"
        id="last-name"
      >
      <p
        v-if="submitAttempted && lastName === ''"
        class="required-reminder"
      >
        This field is required
      </p>
    </div>
    <div
      class="form-item"
    >
      <label
        for="email"
        class="required"
      >Email</label>
      <p>Preferably enter your <i>school</i> email address</p>
      <input
        type="email"
        v-model="email"
        name="email"
        id="email"
      >
      <p
        v-if="submitAttempted && email === ''"
        class="required-reminder"
      >
        This field is required
      </p>
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
        v-model="groupNumber"
        name="group-number"
        id="group-number"
      >
      <p
        v-if="submitAttempted && groupNumber === ''"
        class="required-reminder"
      >
        This field is required
      </p>
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
        v-model="deskNumber"
        name="desk-number"
        id="desk-number"
      >
      <p
        v-if="submitAttempted && deskNumber === ''"
        class="required-reminder"
      >
        This field is required
      </p>
    </div>
    <input
      type="submit"
      value="Submit"
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      groupNumber: "",
      deskNumber: "",
      submitAttempted: false,
    };
  },
  methods: {
    validateResponses(e) {
      this.submitAttempted = true;
      if (
        this.firstName !== ""
        && this.lastName !== ""
        && this.email !== ""
        && this.groupNumber !== ""
        && this.lastName !== ""
      ) {
        return;
      }
      e.preventDefault();
    },
  },
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
.form-item p.required-reminder {
  margin-top: 5px;
  color: var(--light-green);
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
