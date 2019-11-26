<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">گالری محصولات</h3>
    </div>
    <loading :is-loading="isLoading">
      <v-validate-observer tag="form" ref="production" v-slot="{ invalid, passes }">
        <div class="row form-group">
          <div class="col-3">
            <label for="name" class="control-label">نام طرح:</label>
            <v-validate rules="required" name="name" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.name"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3">
            <label for="name" class="control-label">کد طرح:</label>
            <v-validate rules="required" name="code" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.code"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3">
            <label for="name" class="control-label">شانه:</label>
            <v-validate rules="required" name="reed" v-slot="{ errors,classes }">
              <select
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.reed"
              >
                <option value="1500">۱۵۰۰</option>
                <option value="1200">۱۲۰۰</option>
                <option value="1000">۱۰۰۰</option>
                <option value="700">۷۰۰</option>
                <option value="500">۵۰۰</option>
              </select>
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3">
            <label for="name" class="control-label">تراکم:</label>
            <v-validate rules="required" name="density" v-slot="{ errors,classes }">
              <input
                type="number"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.density"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-3">
            <label for="name" class="control-label">رنگ زمینه:</label>
            <v-validate rules="required" name="back_color" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.back_color"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3">
            <label for="name" class="control-label">تعداد رنگ:</label>
            <v-validate rules="required" name="color_count" v-slot="{ errors,classes }">
              <input
                type="number"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.color_count"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3">
            <label for="name" class="control-label">دسته بندی:</label>
            <v-validate rules="required" name="category" v-slot="{ errors,classes }">
              <select
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.category_id"
              >
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >{{category.name}}</option>
              </select>
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3">
            <label for="name" class="control-label">ابعاد:</label>
            <v-validate rules="required" name="dimension" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="product.dimension"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-3">
            <label for="file" class="col-form-label">تصویر:</label>
            <div class="custom-file">
              <input
                type="file"
                accept="image/*"
                class="custom-file-input"
                name="pic"
                ref="fileUpload"
                autocomplete="pic"
                @change="setFile($event,'pic')"
              />
              <label
                class="custom-file-label"
                data-browse="بارگذاری"
              >{{pic?getFileName(pic):'انتخاب تصویر'}}</label>
            </div>
          </div>
          <div class="col-3">
            <label for="file" class="col-form-label">نمای دکوراسیون:</label>
            <div class="custom-file">
              <input
                type="file"
                accept="image/*"
                class="custom-file-input"
                name="decor"
                ref="fileUpload"
                autocomplete="decor"
                @change="setFile($event,'decor')"
              />
              <label
                class="custom-file-label"
                data-browse="بارگذاری"
              >{{decor?getFileName(decor):'انتخاب تصویر'}}</label>
            </div>
          </div>
          <div class="col-6">
            <label class="col-form-label">رنگبندی:</label>
            <v-select
              dir="rtl"
              label="name"
              :reduce="color => color.id"
              :options="colors"
              v-model="product.colors"
              multiple
            >
              <div slot="no-options">موردی‌یافت‌نشد!</div>
            </v-select>
            <!-- <vue-dropzone
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
              @vdropzone-sending-multiple="onAddProduct"
              @vdropzone-success-multiple="uploadSuccess"
              @vdropzone-error="uploadError"
              @vdropzone-file-added="fileAdded = true"
              @vdropzone-removed-file="removedFile"
              :duplicateCheck="true"
            ></vue-dropzone>-->
          </div>
        </div>
        <div class="row form-group">
          <div class="col-3">
            <label for="file" class="col-form-label">جنس نخ تار:</label>
            <input type="text" class="form-control" name="wrap" v-model="product.wrap" />
          </div>
          <div class="col-3">
            <label for="file" class="col-form-label">جنس نخ پود:</label>
            <input type="text" class="form-control" name="weft" v-model="product.weft" />
          </div>
          <div class="col-3">
            <label for="file" class="col-form-label">جنس نخ خواب:</label>
            <input type="text" class="form-control" name="weft" v-model="product.pile" />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-2 dimensions" v-for="(dim,index) in dimensions" :key="index">
            <div class="form-group">
              <label>ابعاد:</label>
              <input type="text" class="form-control" v-model="dim.dimension" />
            </div>
            <div class="form-group">
              <label>قیمت:</label>
              <input type="number" class="form-control" v-model="dim.price" />
            </div>
            <div class="form-group delete-button">
              <button class="btn btn-danger m-r-40" type="button" @click="deleteDimension(index)">
                <i class="fas fa-minus-square"></i>
              </button>
            </div>
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success btn-rounded m-t-65" @click="addDimension">
              <i class="fas fa-plus-circle fa-2x m-t-5"></i>
            </button>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-12">
            <label for="name" class="control-label">درباره طرح:</label>
            <textarea
              class="form-control"
              name="about"
              cols="30"
              rows="5"
              v-model.trim="product.about"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-3 pull-left">
            <button type="button" class="btn btn-primary" @click="passes(add)">ثبت</button>
          </div>
        </div>
      </v-validate-observer>
    </loading>
    <loading :is-loading="isLoading">
      <div class="table-responsive">
        <table class="display table field" style="width: 100%;">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>کد طرح</th>
              <th>تصویر طرح</th>
              <th>نام طرح</th>
              <th>رنگ زمینه</th>
              <th>ابعاد</th>
              <th>تراکم</th>
              <th>تعداد رنگ</th>
              <th>دسته‌بندی</th>
              <th>رنگبندی</th>
              <th>نمای دکوراسیون</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product,index) in products.data" :key="product.id">
              <td>{{index+1}}</td>
              <td>{{product.code}}</td>
              <td>
                <img v-if="product.pic_url" :src="'/uploads/'+product.pic_url" />
                <span v-else>ندارد</span>
              </td>
              <td>{{product.name}}</td>
              <td>{{product.back_color}}</td>
              <td>{{product.dimension}}</td>
              <td>{{product.density}}</td>
              <td>{{product.color_count}}</td>
              <td>{{product.category?product.category.name:''}}</td>
              <td>{{getColors(product)}}</td>
              <td>
                <img v-if="product.decor_url" :src="'/uploads/'+product.decor_url" />
                <span v-else>ندارد</span>
              </td>
              <td>
                <button type="button" class="btn btn-info" @click="editProduct(product)">ویرایش</button>
                <button type="button" class="btn btn-danger" @click="deleteProduct(product)">حذف</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pagination="products" @paginate="getProducts()" :offset="16"></pagination>
      </div>
    </loading>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import pagination from "../module/Pagination";
