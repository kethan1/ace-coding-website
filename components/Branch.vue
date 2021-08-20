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
  },
};
</script>

<style>
.branch-overview {
  overflow: hidden;
  font-family: Poppins;
  display: flex;
  width: 33%;
  flex-direction: column;
  align-items: center;
  color: #1b2f36;
  border-radius: 10px;
  box-shadow: 0px 0px 0px #498599;
  transition: box-shadow 0.25s;
}
.branch-overview:hover {
  box-shadow: 3px 3px 0px #498599;
}
.branch-header {
  width: 100%;
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
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.branch-info > * {
  width: 90%
}
.field-title,
.field-val {
  margin: 0;
}
.field-pair {
  margin: 5px;
}
</style>
