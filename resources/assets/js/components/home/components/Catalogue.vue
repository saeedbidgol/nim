<template>
  <div id="catalogue">
    <div id="right-lable">
      <img src="uploads/background-svg/catalogue-right-lable.svg" alt="فرش" />
    </div>
    <div id="left-lable">
      <img src="uploads/background-svg/4.svg" alt="کاتالوگ فرش" />
    </div>
    <div class="container wow fadeIn">
      <div class="row">
        <div class="col-lg-8 text-center text-lg-left">
          <h3 class="cta-title">کاتالوگ محصولات</h3>
          <p class="cta-text">کاتالوگ محصولات شرکت فرش نیم‌رخ بافت در فرمت PDF</p>
        </div>
        <div class="col-lg-4 cta-btn-container text-center">
          <a id="btn-catalogue-download" :href="`/uploads/${catalogue.file_url}`" target="_blank">دانلود کاتالوگ</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalogue: []
    };
  },
  mounted() {
    this.getCatalogue();
  },
  methods: {
    getCatalogue() {
      this.$persistClient("get", "/site-features/catalogues/last").then(res => {
        this.catalogue = res.data;
      });
    }
  }
};
</script>

<style>
</style>
