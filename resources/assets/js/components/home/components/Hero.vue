<template>
  <div id="slider-container">
    <div class="social">
      <span class="title">نیم رخ بافت در شبکه های اجتماعی</span>
      <a href="https://t.me/nimrokhbaft_carpet"><span class="maintenance-logo" id="telegram"></span>کانال ما در تلگرام</a>
      <a href="https://www.instagram.com/nimrokhbaft_carpet/"><span class="maintenance-logo" id="instagram"></span>صفحه ما در اینستاگرام</a>
            
    </div>
    <slider :autoplay="false">
      <slider-item v-for="(slide,index) in slides" :key="index">
        <img :src="`/uploads/${slide.file_url}`" />
        <button @click="window.open(slide.link,'_blank')"></button>
      </slider-item>
    </slider>
    <div id="shape">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: []
    };
  },
  mounted() {
    this.getSlides();
  },
  methods: {
    getSlides() {
      this.$persistClient("get", "/site-features/slides").then(res => {
        this.slides = res.data;
      });
    }
  }
};
</script>

<style>
</style>
