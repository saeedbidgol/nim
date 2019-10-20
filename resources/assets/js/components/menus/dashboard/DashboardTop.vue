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
              <li
                :class="{'dropdown':true, 'margin-sides':true, 'has-notification':hasNotification}"
              >
                <a
                  href="javascript:void(0)"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div
                    class="notification-count"
                  >{{requestCreated.length>0 ? requestCreated.length:""}}</div>
                  <i class="fa fa-bell ringing"></i>
                </a>
                <ul class="dropdown-menu dropdown-lg dropdown-content">
                  <li class="slimscroll dropdown-notifications hover">
                    <ul class="list-unstyled dropdown-oc">
                      <li class="hover" v-for="request in requestCreated" :key="request.id">
                        <router-link to="/repair-requests">
                          <span class="notification-info">
                            <b style="display:block;font-size: 16px;">{{request.user.full_name}}</b>
                            <p>{{request.customer_description | excpert(40)}}</p>
                            <small
                              class="notification-date"
                              style="display:block"
                            >{{$getJalaliDateTime(request.created_at)}}</small>
                          </span>
                          <div class="request-image"></div>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="dropdown user-dropdown margin-sides">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="/images/svg/user.svg" alt class />
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <router-link to="/users/profile">پروفایل</router-link>
                  </li>
                  <li>
                    <a href data-toggle="modal" data-target="#change-password-modal">تغییر رمز عبور</a>
                  </li>

                  <li role="separator" class="divider"></li>

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
    <!-- <modal id="change-password-modal" title="تغییر رمز عبور" :isLoading="isLoading">
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
    </modal> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileData: "",
      request: {},
      requestCreated: [],
      password: {},
      groupWorks: [],
      groups: [],
      subGroups: [],
      isLoading: false
    };
  },
  filters: {
    excpert(value, maxLength) {
      if (value.length < maxLength) return value;
      return value.substring(0, maxLength) + " ...";
    }
  },
  computed: {
    hasNotification() {
      return this.requestCreated.length > 0;
    }
  },
  methods: {
    getSubGroups(group) {
      if (!group) return;
      this.subGroups = this.groupWorks.filter(i => i.group_id == group);
    },
    getGroupWorks() {
      this.isLoading = true;
      this.$persistClient("get", "/group-works/tree")
        .then(res => {
          this.groupWorks = res.data;
          this.groups = this.groupWorks.filter(i => i.group_id == 0);
        })
        .finally(() => (this.isLoading = false));
    },
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
    },
    getRequests() {
      this.$persistClient("get", "/requests").then(res => {
        this.requestCreated = res.data;
      });
    },
    playNotification() {
      try {
        var audio = new Audio("/sounds/alert.mp3");
        audio.play();
      } catch (error) {
        console.log("error:", error);
      }
    },
    createRequest(request) {
      this.requestCreated.unshift(request);
      this.playNotification();
    },
    setRequestFile(e) {
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
      this.request.file = files[0];
    },
    sendRequest() {
      this.$refs.request.validate().then(result => {
        if (result) {
          let formData = new FormData();
          for (var key in this.request) {
            if (this.request[key] != null)
              formData.append(key, this.request[key]);
          }
          this.isLoading = true;
          this.$persistClient(
            "post",
            `/requests/users/${this.$user.id}`,
            formData
          )
            .then(() => {
              this.$alert("success");
              $("#send-request-modal").modal("hide");
              this.request = {};
              this.fileData = "";
              this.$refs.request.reset();
            })
            .finally(() => (this.isLoading = false));
        }
      });
    }
  }
};
</script>

<style>
</style>
