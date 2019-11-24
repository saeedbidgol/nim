<template>
  <div id="main">
    <!--==========================
      Favorites Section
    ============================-->
    <img id="first-background-svg" src="uploads/background-svg/1.svg" alt="نیمرخ" />
    <Favorites />

    <!--==========================
      Portfolio Section
    ============================-->
    <portfolio />

    <!--==========================
      catalogue Section
    ============================-->
    <catalogue />

    <!--==========================
      News Section
    ============================-->
    <news />
    <!--==========================
     Action Section
    ============================-->

    <about />

    <!--==========================
      Map Section
    ============================-->
    <map-nim />
    <a href="#" class="back-to-top">
      <i class="fa fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import Favorites from "./components/Favorites";
import Facts from "./components/Facts";
import Services from "./components/Services";
import About from "./components/About";
import Catalogue from "./components/Catalogue";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import MapNim from "./components/MapNim";
export default {
  components: {
    Favorites,
    Facts,
    Services,
    About,
    Portfolio,
    News,
    MapNim,
    Catalogue
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
