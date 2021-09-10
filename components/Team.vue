<template>
  <div class="section dark-section team-section">
    <div class="text">
      <h1 class="heading"><!--
        -->The Team<!--
      --></h1>
      <p class="subheading"><!--
        -->All of the amazing students that keep our club running.<!--
      --></p>
    </div>
    <div class="team">
      <div
        v-for="(category, categoryName, i) in categories"
        :key="i"
        class="team-category"
      >
        <h2 class="team-cat-title">{{ categoryName }}</h2>
        <div
          v-for="(member, j) in category"
          :key="`${i}-${j}`"
          class="team-member"
        >
          <img
            :src="require(`@/assets/${member.image}`)"
            :alt="member.name + 'Image'"
            class="member-image"
          >
          <p class="member-name">{{ member.name }}</p>
          <div
            class="member-title"
          >
            <component
              v-if="['Java', 'Python', 'Web Dev'].includes(member.title)"
              :is="'Language' + (
                member.title == 'Web Dev'
                  ? 'WebDev'
                  : member.title
              )"
            />
            <p>&nbsp;{{ member.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: {
        Leadership: [
          {
            image: "profile-photos/edward-ding.png",
            name: "Edward Ding",
            title: "Co-President",
          },
          {
            image: "profile-photos/kush-nayak.png",
            name: "Kush Nayak",
            title: "Co-President",
          },
          {
            image: "profile-photos/jessie-chan.png",
            name: "Jessie Chan",
            title: "Secretary/Treasurer",
          },
          {
            image: "profile-photos/angad-bhargav.png",
            name: "Angad Bhargav",
            title: "HPMS Branch Director",
          },
          {
            image: "profile-photos/justin-yu.png",
            name: "Justin Yu",
            title: "PMS Branch Director",
          },
          {
            image: "profile-photos/rohan-kaushal.png",
            name: "Rohan Kaushal",
            title: "HMS Branch Director",
          },
        ],
        // Teachers: [
        //   {
        //     name: "Teacher Name",
        //     title: "Python",
        //   },
        //   {
        //     name: "Teacher Name",
        //     title: "Java",
        //   },
        //   {
        //     name: "Teacher Name",
        //     title: "Web Dev",
        //   },
        // ],
        // Advisors: [
        //   {
        //     name: "Richard Hanson",
        //     title: "AVHS Advisor",
        //   },
        //   {
        //     name: "Joan Yu",
        //     title: "HPMS Advisor",
        //   },
        //   {
        //     name: "David Fischer",
        //     title: "PMS Advisor",
        //   },
        // ],
      },
    };
  },
};
</script>

<style>
.team-section {
  padding-top: 0;
}
.team {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: var(--inner-content-width);
  font-family: Poppins;
}
.team-category {
  margin: 10px 0;
  padding: 20px 10px;
  background: linear-gradient(
    #21437a88,
    #00AAAA33
  );
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 0px var(--secondary-bg);
  transition: box-shadow 0.25s;
}
.team-category:hover {
  box-shadow: 3px 3px 0px var(--secondary-bg);
}
.team-category:first-child {
  margin-top: 0;
}
.team-category:last-child {
  margin-bottom: 0;
}
.team-cat-title {
  margin: 0 0 10px 10px;
}
.team-member {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px;
  border-radius: 5px;
  margin: 8px;
  background: #FFFFFF22;
  width: 180px;
  transition: transform 0.25s;
}
.team-member:hover {
  transform: scale(103%);
}
.member-image {
  width: 100%;
  border-radius: 5px;
}
.member-name {
  font-weight: bold;
  font-size: 20px;
  margin: 5px 0 0 0;
}
.member-title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.member-title p {
  margin: 0;
}
.member-title span,
.member-title svg {
  width: 20px !important;
  height: 20px !important;
  margin-bottom: 1px;
}
</style>
