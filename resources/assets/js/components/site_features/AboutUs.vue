<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">درباره ما</h3>
    </div>
    <loading :is-loading="isLoading">
      <v-validate-observer tag="form" ref="addSlide" v-slot="{ invalid,passes }">
        <div class="form-group row">
          <div class="col-12">
            <v-validate rules="required" name="about" v-slot="{ errors,classes }">
              <textarea
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                name="about"
                cols="30"
                rows="5"
                v-model.trim="about"
              ></textarea>
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
        </div>
        <div class="row">
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
      about: "",
      isLoading: false
    };
  },
  mounted() {
    this.getAbout();
  },
  methods: {
    save() {
      this.isLoading = true;
      this.$persistClient("patch", "/site-features/about-us", {
        about: this.about
      }).then(()=>{
        this.$alert('success');
      })
      .finally(() => (this.isLoading = false));
    },
    getAbout() {
      this.isLoading = true;
      this.$persistClient("get", "/site-features/about-us")
        .then(res => {
          this.about = res.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>

<style>
</style>