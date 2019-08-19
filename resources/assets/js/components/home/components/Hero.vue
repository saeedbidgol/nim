<template>
  <slider :autoplay="false">
    <slider-item v-for="(slide,index) in slides" :key="index">
      <img :src="slide.url" />
      <button @click="window.open(slide.url,'_blank')"></button>
    </slider-item>
    <div slot="loading">custom loading ...</div>
  </slider>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          name: "slideOne",
          link: "www.google.com",
          url:
            "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        },
        {
          name: "slideTwo",
          link: "www.yahoo.com",
          url:
            "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        }
      ]
    };
  }
};
</script>

<style>
</style>
