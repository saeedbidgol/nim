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
      Facts Section

      <facts />
    ============================-->
    

    <!--==========================
      catalogue Section
    ============================-->
    <catalogue />

    <!--==========================
     Action Section
    ============================-->

    <action />

    

    <!--==========================
      Team Section
    ============================-->
    <team />

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
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
export default {
  components: { Favorites, Facts, Services, Action, Portfolio, Team, Contact },
  data() {
    return {};
  }
};
</script>

<style>
</style>
