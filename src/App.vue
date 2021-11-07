<template>
  <v-app>
    <v-app-bar class="header" app color="rgb(10,3,40)" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          contain
          src="./assets/RIT logo transparent.png"
          width="170"
        />
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="body">
      <router-view />
    </v-main>
    <footer>
      RAMAIAH INSTITUTE OF TECHNOLOGY<br />
      <span style="font-size: 15px"
        >(Autonomous Institute, affiliated to Visvesvaraya Technological
        University, Belagavi)</span
      ><br />
      <span style="font-size: 25px">VIDYA SOUDHA</span><br />
      <span style="font-size: 15px"
        >(Recognized by Govt. of Karnataka, AICTE, accredited by NBA & NAAC
        ‘A+’)<br />
        Subject to Bangalore Jurisdiction Only</span
      ><br />
      <span style="font-size: 20px"
        >M.S.RAMAIAH NAGAR, M.S.R.I.T. POST, BENGALURU -560 054</span
      ><br />
      <span style="font-size: 15px"
        >Phone Nos : 080-23600822, 23606934, 23606936, 23607902 &emsp; &emsp;
        Website : www.msrit.edu &emsp; &emsp; Email : principal@msrit.edu</span
      >
    </footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.body {
  width: 100%;
  min-height: 100vh;
  background: rgb(239, 248, 254);
  padding: 2rem;
}

footer {
  background-color: #e46a16;
  padding: 30px;
  text-align: center;
  font-size: 35px;
  color: black;
  line-height: 20px;
}

@media print {
  * {
    margin: 0;
    padding: 0;
  }
  .header {
    display: none !important;
  }
  footer {
    display: none !important;
  }
  .body {
    background: #fff;
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
