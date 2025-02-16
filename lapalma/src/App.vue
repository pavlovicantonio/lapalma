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
    <v-bottom-navigation app color="primary" dark v-else>
      <v-btn to="/">
        <v-icon>mdi-home</v-icon>
        Home
      </v-btn>
      <v-btn to="/contact">
        <v-icon>mdi-home-city</v-icon>
        Apartments
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
