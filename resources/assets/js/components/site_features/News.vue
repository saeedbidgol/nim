<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">اخبار</h3>
    </div>
    <loading :is-loading="isLoading">
      <v-validate-observer tag="form" ref="news" v-slot="{ invalid,passes }">
        <div class="row form-group">
          <div class="col-8">
            <label for="title" class="control-label">عنوان اصلی:</label>
            <v-validate rules="required" name="title" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="info.title"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-4">
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
        <div class="form-group row">
          <div class="col-12">
            <label for="title" class="control-label">متن اصلی:</label>
            <v-validate rules="required" name="body" v-slot="{ errors,classes }">
              <textarea
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                name="about"
                cols="30"
                rows="10"
                v-model.trim="info.body"
              ></textarea>
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <button type="button" class="btn btn-primary" @click="passes(update)" v-if="info.id">ثبت</button>
            <button type="button" class="btn btn-primary" @click="passes(save)" v-else>ثبت</button>
          </div>
        </div>
      </v-validate-observer>
    </loading>
    <loading :is-laoding="isLoading">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>عنوان اصلی</th>
              <th>متن</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(info,index) in news" :key="info.id">
              <th scope="row">{{index+1}}</th>
              <td>{{info.title | excpert(20)}}</td>
              <td>{{info.body | excpert(50)}}</td>
              <td>
                <button class="btn btn-success" @click="editNews(info)">ویرایش</button>
                <button class="btn btn-danger" @click="deleteNews(info)">حذف</button>
                <button class="btn btn-info" @click="showNewsPic(info)">مشاهده تصویر</button>
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
      info: {},
      news: [],
      isLoading: false,
      fileData: ""
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
    this.getNews();
  },
  methods: {
      showNewsPic(news) {
      window.open(`/uploads/${news.file_url}`, "_blank");
    },
      setFile(e) {
      let files = event.target.files;
      this.fileData = files[0].name;
      if (
        files[0].size &&
        files[0].size / (2048*2048) > 1
      ) {
        this.$alert("error", "خطا", "سایز فایل نباید از 3 مگابایت بیشتر باشد");
        $("#" + event.target.id).val("");
        return;
      }
      this.info.file = files[0];
    },
    deleteNews(info) {
      this.$alert("question").then(result => {
        if (result.value) {
          this.isLoading = true;
          this.$persistClient("delete", `/site-features/news/${info.id}`)
            .then(() => {
              this.$alert("success");
              this.getNews();
            })
            .finally(() => (this.isLoading = false));
        }
      });
    },
    update() {
      this.isLoading = true;
      let formData = new FormData();
      for (var key in this.info) {
        if (this.info[key] != null) formData.append(key, this.info[key]);
      }
      this.$persistClient("post", `/site-features/news/${this.info.id}/update`, formData)
        .then(() => {
          this.$alert("success");
          this.getNews();
          this.info = {};
          this.$refs.news.reset();
          this.fileData = "";
        })
        .finally(() => (this.isLoading = false));
    },
    editNews(news) {
      this.info = {
        title: news.title,
        body: news.body,
        id: news.id
      };
      if (news.file_url) this.fileData = news.file_url;
    },
    save() {
      if (!this.fileData) {
        this.$izitoast("error", "تصویر الزامی است!");
        return;
      }
      this.isLoading = true;
      let formData = new FormData();
      for (var key in this.info) {
        if (this.info[key] != null) formData.append(key, this.info[key]);
      }
      this.$persistClient("post", "/site-features/news", formData)
        .then(() => {
          this.$alert("success");
          this.getNews();
          this.info = {};
          this.fileData = "";
          this.$refs.news.reset();
        })
        .finally(() => (this.isLoading = false));
    },
    getNews() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/news")
        .then(res => {
          this.news = res.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style>
</style>