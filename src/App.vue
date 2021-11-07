<template>
  <v-app>
    <v-app-bar app color="rgb(10,3,40)" dark>
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
</style>
