<template>
  <div class="favorites">
    <img id="first-background-svg" src="uploads/background-svg/1.svg" alt="نیمرخ">
    <h3 class="favorites-h3">
      <p><img src="uploads/background-svg/title-1.svg" id="favorites-title-svg" ></p>
      محبوب ترین ها</h3>
    <slider :autoplay="false" width="80%" style="right:10%">
      <slider-item v-for="(slide,index) in slides" :key="index">
        <div class="row padding-side">
          <div class="col-lg-3">
            <div class="row">
              <div class=" col-lg-12 k-rtl" id="slide-title">{{slide.name}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">کد: {{slide.code}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">شانه: {{slide.reed}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">تعداد رنگ: {{slide.coloring}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">تراکم: {{slide.density}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">رنگ: {{slide.color}}</div>
            </div>
            <div class="row k-rtl">
              <div class="slider-details col-lg-12">ابعاد: {{slide.deminsion}}</div>
            </div>
            <div id="btn-more" class="row k-rtl">
              <div class="col-lg-12">
                <button class="btn btn-info btn-rounded">مشاهده بیشتر</button>
              </div>
            </div>
          </div>
          <div class="col-lg-3 ">
            <img class="slider-items-img" :src="slide.url1" />
          </div>
          <div class="col-lg-6 ">
            <img class="slider-items-img" :src="slide.url2" />
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
          name: "اسلاید اول",
          code: "302",
          reed: "1200",
          coloring: "5",
          density: "755",
          color: "زرد",
          deminsion: "3*3,5*5,2*4",
          link: "www.google.com",
          url1:
            "https://images.unsplash.com/photo-1527694224012-be005121c774?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          url2:
            "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        },
        {
          name: "اسلاید دوم",
          code: "302",
          reed: "1200",
          coloring: "5",
          density: "755",
          color: "زرد",
          deminsion: "3*3,5*5,2*4",
          link: "www.yahoo.com",
          url1:
            "https://images.unsplash.com/photo-1477140307757-d0ca95b31787?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          url2:
            "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        }
      ]
    };
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
.favorites{
  padding: 40px 0;
}
</style>