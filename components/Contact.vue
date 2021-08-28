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
        <form class="form">
          <div class="input-group">
            <input
              type="text"
              placeholder="First Name*"
              required="required"
              v-model="formInfo.firstName"
            >
            <input
              type="text"
              placeholder="Last Name*"
              required="required"
              v-model="formInfo.lastName"
            >
          </div>
          <input
            class="input-group"
            type="email"
            placeholder="Email Address*"
            required="required"
            v-model="formInfo.emailAddress"
          >
          <input
            type="tel"
            placeholder="Phone Number"
            v-model="formInfo.phoneNumber"
          >
          <textarea
            placeholder="Message*"
            required="required"
            v-model="formInfo.message"
          />
          <input
            type="submit"
          >
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      formInfo: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        message: "",
      },
    };
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
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  width: var(--inner-content-width);
  margin-left: 10px;

  background: linear-gradient(
    #00AAAA22,
    #00AAAA55
  );
  background-size: 100% 200%;
  box-shadow: 0px 0px 0px var(--secondary-bg);
  transition: background-size 0.2s, box-shadow 0.25s;
}
.form:hover {
  background-size: 100% 100%;
  box-shadow: 3px 3px 0px var(--secondary-bg);
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
  .form {
    max-width: 48%;
  }
}
@media only screen and (max-width: 850px) {
  .contact-info,
  .form {
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
