<template>
  <div id="slider-container">
    <slider :autoplay="false">
      <slider-item v-for="(slide,index) in slides" :key="index">
        <img :src="`/uploads/${slide.file_url}`" />
        <button @click="window.open(slide.link,'_blank')"></button>
      </slider-item>
    </slider>
    <div id="shape"></div>
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
