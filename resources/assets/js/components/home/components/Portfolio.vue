<template>
  <div id="portfolio">
    <img src="uploads/background-svg/2.svg" alt="بوته" id="second-background-svg" />
    <img src="uploads/background-svg/3.svg" alt="بوته" id="third-background-svg" />
    <div class="wow fadeInUp">
      <div class="section-header">
        <h3 class="section-title">دسته‌بندی محصولات</h3>
      </div>
      <div class="portfolio-container">
        <div class="row" id="portfolio-wrapper">
          <div
            v-for="(item,index) in portfolio"
            :key="item.id"
            :class="{'col-lg-4':[0,1,2,5,6,7].includes(index),'col-lg-6':[3,4].includes(index), 'col-md-6':true, 'portfolio-item':true,'filter-card':[3,4,6].includes(index), 'filter-app':[0,2,7].includes(index),'filter-web':[1,5].includes(index)}"
          >
            <div class="item-container">
              <a href>
                <img :src="`/uploads/${item.file_url}`" alt />
                <div class="details">
                  <h4>{{item.name}}</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      portfolio: []
    };
  },
  filters: {
    getFileName(value) {
      let regexValue = value.match(/[\w-]+.(jpg|png|jpeg)/gm);
      return regexValue ? regexValue[0] : "";
    },
    excpert(value, maxLength) {
      if (value.length < maxLength) return value;
      return value.substring(0, maxLength) + " ...";
    }
  },
  mounted() {
    this.getPortfolio();
  },
  methods: {
    getPortfolio() {
      this.$persistClient("get", "/site-features/categories").then(
        res => (this.portfolio = res.data)
      );
    }
  }
};
</script>

<style>
</style>
