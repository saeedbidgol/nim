<template>
  <div>
    <div class="page-header">
      <nav class="navbar navbar-default bgc85">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <div class="logo-sm">
              <a href="javascript:void(0)" id="sidebar-toggle-button">
                <i class="fa fa-bars"></i>
              </a>
              <a class="logo-box" href="/">
                <span>نیم رخ بافت</span>
              </a>
            </div>
            <button
              type="button"
              class="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <i class="fa fa-angle-down"></i>
            </button>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <a href="javascript:void(0)" id="collapsed-sidebar-toggle-button">
                  <i class="fa fa-bars"></i>
                </a>
              </li>
            </ul>
            <ul class="nav navbar-right navbar-nav">
              <li class="dropdown user-dropdown margin-sides">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/uploads/svg/user.svg" alt class />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a href data-toggle="modal" data-target="#change-password-modal">تغییر رمز عبور</a>
                  </li>
                  <li>
                    <a href="#" @click="logout()">
                      <i class="fas fa-power-off mr0"></i> خروج
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </div>
    <modal id="change-password-modal" title="تغییر رمز عبور" :isLoading="isLoading">
      <div slot="body">
        <v-validate-observer tag="form" ref="changePassword" v-slot="{ invalid }">
          <div class="form-group row">
            <div class="col-12">
              <label for="old-password" class="col-form-label">رمز عبور فعلی:</label>
              <v-validate rules="required" name="current_password" v-slot="{ errors,classes }">
                <input
                  type="password"
                  class="form-control"
                  name="old-password"
                  id="old-password"
                  v-model="password.current_password"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </v-validate>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label for="new-password" class="col-form-label">رمز عبور جدید:</label>
              <v-validate rules="required" name="new_password" v-slot="{ errors,classes }">
                <input
                  type="password"
                  class="form-control"
                  name="new-password"
                  id="new-password"
                  v-model="password.password"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </v-validate>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-12">
              <label for="re-new-password" class="col-form-label">تکرار رمز عبور جدید:</label>
              <v-validate rules="required" name="confirm_password" v-slot="{ errors,classes }">
                <input
                  type="password"
                  class="form-control"
                  name="re-new-password"
                  id="re-new-password"
                  v-model="password.password_confirmation"
                />
                <span class="invalid-feedback">{{ errors[0] }}</span>
              </v-validate>
            </div>
          </div>
        </v-validate-observer>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">لغو</button>
        <button type="button" class="btn btn-primary" @click="changePassword">ارسال</button>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: {},
      isLoading: false
    };
  },
  methods: {
    changePassword() {
      this.$refs.changePassword.validate().then(result => {
        if (result) {
          this.isLoading = true;
          this.$persistClient(
            "patch",
            `/users/${this.$user.id}/password`,
            this.password
          )
            .then(() => {
              this.$alert("success");
              this.password = {};
              this.$refs.changePassword.reset();
              $("#change-password-modal").modal("hide");
            })
            .finally(() => (this.isLoading = false));
        }
      });
    },
    logout() {
      document.getElementById("logout-form").submit();
    }
  }
};
</script>

<style>
</style>
