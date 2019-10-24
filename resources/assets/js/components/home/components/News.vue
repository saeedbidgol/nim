<template>
  <div class="news-slider wow fadeInUp">
    <slider :autoplay="false">
      <slider-item v-for="(slide,index) in groupedSlides" :key="index">
        <div class="row padding-side">
          <div class="col-md-4 col-xs-12" v-for="(item,index1) in slide.items" :key="index1">
            <div class="item-img">
              <div class="img-container">
                <img :src="`/uploads/${item.file_url}`" alt="news" />
              </div>
            </div>
            <div class="item-text">
              <h3>{{item.title}}</h3>
              <p>{{item.body}}</p>
            </div>
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
      news: []
    };
  },
  computed: {
    groupedSlides() {
      const collection = collect(this.news);
      if (window.innerWidth > 768) return collection.chunk(3).all();
      return collection.chunk(1).all();
    }
  },
  mounted() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$persistClient("get", "/site-features/news").then(
        res => (this.news = res.data)
      );
    }
  }
};
</script>