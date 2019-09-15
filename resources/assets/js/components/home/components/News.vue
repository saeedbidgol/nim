<template>
  <div class="news-slider wow fadeInUp">
    <slider :autoplay="false" >
      <slider-item v-for="(slide,index) in groupedSlides" :key="index">
        <div class="row padding-side">
          <div class="col-md-4 col-xs-12" v-for="(item,index1) in slide.items" :key="index1">
            <div class="item-img">
              <div class="img-container">
                <img :src="item.file_url" alt="news" />
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
      slides: [
        {
          title: "اسلاید اول",
          body:
              "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
          file_url:
            "https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "اسلاید دوم",
          body:
              "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
          file_url:
            "https://images.unsplash.com/photo-1477140307757-d0ca95b31787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        },
        {
          title: "اسلاید سوم",
          body:
              "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته",
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