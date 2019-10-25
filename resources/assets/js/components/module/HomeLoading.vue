

<template>
  <div :class="{'sk-loading': isLoading}">
    <div
      v-if="isLoading"
      :class="`sk-spinner ${getSppiner(loadingType)}`"
      v-html="getSppinerContent(loadingType)"
    ></div>
    <div class="loading-container"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HomeLoading",
  props: {
    isLoading: Boolean,
    loadingType: String,
  },
  methods: {
    getSppiner(name) {
      switch (name) {
        case "double":
          return "sk-spinner-double-bounce";
        case "wandering":
          return "sk-spinner-wandering-cubes";
        case "chasing":
          return "sk-spinner-chasing-dots";
        case "three":
          return "sk-spinner-three-bounce";
        case "circle":
          return "sk-spinner-circle";
        case "cube":
          return "sk-spinner-cube-grid";
        case "fading":
          return "sk-spinner-fading-circle";
        default:
          return "sk-spinner-double-bounce";
      }
    },
    getSppinerContent(name) {
      switch (name) {
        case "double":
          return "<div class='sk-double-bounce1'></div><div class='sk-double-bounce2'></div>";
        case "wandering":
          return "<div class='sk-cube1'></div><div class='sk-cube2'></div>'";
        case "chasing":
          return "<div class='sk-dot1'></div><div class='sk-dot2'></div>";
        case "three":
          return "<div class='sk-bounce1'></div><div class='sk-bounce2'></div><div class='sk-bounce3'></div>";
        case "circle":
          return "<div class='sk-circle1 sk-circle'></div><div class='sk-circle2 sk-circle'></div><div class='sk-circle3 sk-circle'></div><div class='sk-circle4 sk-circle'></div><div class='sk-circle5 sk-circle'></div><div class='sk-circle6 sk-circle'></div><div class='sk-circle7 sk-circle'></div><div class='sk-circle8 sk-circle'></div><div class='sk-circle9 sk-circle'></div><div class='sk-circle10 sk-circle'></div><div class='sk-circle11 sk-circle'></div><div class='sk-circle12 sk-circle'></div>";
        case "cube":
          return "<div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div><div class='sk-cube'></div>";
        case "fading":
          return "<div class='sk-circle1 sk-circle'></div><div class='sk-circle2 sk-circle'></div><div class='sk-circle3 sk-circle'></div><div class='sk-circle4 sk-circle'></div><div class='sk-circle5 sk-circle'></div><div class='sk-circle6 sk-circle'></div><div class='sk-circle7 sk-circle'></div><div class='sk-circle8 sk-circle'></div><div class='sk-circle9 sk-circle'></div><div class='sk-circle10 sk-circle'></div><div class='sk-circle11 sk-circle'></div><div class='sk-circle12 sk-circle'></div>";
        default:
          return "<div class='sk-double-bounce1'></div><div class='sk-double-bounce2'></div>";
      }
    }
  }
};
</script>