<template>
  <div id="gallery">
    <div class="spacer"></div>
    <div class="gallery-container">
      <div class="row">
        <div class="col-lg-3">
          <div class="right-side-bar">
            <p class="filter">فرش ماشینی ۱۰۰۰ شانه</p>
            <div class="row search">
              <div class="col-12">
                <form action>
                  <input class="search-text" type="text" placeholder="کد یا نام فرش " />
                  <button type="button" class="search-btn">جستجو</button>
                </form>
              </div>
            </div>
            <div class="row">
              <div :class="{'col-12':true, 'collapse':isCollapseGroup}" id="grouping">
                <div class="grouping">
                  <span class="collapse-btn" @click="isCollapseGroup=!isCollapseGroup"></span>
                  <span class="header-text">دسته‌بندی محصولات</span>
                  <ul class="group-list">
                    <li>فرش ۱۵۰۰ شانه</li>
                    <li>فرش ۱۲۰۰ شانه</li>
                    <li class="active">فرش ۱۰۰۰ شانه</li>
                    <li>فرش ۷۰۰ شانه</li>
                    <li>فرش ۷۰۰ شانه</li>
                    <li>فرش ۷۰۰ شانه</li>
                    <li>فرش ۷۰۰ شانه</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div :class="{'col-12':true, 'collapse':isCollapseColor}">
                <div class="grouping">
                  <span class="collapse-btn" @click="isCollapseColor=!isCollapseColor"></span>
                  <span class="header-text">رنگ‌بندی محصولات</span>
                  <ul class="color-list">
                    <div class="row">
                      <li class="col-lg-2">
                        <span id="color1"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color2"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color3"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color4" class="active"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color5"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color6"></span>
                      </li>
                    </div>
                    <div class="row">
                      <li class="col-lg-2">
                        <span id="color7"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color8"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color9"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color10"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color11"></span>
                      </li>
                      <li class="col-lg-2">
                        <span id="color12"></span>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div :class="{'col-12':true, 'collapse':isCollapseColorCount}" id="grouping">
                <div class="grouping">
                  <span class="collapse-btn" @click="isCollapseColorCount=!isCollapseColorCount"></span>
                  <span class="header-text">تعداد رنگ محصولات</span>
                  <ul class="group-list">
                    <li>۸ رنگ</li>
                    <li>۱۰ رنگ</li>
                    <li class="active">۱۲ رنگ</li>
                    <li>۱۴ رنگ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="content">
            <div class="row">
              <div class="col-lg-3" v-for="product in products.data" :key="product.id">
                <div class="product">
                  <img :src="`/uploads/${product.pic_url}`" :alt="product.name" />
                  <div class="text">
                    <h3 class="product-name">{{product.name}}</h3>
                    <p class="details1">{{product.reed}} شانه تراکم {{product.density}}</p>
                    <p class="details2">{{product.color_count}} رنگ</p>
                    <p class="price">۱,۷۲۰,۰۰۰ تومان</p>
                    <router-link :to="`/product/${product.id}`">
                      <a href class="more" @click="addFavorite(product.id)">اطلاعات بیشتر</a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <pagination :pagination="products" @paginate="getProducts()" :offset="16"></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from "../../module/Pagination";
export default {
  components: {
    pagination
  },
  data() {
    return {
      isCollapseGroup: false,
      isCollapseColor: false,
      isCollapseColorCount: false,
      products: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1
      }
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    addFavorite(product) {
      this.$persistClient("patch", `/products/${product.id}/favorite`);
    },
    getProducts() {
      this.$persistClient(
        "get",
        `/products?page=${this.products.current_page}`
      ).then(res => {
        this.products = res.data;
      });
    }
  }
};
</script>

<style>
</style>