export default {
  components: {
    vueDropzone: vue2Dropzone,
    pagination
  },
  data() {
    return {
      isLoading: false,
      fileAdded: false,
      dimensions: [{ dimension: "", price: "" }],
      categories: [],
      colors: [
        { id: 1, name: "سورمه ای" },
        { id: 2, name: "نارنجی" },
        { id: 3, name: "بژ" },
        { id: 4, name: "قهوه ای" },
        { id: 5, name: "سفید" },
        { id: 6, name: "مشکی" },
        { id: 7, name: "قرمز" },
        { id: 8, name: "سبز" },
        { id: 9, name: "زرد" },
        { id: 10, name: "صورتی" },
        { id: 11, name: "طوسی" },
        { id: 12, name: "آبی" }
      ],
      decor: "",
      pic: "",
      dropzoneOptions: {
        url: "/products",
        autoProcessQueue: false,
        uploadMultiple: true,
        parallelUploads: 4,
        dictDefaultMessage:
          "<i class='is-size-150 fa fa-cloud-upload'></i>افزودن رنگبندی",
        maxFilesize: 5, // MB
        chunkSize: 400, // Bytes
        thumbnailWidth: 100, // px
        thumbnailHeight: 100,
        addRemoveLinks: true,
        headers: {
          "X-CSRF-TOKEN": document.head.querySelector("[name=csrf-token]")
            .content
        },
        acceptedFiles: ".gif, .png, .jpeg, .jpg",
        dictInvalidFileType: "شمانمیتوانیدبااین فرمت فایل آپلود کنید!",
        dictRemoveFile: "حذف",
        dictMaxFilesExceeded: "شما نمیتواند بیش از 4 فایل آپلود کنید!"
      },
      product: {},
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
    this.getCategories();
  },
  methods: {
    deleteDimension(index) {
      this.dimensions.splice(index, 1);
    },
    addDimension() {
      this.dimensions.push({ dimension: "", price: "" });
    },
    getCategories() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/categories")
        .then(res => {
          this.categories = res.data;
        })
        .finally(() => (this.isLoading = false));
    },
    getColors(product) {
      if (!product.colors) return "ندارد";
      let colors = collect(product.colors)
        .pluck("color_id")
        .toArray();
      return collect(this.colors)
        .whereIn("id", colors)
        .pluck("name")
        .join(",");
    },
    removedFile(file) {
      if (!this.product.id) return;
      this.isLoading = true;
      this.$persistClient(
        "delete",
        `/products/${file.product_id}/colors/${file.color_id}`
      )
        .then(() => this.$alert("success"))
        .finally(() => (this.isLoading = false));
    },
    deleteProduct(product) {
      this.$alert("question").then(result => {
        if (result.value) {
          this.isLoading = true;
          this.$persistClient("delete", `/products/${product.id}`)
            .then(() => {
              this.$alert("success");
              this.getProducts();
            })
            .finally(() => {
              this.isLoading = false;
            });
        }
      });
    },
    editProduct(product) {
      this.product = {
        id: product.id,
        name: product.name,
        code: product.code,
        reed: product.reed,
        density: product.density,
        back_color: product.back_color,
        color_count: product.color_count,
        dimension: product.dimension,
        weft: product.weft ? product.weft : "",
        wrap: product.wrap ? product.wrap : "",
        pile: product.pile ? product.pile : "",
        category_id: product.category_id ? product.category_id : ""
      };
      this.decor = product.decor_url;
      this.pic = product.pic_url;
      if (product.price) this.price = product.price;
      if (product.colors) {
        let colors = collect(product.colors)
          .pluck("color_id")
          .toArray();
        this.product.colors = colors;
      }
    },
    getFileName(value) {
      let regexValue = value.match(/[\w-]+.(jpg|png|jpeg)/gm);
      return regexValue ? this.excpert(regexValue[0]) : "";
    },
    excpert(value) {
      if (value.length < 17) return value;
      return value.substring(0, 17);
    },
    setFile(e, type) {
      let files = event.target.files;
      if (files[0].size && files[0].size / (2048 * 2048) > 1) {
        this.$alert("error", "خطا", "سایز فایل نباید از 3 مگابایت بیشتر باشد");
        $("#" + event.target.id).val("");
        return;
      }
      this.product[type] = files[0];
      if (type == "pic") this.pic = files[0].name;
      else this.decor = files[0].name;
    },
    uploadError() {
      this.$alert("error");
      this.isLoading = false;
    },
    uploadSuccess(file, response) {
      this.$refs.myVueDropzone.removeAllFiles(true);
      this.$alert("success");
      this.isLoading = false;
      this.getProducts();
    },
    onAddProduct(file, xhr, formData) {
      for (var key in this.product) {
        if (this.product[key] != null) formData.append(key, this.product[key]);
      }
    },
    add() {
      this.isLoading = true;
      if (this.fileAdded) {
        this.$refs.myVueDropzone.processQueue();
      } else {
        let formData = new FormData();
        for (var key in this.product) {
          if (this.product[key] != null)
            formData.append(key, this.product[key]);
        }
        this.$persistClient("post", "/products", formData)
          .then(() => {
            this.$alert("success");
            this.product = {};
            this.$refs.production.reset();
            this.decor = "";
            this.pic = "";
            this.getProducts();
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    getProducts() {
      this.isLoading = true;
      this.$persistClient("get", `/products?page=${this.products.current_page}`)
        .then(res => {
          this.products = res.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
<style lang="scss" scoped>
.m-r-40 {
  margin-right: 40px;
  line-height: 1px;
}
.dimensions:hover {
  .delete-button {
    display: block;
  }
}
.delete-button {
  display: none;
}
.m-t-5 {
  margin-top: 5px;
}
.m-t-65 {
  margin-top: 65px;
}
.table thead th {
  text-align: right;
}
</style>
<style>
.field img {
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
}
#dropzone .dz-preview.dz-file-preview {
  width: 90px;
  height: 20px;
  font-family: serif;
  direction: ltr;
}
#dropzone .dz-size {
  margin-bottom: 3em;
  font-size: 11px;
}
#dropzone .dz-progress {
  height: 9px;
  width: 65px;
  margin-left: -33px;
  margin-top: 1px;
}
#dropzone .dz-remove {
  border: none;
  font-size: 1.5rem;
  bottom: 56px;
  margin-left: 43px;
  text-transform: none;
  color: red;
  font-family: iranyekan;
  z-index: 1000;
}
#dropzone .dz-error-message {
  top: 22%;
}
#dropzone .dz-default.dz-message {
  font-family: iranyekan;
}
#dropzone {
  border: 2px dotted #428058 !important;
}
</style>