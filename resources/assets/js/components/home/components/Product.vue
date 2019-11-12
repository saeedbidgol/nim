<template>
  <div id="product">
    <loading :is-loading="isLoading">
      <div class="spacer"></div>
      <div class="gallery-container">
        <div class="row">
          <div class="col-lg-3">
            <div class="right-side-bar">
              <div class="row">
                <div class="filter-container">
                  <!--<div class="col-lg-5 filter" v-for="filter in filters">{{getFilterName(filter)}} <span class="close-btn"></span> </div> -->
                </div>
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
                    {{productDetail.dimension?productDetail.dimension:'ندارد'}}
                  </p>
                  <div class="row" style="margin: 48px 0 0 0 !important;">
                    <div class="col-lg-6">
                      <p
                        class="price"
                      >{{productDetail.price?$ENTPN($separator(productDetail.price)) + 'ریال':'ندارد'}}</p>
                    </div>
                    <div class="col-lg-6">
                      <p id="order-title">تماس برای ثبت سفارش فوری</p>
                      <button id="order-btn" data-toggle="modal" data-target="#price">تماس با واحد فروش</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6" id="product-image">
                  <img :src="`/uploads/${productDetail.pic_url}`" width="100%" height="100%" />
                </div>
              </div>
              <div class="row" id="decoration-content">
                <div class="col-lg-5" id="decoration-text">
                  <span class="title">نمای دکوراسیون</span>
                  <p>{{productDetail.about}}</p>
                </div>
                <div class="col-lg-7" id="decoration-image">
                  <img :src="`/uploads/${productDetail.decor_url}`" alt width="100%" height="100%" />
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
    <modal id="price" title="لیست قیمت" :is-loading="isLoading" :modal-sm="true">
      <slot name="body">
        <div>سیبیسلنیستلمنیستلیسلیسبیسبسیبسبسیب</div>
      </slot>
      <slot name="footer">
        
      </slot>
    </modal>

  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      isCollapseGroup: false,
      isLoading: false,
      isCollapseColor: false,
      isCollapseColorCount: false,
      productDetail: [],
      suggestions: []
    };
  },
  mounted() {
    if (this.product) {
      this.getProduct();
      this.getSuggestions();
    }
  },
  methods: {
    addFavorite(product) {
      this.$persistClient("patch", `/products/${product}/favorite`);
      var body = $("html, body");
      body.stop().animate({ scrollTop: 0 }, 500, "swing");
    },
    getProduct() {
      this.isLoading = true;
      this.$persistClient("get", `/products/${this.product}`)
        .then(res => (this.productDetail = res.data))
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