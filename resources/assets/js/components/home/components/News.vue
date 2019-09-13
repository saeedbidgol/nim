<template>
  <div class="news-slider">
    <slider :autoplay="false" width="80%" style="right:10%">
      <slider-item v-for="(slide,index) in groupedSlides" :key="index">
        <div class="row padding-side">
          <div class="col-lg-4 col-xs-12" v-for="(item,index1) in slide.items" :key="index1">
            <div class="col-lg-4">
              <img :src="item.file_url" alt="news" />
            </div>
            <div class="col-lg-8">
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
      slides: [
        {
          title: "اسلاید اول",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo corrupti eveniet blanditiis error officia itaque quis fuga dolore? Iste aliquid voluptatibus facere quod, provident id sunt omnis iure commodi!",
          file_url:
            "https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "اسلاید دوم",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo corrupti eveniet blanditiis error officia itaque quis fuga dolore? Iste aliquid voluptatibus facere quod, provident id sunt omnis iure commodi!",
          file_url:
            "https://images.unsplash.com/photo-1477140307757-d0ca95b31787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "اسلاید سوم",
          body:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur explicabo corrupti eveniet blanditiis error officia itaque quis fuga dolore? Iste aliquid voluptatibus facere quod, provident id sunt omnis iure commodi!",
          file_url:
            "https://images.unsplash.com/photo-1477140307757-d0ca95b31787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        }
      ]
    };
  },
  computed: {
    groupedSlides() {
      const collection = collect(this.slides);
      if (window.innerWidth > 768) return collection.chunk(3).all();
      return collection.chunk(1).all();
    }
  }
};
</script>