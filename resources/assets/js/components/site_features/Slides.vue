<template>
  <div>
    <loading :is-loading="isLoading">
    <div class="page-title">
      <h3 class="breadcrumb-header">اسلایدر</h3>
    </div>
        <div class="row form-group">
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
        <div class="row form-group">
          <div class="col-3 pull-left">
            <button type="button" class="btn btn-primary" @click="addSlide">ثبت</button>
          </div>
        </div>
    <br>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(slide,index) in slides" :key="slide.id">
              <th scope="row">{{index+1}}</th>
              <td>
                <button class="btn btn-danger" @click="deleteSlide(slide)">حذف</button>
                <button class="btn btn-info" @click="showSlide(slide)">مشاهده تصویر</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: {},
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
      this.isLoading = true;
      let formData = new FormData();
      for (var key in this.slide) {
        if (this.slide[key] != null) formData.append(key, this.slide[key]);
      }
      this.$persistClient("post", "/site-features/slides", formData)
        .then(() => {
          this.$alert("success");
          this.getSlides();
          this.slide = {};
          this.fileData = ""
        })
        .finally(() => (this.isLoading = false));
    },
    showSlide(slide) {
      window.open(`/uploads/${slide.file_url}`, "_blank");
    },
    deleteSlide(slide) {
      this.$alert("question").then(result => {
        if (result.value) {
          this.isLoading = true;
          this.$persistClient("delete", `/site-features/slides/${slide.id}`)
            .then(() => {
              this.$alert("success");
              this.getSlides();
            })
            .finally(() => (this.isLoading = false));
        }
      });
    },
    setFile(e) {
      let files = event.target.files;
      this.fileData = files[0].name;
      if (
        files[0].size &&
        files[0].size / process.env.MIX_REQUEST_FILE_SIZE > 1
      ) {
        this.$alert("error", "خطا", "سایز فایل نباید از 3 مگابایت بیشتر باشد");
        $("#" + event.target.id).val("");
        return;
      }
      this.slide.file = files[0];
    },
    getSlides() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/slides")
        .then(res => {
          this.slides = res.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style scoped>
.table thead th {
    text-align: right;
}
</style>