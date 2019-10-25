<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">تعریف کاربران</h3>
    </div>
    <loading :is-loading="isLoading">
      <v-validate-observer tag="form" ref="users" v-slot="{ invalid, passes }">
        <div class="row">
          <div class="col-3 form-group">
            <label for="name" class="control-label">نام:</label>
            <v-validate rules="required" name="name" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="user.name"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3 form-group">
            <label for="family" class="control-label">نام خانوادگی:</label>
            <v-validate rules="required" name="family" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="user.family"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3 form-group">
            <label for="mobile" class="control-label">تلفن همراه:</label>
            <v-validate rules="required" name="mobile" v-slot="{ errors,classes }">
              <input
                type="number"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="user.mobile"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3 form-group">
            <label for="email" class="control-label">نام کاربری:</label>
            <v-validate rules="required" name="username" v-slot="{ errors,classes }">
              <input
                type="text"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="user.username"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
        </div>
        <div class="row">
          <div class="col-3" v-if="!user.id">
            <label for="password" class="control-label">رمزعبور:</label>
            <v-validate rules="required" name="password" v-slot="{ errors,classes }">
              <input
                type="password"
                :class="{'form-control':true,'is-invalid':classes.invalid}"
                v-model.trim="user.password"
              />
              <span class="invalid-feedback">{{ errors[0] }}</span>
            </v-validate>
          </div>
          <div class="col-3 pull-left" style="margin-top:30px;">
            <button
              type="button"
              class="btn btn-primary"
              @click="passes(updateUser)"
              v-if="user.id"
            >ثبت</button>
            <button type="button" class="btn btn-primary" @click="passes(save)" v-else>ثبت</button>
          </div>
        </div>
      </v-validate-observer>
    </loading>
    <loading :is-loading="isLoading">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ردیف</th>
              <th>نام</th>
              <th>نام خانوادگی</th>
              <th>تلفن همراه</th>
              <th>نام کاربری</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user,index) in users" :key="user.id">
              <th scope="row">{{index+1}}</th>
              <td>{{user.name}}</td>
              <td>{{user.family}}</td>
              <td>{{user.mobile}}</td>
              <td>{{user.username}}</td>
              <td>
                <button class="btn btn-info" @click="editUser(user)">ویرایش</button>
                <button class="btn btn-danger" @click="deleteUser(user)">حذف</button>
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
      isLoading: false,
      user: {},
      users: []
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    editUser(user) {
      this.user = user;
    },
    deleteUser(user) {
      this.$alert("question").then(result => {
        if (result.value) {
          this.isLoading = true;
          this.$persistClient("delete", `/users/${user.id}`)
            .then(() => {
              this.$alert("success");
              this.getUsers();
            })
            .finally(() => (this.isLoading = false));
        }
      });
    },
    updateUser() {
      this.isLoading = true;
      this.$persistClient("patch", `/users/${this.user.id}`, this.user)
        .then(() => {
          this.$alert("success");
          this.getUsers();
          this.user = {};
          this.$refs.users.reset();
        })
        .finally(() => (this.isLoading = false));
    },
    getUsers() {
      this.isLoading = true;
      this.$persistClient("get", "/users")
        .then(res => {
          this.users = res.data;
        })
        .finally(() => (this.isLoading = false));
    },
    save() {
      this.isLoading = true;
      this.$persistClient("post", "/users", this.user)
        .then(() => {
          this.$alert("success");
          this.getUsers();
          this.user = {};
          this.$refs.users.reset();
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