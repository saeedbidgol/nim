<template>
  <div>
    <div id="product">
      <loading :is-loading="isLoading">
        <div class="spacer"></div>
        <div class="gallery-container">
          <div class="row">
            <div class="col-lg-3">
              <div class="right-side-bar">
                <div class="row">
                  <div class="filter-container"></div>
                </div>
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
                        <li v-for="category in categories" :key="category.id" :id="category.id">
                          <router-link
                            :to="{ path: '/gallery',query : { category: category.id } }"
                          >{{category.name}}</router-link>
                        </li>
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
                            <router-link :to="{ path: '/gallery',query : { color:1 } }">
                              <span id="color1"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:2 } }">
                              <span id="color2"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:3 } }">
                              <span id="color3"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:4 } }">
                              <span id="color4" class="active"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:5 } }">
                              <span id="color5"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:6 } }">
                              <span id="color6"></span>
                            </router-link>
                          </li>
                        </div>
                        <div class="row">
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:7 } }">
                              <span id="color7"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:8 } }">
                              <span id="color8"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:9 } }">
                              <span id="color9"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:10 } }">
                              <span id="color10"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:11 } }">
                              <span id="color11"></span>
                            </router-link>
                          </li>
                          <li class="col-lg-2">
                            <router-link :to="{ path: '/gallery',query : { color:12 } }">
                              <span id="color12"></span>
                            </router-link>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div :class="{'col-12':true, 'collapse':isCollapseColorCount}" id="grouping">
                    <div class="grouping">
                      <span
                        class="collapse-btn"
                        @click="isCollapseColorCount=!isCollapseColorCount"
                      ></span>
                      <span class="header-text">تعداد رنگ محصولات</span>
                      <ul class="group-list">
                        <li>
                          <router-link :to="{ path: '/gallery',query : { colorCount:8 } }">۸ رنگ</router-link>
                        </li>
                        <li>
                          <router-link :to="{ path: '/gallery',query : { colorCount:10 } }">۱۰ رنگ</router-link>
                        </li>
                        <li>
                          <router-link :to="{ path: '/gallery',query : { colorCount:12 } }">۱۲ رنگ</router-link>
                        </li>
                        <li>
                          <router-link :to="{ path: '/gallery',query : { colorCount:14 } }">۱۴ رنگ</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="content">
                <div class="row" id="product-details">
                  <div class="col-lg-6" id="product-items">
                    <p>
                      <span class="title">کد طرح:</span>
                      {{$ENTPN(productDetail.code)}}
                    </p>
                    <p>
                      <span class="title">نام طرح:</span>
                      {{productDetail.name}}
                    </p>
                    <p>
                      <span class="title">رنگ زمینه:</span>
                      {{productDetail.back_color?productDetail.back_color:'ندارد'}}
                    </p>
                    <p>
                      <span class="title">جنس نخ خاب:</span>
                      {{productDetail.pile?productDetail.pile:'ندارد'}}
                    </p>
                    <p>
                      <span class="title">جنس نخ تار:</span>
                      {{productDetail.wrap?productDetail.wrap:'ندارد'}}
                    </p>
                    <p>
                      <span class="title">جنس نخ پود:</span>
                      {{productDetail.weft?productDetail.weft:'ندارد'}}
                    </p>
                    <p>
                      <span class="title">اندازه:</span>
                      {{getDimension}}
                    </p>
                    <div class="row" style="margin: 48px 0 0 0 !important;">
                      <div class="col-lg-6">
                        <button
                          id="price-btn"
                          data-toggle="modal"
                          data-target="#price-modal"
                        >مشاهده قیمت</button>
                      </div>
                      <div class="col-lg-6">
                        <p id="order-title">تماس برای ثبت سفارش فوری</p>
                        <button
                          id="order-btn"
                          data-toggle="modal"
                          data-target="#contact-us-modal"
                        >تماس با واحد فروش</button>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6" id="product-image">
                    <magnifier :src="`/uploads/${productDetail.pic_url}`" :glass-width="50" :glass-height="50" v-if="productDetail" />
                  </div>
                  
                </div>
                <div class="row" id="decoration-content">
                  <div class="col-lg-5" id="decoration-text">
                    <span class="title">نمای دکوراسیون</span>
                    <p>{{productDetail.about}}</p>
                  </div>
                  <div class="col-lg-7" id="decoration-image">
                    <img
                      :src="`/uploads/${productDetail.decor_url}`"
                      alt
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <div class="row" id="product-suggestion">
                  <h2 class="title">محصولات مرتبط</h2>
                  <div class="col-lg-3" v-for="suggestion in suggestions" :key="suggestion.id">
                    <div class="product">
                      <img :src="`/uploads/${suggestion.pic_url}`" :alt="suggestion.name" />
                      <div class="text">
                        <h3 class="product-name">{{suggestion.name}}</h3>
                        <p class="details1">{{$ENTPN(suggestion.density)}} شانه تراکم</p>
                        <p class="details2">{{$ENTPN(suggestion.color_count)}} رنگ</p>
                        <p
                          class="price"
                        >{{suggestion.price?$ENTPN($separator(suggestion.price)) + 'ریال':'ندارد'}}</p>
                        <router-link :to="`/product/${suggestion.id}`">
                          <a href class="more" @click="addFavorite(suggestion.id)">اطلاعات بیشتر</a>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </loading>
    </div>
    <modal id="contact-us-modal" title="بستن" :isLoading="isLoading">
      <div slot="body">
        <div class="right-content">
          <span class="title">تماس با واحد فروش</span>
          <p>برای تماس مستقیم با بخش فروش و سفارشات از راه های مقابل اقدام کنید.</p>
        </div>
        <div class="left-content">
          <ul>
            <li>
              <span class="maintenance-logo" id="phone"></span>۰۹۱۳۴۴۵۶۴۳۳
            </li>
            <li>
              <span class="maintenance-logo" id="telephone"></span>۰۳۱۵۴۷۰۲۵۲۴
            </li>
            <li>
              <span class="maintenance-logo" id="whatsapp"></span>۰۹۱۳۴۴۵۶۴۳۳
            </li>
            <li>
              <a href="https://t.me/nimrokhbaft_carpet">
                <span class="maintenance-logo" id="telegram"></span>تلگرام واحد فروش
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nimrokhbaft_carpet/">
                <span class="maintenance-logo" id="instagram"></span>ارتباط از طریق دایرکت اینستاگرام
              </a>
            </li>
          </ul>
        </div>
      </div>
    </modal>
    <modal id="price-modal" title="بستن" :isLoading="isLoading">
      <div slot="body">
        <p>لیست قیمت</p>
        <p class="title">{{productDetail.category?productDetail.category.name:'ندارد'}}</p>
        <div class="right-content">
          <span>ابعاد</span>
          <p
            class="dimention"
            v-for="(dimension,index) in dimensions"
            :key="index"
          >{{$ENTPN(dimension.dimension)}}</p>
        </div>
        <div class="left-content">
          <span>قیمت</span>
          <p
            class="price"
            v-for="(dimension,index) in dimensions"
            :key="index"
          >{{$ENTPN($separator(dimension.price))}}تومان</p>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Magnifier from 'vuejs-magnifier'
