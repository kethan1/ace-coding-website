<template>
  <div class="branch-overview">
    <div class="branch-header">
      <img
        :src="branchLogo"
        :alt="`${branchName} Logo`"
        class="branch-logo"
      >
      <h1
        class="branch-name"
      >{{ branchName }}</h1>
    </div>
    <div class="branch-info">
      <p class="description">{{ description }}</p>
      <div>
        <div
          v-for="(fieldVal, fieldTitle, index) in fields"
          :key="index"
          class="field-pair"
        >
          <h3
            class="field-title"
          >{{ fieldTitle }}</h3>
          <p
            class="field-val"
          >{{ fieldVal }}</p>
        </div>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          class="register-btn"
        >Register Here</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    branchName: {
      type: String,
      required: true,
    },
    branchLogo: {
      type: String,
      required: true,
    },
    fields: {
      type: Object,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.branch-overview {
  background: #def5fb;
  overflow: hidden;
  font-family: Poppins;
  display: flex;
  color: #1b2f36;
  border-radius: 10px;
  box-shadow: 0px 0px 0px #498599;
  transition: box-shadow 0.25s;
}
.branch-overview:hover {
  box-shadow: 3px 3px 0px #498599;
}
.branch-header {
  background: linear-gradient(
    #7fcce6 50%,
    #6cbdd8
  );
  background-size: 100% 200%;
  background-position: 0 0;
  transition: background-position 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.branch-overview:hover .branch-header {
  background-position: 0 100%;
}
.branch-logo {
  width: 90%;
}
.branch-name {
  width: 90%;
}
.branch-info {
  background: #def5fb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.branch-info > * {
  width: calc(100% - 20px);
}
.field-title,
.field-val {
  margin: 0;
}
.field-pair {
  margin: 5px;
}
.description {
  font-size: 20px;
  margin-bottom: 20px;
}
.register-btn {
  width: 100%;
  margin-top: 20px;
  background: #498599;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: transform 0.25s;
}
.register-btn:hover {
  transform: scale(101%);
}
@media only screen and (min-width: 1024px) {
  .branch-header {
    width: 30%;
  }
  .branch-info {
    width: 70%;
  }
}
@media only screen and (max-width: 1023px) {
  .branch-overview {
    flex-direction: column;
  }
  .branch-header {
    flex-direction: row;
    height: 20%;
  }
  .branch-logo {
    width: 30%;
    padding-bottom: 5%;
  }
  .branch-info {
    height: 80%;
  }
}
@media only screen and (max-width: 478px) {
  .branch-header {
    justify-content: center;
  }
  .branch-logo {
    display: none;
  }
}
</style>
