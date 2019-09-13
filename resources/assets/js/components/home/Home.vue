<template>
  <div id="main">
    <!--==========================
      Favorites Section
    ============================-->
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

    <action />

    <!--==========================
      Contact Section
    ============================-->
    <contact />
    <a href="#" class="back-to-top">
      <i class="fa fa-chevron-up"></i>
    </a>
  </div>
</template>

<script>
import Favorites from "./components/Favorites";
import Facts from "./components/Facts";
import Services from "./components/Services";
import Action from "./components/Action";
import Catalogue from "./components/Catalogue";
import Portfolio from "./components/Portfolio";
import News from "./components/News";
import Contact from "./components/Contact";
export default {
  components: { Favorites, Facts, Services, Action, Portfolio, News, Contact, Catalogue },
  data() {
    return {};
  }
};
</script>

<style>
</style>
