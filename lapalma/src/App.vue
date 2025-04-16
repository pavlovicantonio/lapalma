<template>
  <v-app>
    <component :is="layoutComponent" />

    <!-- Navigacija za desktop -->
    <v-app-bar app color="primary" dark v-if="!isMobile">
      <v-toolbar-title>La Palma Apartments 🌴</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Home</v-btn>
      <v-btn text to="/apartments">Apartments</v-btn>
      <v-btn text to="/info">Info</v-btn>
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
      <v-btn to="/info" style="background-color: #2c7ccc;">
        <v-icon style="color: white;">mdi-information</v-icon>
        <span style="color: white;">Info</span>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import DesktopLayout from "@/layouts/DesktopLayout.vue";
import MobileLayout from "@/layouts/MobileLayout.vue";
import ApartmentsDesktopLayout from "@/layouts/ApartmentsDesktopLayout.vue";
import ApartmentsMobileLayout from "@/layouts/ApartmentsMobileLayout.vue";
import Apartment1DesktopLayout from "@/layouts/ApartmentsDesktopLayouts/Apartment1DesktopLayout.vue";
import Apartment1MobileLayout from "@/layouts/ApartmentsMobileInfo/Apartment1MobileLayout.vue";
import Apartment2MobileLayout from "@/layouts/ApartmentsMobileInfo/Apartment2MobileLayout.vue";
import Apartment3MobileLayout from "@/layouts/ApartmentsMobileInfo/Apartment3MobileLayout.vue";
import InfoDesktopLayout from "./layouts/InfoDesktopLayout.vue";
import InfoMobileLayout from "./layouts/InfoMobileLayout.vue";

export default {
  name: "App",
  components: {
    DesktopLayout,
    MobileLayout,
    ApartmentsDesktopLayout,
    ApartmentsMobileLayout,
    Apartment1DesktopLayout,
    Apartment1MobileLayout,
    Apartment2MobileLayout,
    Apartment3MobileLayout,
    InfoDesktopLayout,
    InfoMobileLayout
  },
  data() {
    return {
      isMobile: window.innerWidth < 960,
    };
  },
  computed: {
    layoutComponent() {
      const layouts = {
        "/apartments": this.isMobile ? ApartmentsMobileLayout : ApartmentsDesktopLayout,
        "/apartment1": this.isMobile ? Apartment1MobileLayout : Apartment1DesktopLayout,
        "/apartment2": this.isMobile ? Apartment2MobileLayout : Apartment1DesktopLayout,
        "/apartment3": this.isMobile ? Apartment3MobileLayout : Apartment1DesktopLayout,
        "/info": this.isMobile ? InfoMobileLayout : InfoDesktopLayout,
      };

      return layouts[this.$route.path] || (this.isMobile ? MobileLayout : DesktopLayout);
    },
  },
  watch: {
    isMobile() {
      this.$forceUpdate(); // Osigurava da se komponenta osvježi kad se promijeni `isMobile`
    },
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
* { font-family: 'Inter', sans-serif !important; }</style>