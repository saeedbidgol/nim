<template>
  <div style="width:100%">
    <ul class="nav-menu">
      <li class="menu-active">
        <a href="#hero">
          <img src="uploads/nav-item-logo/main-page.svg" alt /> صفحه اصلی
        </a>
      </li>
      <li>
        <router-link to="/gallery">
          <img src="uploads/nav-item-logo/product-gallery.svg" alt /> گالری محصولات
        </router-link>
      </li>
      <li>
        <a href="#services">
          <img src="uploads/nav-item-logo/news.svg" alt /> اخبار و مقالات
        </a>
      </li>
      <li>
        <a href="#portfolio">
          <img src="uploads/nav-item-logo/catalogue.svg" alt /> دانلود کاتالوگ
        </a>
      </li>
      <li>
        <a href="#team">
          <img src="uploads/nav-item-logo/about-us.svg" alt /> درباره ما
        </a>
      </li>
      <li>
        <a href="#contact">
          <img src="uploads/nav-item-logo/contact-us.svg" alt /> تماس با ما
        </a>
      </li>
      <li class="left-content">
        <a :href="info.telegram">
          <img src="uploads/nav-item-logo/telegram.svg" alt />
        </a>
      </li>
      <li class="left-content">
        <a :href="info.instagram">
          <img src="uploads/nav-item-logo/instagram.svg" alt />
        </a>
      </li>
      <li class="left-content">
        <a href="#contact">
          <img src="uploads/nav-item-logo/search-logo.svg" alt />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    };
  },
  mounted() {
    this.getTopInfo();
  },
  methods: {
    getTopInfo() {
      this.$persistClient("get", "/site-features/contact-us").then(res => {
        this.info = res.data;
      });
    }
  }
};
</script>

<style>
</style>
