<template>
  <div>
    <loading :is-loading="isLoading">
      <div class="page-title">
        <h3 class="breadcrumb-header">کاتالوگ</h3>
      </div>
      <v-validate-observer tag="form" ref="addSlide" v-slot="{ invalid,passes }">
        <div class="row">
          <div class="col-6 form-group">
            <label for="title" class="control-label">عنوان:</label>
            <v-validate rules="required" name="title" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="slide.name"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-6">
            <label for="file" class="col-form-label">تصویر:</label>
            <div class="custom-file">
              <input
                type="file"
                accept="image/*"
                class="custom-file-input"
                name="file"
                ref="fileUpload"
                autocomplete="file"
                @change="setFile"
              />
              <label class="custom-file-label" data-browse="بارگذاری">انتخاب تصویر</label>
            </div>
            <span style="font-size:smaller;color:green">{{fileData | getFileName}}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-3 pull-left">
            <button type="button" class="btn btn-primary" @click="passes(addSlide)">ثبت</button>
          </div>
        </div>
      </v-validate-observer>
      <br />
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>عنوان اصلی</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(slide,index) in slides" :key="slide.id">
              <th scope="row">{{index+1}}</th>
              <td>{{slide.name | excpert(20)}}</td>
              <td>
                <button
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#edit-modal"
                  @click="editSlide(slide)"
                >ویرایش</button>
                <button class="btn btn-danger" @click="deleteSlide(slide)">حذف</button>
                <button class="btn btn-info" @click="showSlide(slide)">مشاهده تصویر</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </loading>
    <modal id="edit-modal" title="ویرایش" :isLoading="isLoading">
      <div slot="body">
        <v-validate-observer tag="form" ref="editSlide" v-slot="{ invalid }">
          <div class="row">
            <div class="col-12 form-group">
              <label for="title" class="control-label">عنوان اصلی:</label>
              <v-validate rules="required" name="title" v-slot="{ errors,classes }">
                <input
                  type="text"
                  :class="{'form-control':true,'is-invalid':classes.invalid}"
                  v-model.trim="editForm.name"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </v-validate>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-12">
              <label for="file" class="col-form-label">تصویر:</label>
              <div class="custom-file">
                <input
                  id="file"
                  type="file"
                  accept="image/*"
                  class="custom-file-input"
                  name="file"
                  autocomplete="file"
                  @change="setFileOnUpdate"
                />
                <label class="custom-file-label" data-browse="بارگذاری">انتخاب تصویر</label>
              </div>
              <span style="font-size:smaller;color:green">{{fileData | getFileName}}</span>
            </div>
          </div>
        </v-validate-observer>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">لغو</button>
        <button type="button" class="btn btn-primary" @click="updateSlide">ذخیره</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: {},
      editForm: {},
      slides: [],
      fileData: "",
      isLoading: false,
      addIsLoading: false
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
    this.getSlides();
  },
  methods: {
    addSlide() {
      if (!this.fileData) {
        this.$izitoast("error", "تصویر الزامی است!");
        return;
      }
      this.addIsLoading = true;
      let formData = new FormData();
      for (var key in this.slide) {
        if (this.slide[key] != null) formData.append(key, this.slide[key]);
      }
      this.$persistClient("post", "/site-features/catalogues", formData)
        .then(() => {
          this.$alert("success");
          this.getSlides();
          this.slide = {};
          this.fileData = "";
          this.$refs.addSlide.reset();
        })
        .finally(() => (this.addIsLoading = false));
    },
    showSlide(slide) {
      window.open(`uploads/${slide.file_url}`, "_blank");
    },
    deleteSlide(slide) {
      this.$alert("question").then(result => {
        if (result.value) {
          this.isLoading = true;
          this.$persistClient("delete", `/site-features/catalogues/${slide.id}`)
            .then(() => {
              this.$alert("success");
              this.getSlides();
            })
            .finally(() => (this.isLoading = false));
        }
      });
    },
    updateSlide() {
      this.$refs.editSlide.validate().then(result => {
        if (result) {
          this.isLoading = true;
          let slideID = this.editForm.id;
          Vue.delete(this.editForm, "id");
          let formData = new FormData();
          for (var key in this.editForm) {
            if (this.editForm[key] != null)
              formData.append(key, this.editForm[key]);
          }
          this.$persistClient(
            "post",
            `/site-features/catalogues/${slideID}/update`,
            formData
          )
            .then(() => {
              this.$alert("success");
              $("#edit-modal").modal("hide");
              this.getSlides();
            })
            .finally(() => (this.isLoading = false));
        }
      });
    },
    setFile(e) {
      let files = event.target.files;
      this.fileData = files[0].name;
      if (files[0].size && files[0].size / (2048 * 2048) > 1) {
        this.$alert("error", "خطا", "سایز فایل نباید از 3 مگابایت بیشتر باشد");
        $("#" + event.target.id).val("");
        return;
      }
      this.slide.file = files[0];
    },
    setFileOnUpdate(e) {
      let files = event.target.files;
      this.fileData = files[0].name;
      if (files[0].size && files[0].size / (2048 * 2048) > 1) {
        this.$alert("error", "خطا", "سایز فایل نباید از 3 مگابایت بیشتر باشد");
        $("#" + event.target.id).val("");
        return;
      }
      this.editForm.file = files[0];
    },
    editSlide(slide) {
      this.editForm = {
        id: slide.id,
        name: slide.name
      };
      this.fileData = slide.file_url;
    },
    getSlides() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/catalogues")
        .then(res => {
          this.slides = res.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style>
</style>