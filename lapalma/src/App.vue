<template>
  <v-app>
    <component :is="isMobile ? MobileLayout : DesktopLayout" />

    <!-- Navigacija za desktop -->
    <v-app-bar app color="primary" dark v-if="!isMobile">
      <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/contact">Apartments</v-btn>
    </v-app-bar>

    <!-- Navigacija za mobilne uređaje -->
    <v-bottom-navigation style="background-color: #2c7ccc;" app v-else>
      <v-btn to="/" style="background-color: #2c7ccc;;">
        <v-icon style="color: white;">mdi-home</v-icon>
        <span style="color: white;">Home</span>
      </v-btn>
      <v-btn to="/contact" style="background-color: #2c7ccc;">
        <v-icon style="color: white;">mdi-home-city</v-icon>
        <span style="color: white;">Apartments</span>
      </v-btn>
    </v-bottom-navigation>

    <v-main class="pa-0">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DesktopLayout from "@/layouts/DesktopLayout.vue";
import MobileLayout from "@/layouts/MobileLayout.vue";

export default {
  name: "App",
  components: { DesktopLayout, MobileLayout },
  data() {
    return {
      isMobile: window.innerWidth < 960,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreen);
  },
  methods: {
    checkScreen() {
      this.isMobile = window.innerWidth < 960;
    },
  },
};
</script>

<style>
.bnav {
  background-color: #2c7ccc;;
}
</style>