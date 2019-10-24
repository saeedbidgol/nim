<template>
  <div id="about-us">
    <div class="container wow fadeIn">
      <div class="row">
        <div class="col-md-7">
          <h3>درباره نیم‌رخ بافت</h3>
          <p>{{about}}</p>
        </div>
        <div class="col-md-5">
          <div class="img-container">
            <img src="/images/call-to-action-bg.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: ""
    };
  },
  mounted() {
    this.getAbout();
  },
  methods: {
    getAbout() {
      this.$persistClient("get", "/site-features/about-us").then(
        res => (this.about = res.data)
      );
    }
  }
};
</script>

<style>
</style>
