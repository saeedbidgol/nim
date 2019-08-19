<template>
  <div id="main">
    <!--==========================
      About Us Section
    ============================-->
    <about />

    <!--==========================
      Facts Section
    ============================-->
    <facts />

    <!--==========================
      Services Section
    ============================-->
    <services />

    <!--==========================
     Action Section
    ============================-->

    <action />

    <!--==========================
      Portfolio Section
    ============================-->
    <portfolio />

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
import About from "./components/About";
import Facts from "./components/Facts";
import Services from "./components/Services";
import Action from "./components/Action";
import Portfolio from "./components/Portfolio";
import Team from "./components/Team";
import Contact from "./components/Contact";
export default {
  components: { About, Facts, Services, Action, Portfolio, Team, Contact },
  data() {
    return {};
  }
};
</script>

<style>
</style>
