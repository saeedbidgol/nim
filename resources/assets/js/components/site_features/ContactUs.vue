<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">اطلاعات تماس با ما</h3>
    </div>
    <loading :is-loading="isLoading">
      <v-validate-observer tag="form" ref="addSlide" v-slot="{ invalid,passes }">
        <div class="form-group row">
          <div class="col-4">
            <label for="phone" class="control-label">تلفن:</label>
            <v-validate rules="required" name="phone">
              <input type="text" class="form-control" v-model.trim="info.phone" />
            </v-validate>
          </div>
          <div class="col-4">
            <label for="mobile" class="control-label">موبایل:</label>
            <v-validate rules="required" name="mobile">
              <input type="text" class="form-control" v-model.trim="info.mobile" />
            </v-validate>
          </div>
          <div class="col-4">
            <label for="email" class="control-label">ایمیل:</label>
            <v-validate rules="email" name="email">
              <input type="email" class="form-control" v-model.trim="info.email" />
            </v-validate>
          </div>
        </div>
        <div class="row form-group">
          <div class="col-4">
            <label for="telegram" class="control-label">تلگرام:</label>
            <input
              type="text"
              placeholder="https://t.me/Sharafi1993"
              class="form-control"
              v-model.trim="info.telegram"
            />
          </div>
          <div class="col-4">
            <label for="twitter" class="control-label">توییتر:</label>
            <input
              type="text"
              placeholder="https://twitter.com/asharafi1993"
              class="form-control"
              v-model.trim="info.twitter"
            />
          </div>
          <div class="col-4">
            <label for="linkdin" class="control-label">لینکدین:</label>
            <input
              type="text"
              placeholder="https://www.linkedin.com/in/ali-sharafi-40389778/"
              class="form-control"
              v-model.trim="info.linkdin"
            />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-12">
            <label for="address" class="control-label">آدرس:</label>
            <input type="text" class="form-control" v-model.trim="info.address" />
          </div>
        </div>
        <div class="row form-group">
          <div class="col-3">
            <button type="button" class="btn btn-primary" @click="passes(save)">ثبت</button>
          </div>
        </div>
      </v-validate-observer>
    </loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {},
      isLoading: false
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    save() {
      this.isLoading = true;
      this.$persistClient("patch", "/site-features/contact-us", this.info)
        .then(() => {
          this.$alert("success");
        })
        .finally(() => (this.isLoading = false));
    },
    getInfo() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/contact-us")
        .then(res => {
          let data = res.data;
          this.info = {
            phone: data.phone,
            mobile: data.mobile,
            email: data.email,
            address: data.address,
            telegram: data.telegram,
            twitter: data.twitter,
            linkdin: data.linkdin
          };
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style scoped>
::-webkit-input-placeholder {
  text-align: right;
}
/* mozilla solution */
input:-moz-placeholder {
  text-align: right;
}
</style>