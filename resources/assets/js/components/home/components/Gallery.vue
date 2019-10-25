<template>
  <div id="gallery">
    <loading :is-loading="isLoading">
      <div class="spacer"></div>
      <div class="gallery-container">
        <div class="row">
          <div class="col-lg-3">
            <div class="right-side-bar">
              <p class="filter">فرش ماشینی ۱۰۰۰ شانه</p>
              <div class="row search">
                <div class="col-12">
                  <form action>
                    <input
                      class="search-text"
                      type="text"
                      v-model="filter.search"
                      placeholder="کد یا نام فرش "
                    />
                    <button type="button" class="search-btn" @click="getProducts">جستجو</button>
                  </form>
                </div>
              </div>
              <div class="row">
                <div :class="{'col-12':true, 'collapse':isCollapseGroup}" id="grouping">
                  <div class="grouping">
                    <span class="collapse-btn" @click="isCollapseGroup=!isCollapseGroup"></span>
                    <span class="header-text">دسته‌بندی محصولات</span>
                    <ul class="group-list">
                      <li @click="reedFilter(1500)" id="1500">فرش ۱۵۰۰ شانه</li>
                      <li @click="reedFilter(1200)" id="1200">فرش ۱۲۰۰ شانه</li>
                      <li @click="reedFilter(1000)" id="1000">فرش ۱۰۰۰ شانه</li>
                      <li @click="reedFilter(700)" id="700">فرش ۷۰۰ شانه</li>
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
                        <li class="col-lg-2" @click="colorFilter(1)">
                          <span id="color1"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(2)">
                          <span id="color2"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(3)">
                          <span id="color3"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(4)">
                          <span id="color4" class="active"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(5)">
                          <span id="color5"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(6)">
                          <span id="color6"></span>
                        </li>
                      </div>
                      <div class="row">
                        <li class="col-lg-2" @click="colorFilter(7)">
                          <span id="color7"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(8)">
                          <span id="color8"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(9)">
                          <span id="color9"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(10)">
                          <span id="color10"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(11)">
                          <span id="color11"></span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(12)">
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
                      <li @click="colorCountFilter(8)" id="color_count_8">۸ رنگ</li>
                      <li @click="colorCountFilter(10)" id="color_count_10">۱۰ رنگ</li>
                      <li @click="colorCountFilter(12)" id="color_count_12">۱۲ رنگ</li>
                      <li @click="colorCountFilter(14)" id="color_count_14">۱۴ رنگ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-9">
            <div class="content">
              <div class="row" v-for="(chunk,index) in galleries" :key="index">
                <div class="col-lg-3" v-for="product in chunk.items" :key="product.id">
                  <div class="product">
                    <img :src="`/uploads/${product.pic_url}`" :alt="product.name" />
                    <div class="text">
                      <h3 class="product-name">{{product.name}}</h3>
                      <p class="details1">{{$ENTPN(product.reed)}} شانه تراکم {{$ENTPN(product.density)}}</p>
                      <p class="details2">{{$ENTPN(product.color_count)}} رنگ</p>
                      <p
                        class="price"
                      >{{product.price?$ENTPN($separator(product.price)) + 'ریال':'ندارد'}}</p>
                      <router-link :to="`/product/${product.id}`">
                        <a href class="more" @click="addFavorite(product.id)">اطلاعات بیشتر</a>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
              <pagination
                :pagination="products"
                @paginate="getProducts()"
                :offset="16"
              ></pagination>
            </div>
          </div>
        </div>
      </div>
    </loading>
  </div>
</template>

<script>
import pagination from "../../module/Pagination";
import loading from "../../module/HomeLoading";
export default {
  components: {
    loading,
    pagination
  },
  data() {
    return {
      isLoading: false,
      isCollapseGroup: false,
      isCollapseColor: false,
      isCollapseColorCount: false,
      products: {
        total: 0,
        per_page: 2,
        from: 1,
        to: 0,
        current_page: 1
      },
      filter: {}
    };
  },
  computed: {
    galleries() {
      return collect(this.products.data)
        .chunk(4)
        .all();
    }
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    colorCountFilter(color) {
      if (this.filter.color_count)
        $(`#color_count_${this.filter.color_count}`).removeClass("active");
      $(`#color_count_${color}`).addClass("active");
      this.filter.color_count = color;
      this.getProducts();
    },
    colorFilter(color) {
      if (this.filter.color) $(`#${this.filter.color}`).removeClass("active");
      $(`#${color}`).addClass("active");
      this.filter.color = color;
      this.getProducts();
    },
    reedFilter(reed) {
      if (this.filter.reed) $(`#${this.filter.reed}`).removeClass("active");
      $(`#${reed}`).addClass("active");
      this.filter.reed = reed;
      this.getProducts();
    },
    addFavorite(product) {
      this.$persistClient("patch", `/products/${product}/favorite`);
    },
    getProducts() {
      this.isLoading = true;
      let url = `/products?page=${this.products.current_page}`;
      if (this.filter.search) url += `&search=${this.filter.search}`;
      if (this.filter.reed) url += `&reed=${this.filter.reed}`;
      if (this.filter.color) url += `&color=${this.filter.color}`;
      if (this.filter.color_count)
        url += `&color_count=${this.filter.color_count}`;
      this.$persistClient("get", url)
        .then(res => {
          this.products = res.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style>
</style>