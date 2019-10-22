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
          <div class="col-6">
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
          <div class="col-6">
            <div class="row form-group">
              <div class="col-6">
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
              <div class="col-6">
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
          </div>
          <div class="col-6">
            <vue-dropzone
              ref="myVueDropzone"
              id="dropzone"
              :options="dropzoneOptions"
              @vdropzone-sending-multiple="onAddProduct"
              @vdropzone-success-multiple="uploadSuccess"
              @vdropzone-error="uploadError"
              @vdropzone-file-added="fileAdded = true"
              :duplicateCheck="true"
            ></vue-dropzone>
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
      <div class="k-rtl">
        <kendo-datasource
          ref="datasource"
          :transport-read="readData"
          :batch="true"
          :page-size="10"
          :schema-total="'total'"
          :schema-data="'data'"
          :server-paging="true"
          :server-sorting="true"
          :server-filtering="true"
        ></kendo-datasource>
        <kendo-grid
          id="grid"
          ref="grid"
          :data-source-ref="'datasource'"
          @databinding="onDataBinding"
          :resizable="true"
          :pageable="grid.pageable"
          :page="page"
          :height="400"
        >
          <kendo-grid-column :title="'ردیف'" :template="getTemplate" :width="60"></kendo-grid-column>
          <kendo-grid-column field="code" title="کد طرح"></kendo-grid-column>
          <kendo-grid-column :template="picTemplate" title="تصویر طرح" field="file_url"></kendo-grid-column>
          <kendo-grid-column field="name" title="نام طرح"></kendo-grid-column>
          <kendo-grid-column field="back_color" title="رنگ زمینه"></kendo-grid-column>
          <kendo-grid-column field="dimensions" title="ابعاد"></kendo-grid-column>
          <kendo-grid-column field="density" title="تراکم"></kendo-grid-column>
          <kendo-grid-column field="colors" title="تعداد رنگ"></kendo-grid-column>
          <kendo-grid-column field="colors" title="نمای دکوراسیون"></kendo-grid-column>
        </kendo-grid>
      </div>
    </loading>
  </div>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data() {
    return {
      isLoading: false,
      fileAdded: false,
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
      gpage: 1,
      record: 0,
      picTemplate: `
      <div class='col-md-12'>
      <img style="border-radius: 50%;" width='50' height='50' src="/uploads/#:file_url#">
      </div
      `
    };
  },
  methods: {
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
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    readData(e) {
      this.isLoading = true;
      let url = "/products?";
      url += `page=${e.data.page}&pageSize=${e.data.pageSize}`;
      this.$persistClient("get", url)
        .then(res => {
          e.success(res.data);
        })
        .finally(() => (this.isLoading = false));
    },
    onDataBinding: function(ev) {
      this.record = (this.gpage - 1) * this.$refs.datasource.pageSize;
    },
    page: function(e) {
      this.gpage = e.page;
    },
    getTemplate: function() {
      return ++this.record;
    }
  }
};
</script>
<style>
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