export default {
  props: ["product"],
  components: { Magnifier },
  data() {
    return {
      isCollapseGroup: false,
      isLoading: false,
      isCollapseColor: false,
      isCollapseColorCount: false,
      productDetail: "",
      suggestions: [],
      dimensions: [],
      categories: []
    };
  },
  computed: {
    getDimension() {
      if (!this.dimensions) return "";
      return collect(this.dimensions)
        .pluck("dimension")
        .join(",");
    }
  },
  mounted() {
    if (this.product) {
      this.getProduct();
      this.getSuggestions();
    }
    this.getCategories();
  },
  methods: {
    getCategories() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/categories")
        .then(res => {
          this.categories = res.data;
        })
        .finally(() => (this.isLoading = false));
    },
    addFavorite(product) {
      this.$persistClient("patch", `/products/${product}/favorite`);
      var body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    },
    getProduct() {
      this.isLoading = true;
      this.$persistClient("get", `/products/${this.product}`)
        .then(res => {
          this.productDetail = res.data;
          this.dimensions = JSON.parse(res.data.dimension);
        })
        .finally(() => (this.isLoading = false));
    },
    getSuggestions() {
      this.$persistClient("get", `/products/${this.product}/suggestions`).then(
        res => (this.suggestions = res.data)
      );
    }
  }
};
</script>

<style>
</style>