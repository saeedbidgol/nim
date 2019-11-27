<template>
  <div id="gallery">
    <loading :is-loading="isLoading">
      <div class="spacer"></div>
      <div class="gallery-container">
        <div class="row">
          <div class="col-lg-3">
            <div class="right-side-bar">
              <div class="row">
                <div class="filter-container">
                  <div class="col-lg-5 filter" v-for="filter in filters">
                    {{getFilterName(filter)}}
                    <span class="close-btn" @click="removeFilter(filter)"></span>
                  </div>
                </div>
              </div>
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
                      <li
                        v-for="category in categories"
                        :key="category.id"
                        @click="categoryFilter(category.id)"
                        :id="category.id"
                      >{{category.name}}</li>
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
                          <span id="color1" class="hide-text">سورمه ای</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(2)">
                          <span id="color2" class="hide-text">نارنجی</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(3)">
                          <span id="color3" class="hide-text">بژ</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(4)">
                          <span id="color4" class="hide-text">قهوه ای</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(5)">
                          <span id="color5" class="hide-text">سفید</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(6)">
                          <span id="color6" class="hide-text">مشکی</span>
                        </li>
                      </div>
                      <div class="row">
                        <li class="col-lg-2" @click="colorFilter(7)">
                          <span id="color7" class="hide-text">قرمز</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(8)">
                          <span id="color8" class="hide-text">سبز</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(9)">
                          <span id="color9" class="hide-text">زرد</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(10)">
                          <span id="color10" class="hide-text">صورتی</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(11)">
                          <span id="color11" class="hide-text">طوسی</span>
                        </li>
                        <li class="col-lg-2" @click="colorFilter(12)">
                          <span id="color12" class="hide-text">آبی</span>
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
                    <img id="product-img" :src="`/uploads/${product.pic_url}`" :alt="product.name" />

                    <div class="text">
                      <h3 class="product-name">{{product.name}}</h3>
                      <p
                        class="details1"
                      >{{$ENTPN(product.reed)}} شانه تراکم {{$ENTPN(product.density)}}</p>
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
              <pagination :pagination="products" @paginate="getProducts()" :offset="16"></pagination>
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
      filter: {},
      filters: [],
      categories: [],
      category: "",
      color: "",
      colorCount: ""
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
    if (this.$route.query) {
      this.filter.category = this.category = this.$route.query.category
        ? this.$route.query.category
        : "";
      if (this.$route.query.color) {
        this.filter.color = this.$route.query.color;
        $(`#color${this.filter.color}`).addClass("active");
        this.filters.push(`#color${this.filter.color}`);
      }
      if (this.$route.query.colorCount) {
        this.filter.color_count = this.$route.query.colorCount;
        $(`#color_count_${this.filter.color_count}`).addClass("active");
        this.filters.push(`#color_count_${this.filter.color_count}`);
      }
    }
    this.getProducts();
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/categories")
        .then(res => {
          this.categories = res.data;
          if (this.category) {
            setTimeout(() => {
              this.filters.push(`#${this.category}`);
              $(`#${this.category}`).addClass("active");
            }, 700);
          }
        })
        .finally(() => (this.isLoading = false));
    },
    removeFilter(filter) {
      let index = this.filters.indexOf(filter);
      if (index > -1) {
        this.filters.splice(index, 1);
      }
      $(filter).removeClass("active");
      let filterName = filter.slice(1, 12);
      if (filterName == "color_count") Vue.delete(this.filter, "color_count");
      else if (filterName.includes("color")) Vue.delete(this.filter, "color");
      else Vue.delete(this.filter, "category");
      this.getProducts();
    },
    getFilterName(filter) {
      return $(filter).text();
    },
    colorCountFilter(color) {
      if (this.filter.color_count) {
        $(`#color_count_${this.filter.color_count}`).removeClass("active");
        let index = this.filters.indexOf(
          `#color_count_${this.filter.color_count}`
        );
        if (index > -1) {
          this.filters.splice(index, 1);
        }
      }
      $(`#color_count_${color}`).addClass("active");
      this.filters.push(`#color_count_${color}`);
      this.filter.color_count = color;
      this.getProducts();
    },
    colorFilter(color) {
      if (this.filter.color) {
        $(`#color${this.filter.color}`).removeClass("active");
        let index = this.filters.indexOf(`#color${this.filter.color}`);
        if (index > -1) {
          this.filters.splice(index, 1);
        }
      }
      $(`#color${color}`).addClass("active");
      this.filters.push(`#color${color}`);
      this.filter.color = color;
      this.getProducts();
    },
    categoryFilter(category) {
      if (this.filter.category) {
        $(`#${this.filter.category}`).removeClass("active");
        let index = this.filters.indexOf(`#${this.filter.category}`);
        if (index > -1) {
          this.filters.splice(index, 1);
        }
      }
      $(`#${category}`).addClass("active");
      this.filters.push(`#${category}`);
      this.filter.category = category;
      this.getProducts();
    },
    addFavorite(product) {
      this.$persistClient("patch", `/products/${product}/favorite`);
    },
    getProducts() {
      this.isLoading = true;
      let url = `/products?page=${this.products.current_page}`;
      if (this.filter.search) url += `&search=${this.filter.search}`;
      if (this.filter.category) url += `&category=${this.filter.category}`;
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

<style scoped>
.hide-text {
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}
</style>