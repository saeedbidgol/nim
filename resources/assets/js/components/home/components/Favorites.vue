<template>
  <div class="favorites">
    <div id="first-bg"></div>
    <h3 class="favorites-h3">
      <p>
        <img src="uploads/background-svg/title-1.svg" id="favorites-title-svg" />
      </p>محبوب ترین ها
    </h3>
    <slider :autoplay="true" :stop-on-hover="true" :interval="10000" width="80%" style="right:10%">
      <slider-item v-for="(favorite,index) in favorites" :key="index">
        <div class="row padding-side">
          <div class="col-lg-3 col-sm-8">
            <div class="row">
              <div class="col-lg-12 k-rtl" id="slide-title">{{favorite.name}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12 col-sm-6">کد: {{favorite.code}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12 col-sm-6">شانه: {{favorite.reed}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">تعداد رنگ: {{favorite.color_count}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">تراکم: {{favorite.density}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">رنگ: {{favorite.back_color}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">ابعاد: {{getDimension(favorite.dimension)}}</div>
            </div>
            <div id="btn-more" class="row k-rtl">
              <div class="col-lg-12">
                <a :href="`/product/${favorite.id}`" target="blank">
                  <button class="btn btn-info btn-rounded">مشاهده بیشتر</button>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-4">
            <img class="slider-items-img" :src="`/uploads/${favorite.pic_url}`" />
          </div>
          <div class="col-lg-6 d-sm-none d-lg-block">
            <img class="slider-items-img" :src="`/uploads/${favorite.decor_url}`" />
          </div>
        </div>
      </slider-item>
    </slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: []
    };
  },
  mounted() {
    this.getFavorites();
  },
  methods: {
    getDimension(dimensions) {
      if (!dimensions) return "";
      return collect(dimensions)
        .pluck("dimension")
        .join(",");
    },
    getFavorites() {
      this.$persistClient("get", "/products/favorites").then(
        res => (this.favorites = res.data)
      );
    }
  }
};
</script>
<style scoped>
.favorites-h3 {
  color: #3a5988;
  text-align: center;
}
.slider-items-img {
  height: 50vh;
}
.btn-rounded {
  border-radius: 50px;
  line-height: 10px;
  font-size: smaller;
  margin-top: 10vh;
}
.favorites {
  padding: 40px 0;
}
</style>