<template>
  <div class="section light-section">
    <div class="text">
      <h1 class="heading"><!--
        -->Contact Us<!--
      --></h1>
      <div class="content">
        <div class="contact-info">
          <img
            src="../assets/ACE_Confusion.png"
            alt="Confused Rexy"
          >
          <p><strong>Have a question?</strong><br>Let us know by <!--
            -->sending an email to info@acecoding.org or filling out <!--
            -->the form here.</p>
        </div>
        <div class="form-div">
          <form
            v-if="!submitted"
            @submit.prevent="submitForm"
            class="form"
          >
            <div class="input-group">
              <input
                type="text"
                name="First Name"
                placeholder="First Name*"
                required="required"
                v-model="firstName"
              >
              <input
                type="text"
                name="Last Name"
                placeholder="Last Name*"
                required="required"
                v-model="lastName"
              >
            </div>
            <input
              class="input-group"
              name="Email"
              type="email"
              placeholder="Email Address*"
              required="required"
              v-model="email"
            >
            <input
              type="tel"
              name="Phone Number"
              placeholder="Phone Number"
              v-model="phoneNumber"
            >
            <textarea
              name="Message"
              placeholder="Message*"
              required="required"
              v-model="message"
            />
            <input
              type="submit"
            >
          </form>
          <h2
            v-else
            class="submitted-text"
          >
            Your response has been submitted.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      submitted: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      endpoint: "https://formspree.io/f/xoqyykyy",
    };
  },
  methods: {
    async submitForm() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        message: this.message,
      };
      const response = await this.$axios.post(this.endpoint, data);
      console.log(response);
      if (response.status !== 200) {
        document.querySelector(".submitted-text").innerHTML = "Something went wrong. Please send us an email instead.";
      }
      this.submitted = true;
    },
  },
};
</script>

<style>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: var(--inner-content-width);
  margin-top: 20px;
}
.contact-info {
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-info p {
  width: 80%;
  text-align: center;
  font-size: 18px;
}
.contact-info img {
  border-radius: 50%;
  background: #214f7a;
  width: 50%;
}
.form-div {
  width: var(--inner-content-width);
  padding: 20px;
  margin-left: 10px;
  border-radius: 5px;
  background: linear-gradient(
    #00AAAA22,
    #00AAAA55
  );
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px var(--secondary-bg);
  transition: background-size 0.2s, box-shadow 0.25s;
}
.form-div:hover {
  background-size: 100% 100%;
  box-shadow: 3px 3px 0px var(--secondary-bg);
}
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form input,
.form textarea {
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 0px #00000088;
  font-family: Poppins, sans-serif;
  font-size: 18px;
  height: 30px;
  background-color: #FFFFFF;
  transition: background-color 0.25s;
  resize: vertical;
}
.form input:focus,
.form textarea:focus {
  outline: none;
  background-color: #d9ffe1;
}
.form input[type="submit"] {
  background: var(--secondary-bg);
  color: white;
  transition: transform 0.25s;
}
.form input[type="submit"]:hover,
.form input[type="submit"]:focus {
  cursor: pointer;
  transform: scale(103%);
}
.submitted-text {
  text-align: center;
  padding: 60px 0;
}
.input-group {
  display: flex;
  justify-content: space-between;
}
.input-group > * {
  width: 48%;
}
@media only screen and (min-width: 851px) {
  .form > * {
    width: 90%;
    margin: 10px 0;
  }
  .contact-info,
  .form-div {
    max-width: 48%;
  }
}
@media only screen and (max-width: 850px) {
  .contact-info,
  .form-div {
    max-width: 80%;
  }
  .content {
    flex-direction: column;
  }
  .form > * {
    width: 100%;
    margin: 10px 0;
  }
}
</style>
