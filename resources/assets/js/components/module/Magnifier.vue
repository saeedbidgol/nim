<template>
  <div class="img-magnifier-container" @mouseleave="isHover = false" @mouseenter="isHover = true">
    <div
      ref="glass"
      v-show="isHover"
      class="img-magnifier-glass"
      :style="`background-image:url(${this.src});background-size:${width*zoomLevel}px ${height*zoomLevel}px`"
      @mousemove="moveMagnifier"
    ></div>
    <img @mousemove="moveMagnifier" ref="myImg" :src="src" :width="width" :height="height" />
  </div>
</template>

<script>
export default {
  name: "Magnifier",
  props: {
    src: String,
    width: { type: Number, default: 400 },
    height: {
      type: Number,
      default: 550
    },
    zoomLevel: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      image: "",
      glassWidth: "",
      glassHeight: "",
      glass: "",
      bw: 1,
      isHover: false
    };
  },
  mounted() {
    this.image = this.$refs.myImg;
    this.magnify();
  },
  methods: {
    moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = this.getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > this.image.width - this.glassWidth / this.zoomLevel) {
        x = this.image.width - this.glassWidth / this.zoomLevel;
      }
      if (x < this.glassWidth / this.zoomLevel) {
        x = this.glassWidth / this.zoomLevel;
      }
      if (y > this.image.height - this.glassHeight / this.zoomLevel) {
        y = this.image.height - this.glassHeight / this.zoomLevel;
      }
      if (y < this.glassHeight / this.zoomLevel) {
        y = this.glassHeight / this.zoomLevel;
      }
      /*set the position of the magnifier this.glass:*/
      this.glass.style.left = x - this.glassWidth + "px";
      this.glass.style.top = y - this.glassHeight + "px";
      /*display what the magnifier this.glass "sees":*/
      this.glass.style.backgroundPosition =
        "-" +
        (x * this.zoomLevel - this.glassWidth + this.bw) +
        "px -" +
        (y * this.zoomLevel - this.glassHeight + this.bw) +
        "px";
    },
    getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = this.image.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    },
    magnify() {
      this.glass = this.$refs.glass;
      this.glassWidth = this.glass.offsetWidth / 2;
      this.glassHeight = this.glass.offsetHeight / 2;
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.img-magnifier-container {
  position: relative;
}

.img-magnifier-glass {
  position: absolute;
  border-radius: 50%;
  background-repeat: no-repeat;
  cursor: none;
  /*Set the size of the magnifier glass:*/
  width: 100px;
  height: 100px;
}
</style>