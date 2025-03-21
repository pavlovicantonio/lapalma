<template>
  <v-app>
    <!-- Dinamički odabir layouta prema ruti i uređaju -->
    <component :is="layoutComponent" v-if="layoutComponent" />

    <!-- Navigacija za desktop -->
    <v-app-bar app color="primary" dark v-if="!isMobile">
      <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/apartments">Apartments</v-btn>
    </v-app-bar>

    <!-- Navigacija za mobilne uređaje -->
    <v-bottom-navigation style="background-color: #2c7ccc;" app v-else>
      <v-btn to="/" style="background-color: #2c7ccc;">
        <v-icon style="color: white;">mdi-home</v-icon>
        <span style="color: white;">Home</span>
      </v-btn>
      <v-btn to="/apartments" style="background-color: #2c7ccc;">
        <v-icon style="color: white;">mdi-home-city</v-icon>
        <span style="color: white;">Apartments</span>
      </v-btn>
    </v-bottom-navigation>

    <v-main class="pa-0">
      
    </v-main>
  </v-app>
</template>

<script>
import DesktopLayout from "@/layouts/DesktopLayout.vue";
import MobileLayout from "@/layouts/MobileLayout.vue";
import ApartmentsDesktopLayout from "./layouts/ApartmentsDesktopLayout.vue";
import ApartmentsMobileLayout from "@/layouts/ApartmentsMobileLayout.vue";
import Apartment1DesktopLayout from "./layouts/ApartmentsDesktopLayouts/Apartment1DesktopLayout.vue";
import Apartment1MobileLayout from "./layouts/ApartmentsMobileInfo/Apartment1MobileLayout.vue";

export default {
  name: "App",
  components: { DesktopLayout, MobileLayout, ApartmentsDesktopLayout, ApartmentsMobileLayout },
  data() {
    return {
      isMobile: window.innerWidth < 960,
    };
  },
  computed: {
    layoutComponent() {
      if (this.$route.path.startsWith("/apartments")) {
        return this.isMobile ? ApartmentsMobileLayout : ApartmentsDesktopLayout;
      }
      if (this.$route.path.startsWith("/apartment1")) {
        return this.isMobile ? Apartment1MobileLayout : Apartment1DesktopLayout;
      }
      return this.isMobile ? MobileLayout : DesktopLayout;
    },
  },
  provide() {
    return {
      isMobile: this.isMobile, // Osiguraj da pružaš `isMobile`
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
