<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">داشبورد</h3>
    </div>
    <div class="card card-white">
      <div class="alert alert-success" role="alert">
        <strong>{{$user.roles[0].name}}</strong> محترم به سامانه خوش آمدید.
      </div>
    </div>
    <loading :is-loading="isLoading" :card="false" :card-white="false" v-can:view="'dashboard_info'">
      <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6">
          <div class="card card-white stats-widget">
            <div class="card-body">
              <div class="float-left">
                <span class="stats-number">{{$ENTPN(info.total)}}</span>
                <p class="stats-info">ثبت شده</p>
              </div>
              <div class="float-right">
                <i class="fas fa-save text-primary stats-icon primary"></i>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6">
          <div class="card card-white stats-widget">
            <div class="card-body">
              <div class="float-left">
                <span class="stats-number">{{$ENTPN(info.referd)}}</span>
                <p class="stats-info">در حال بررسی</p>
              </div>
              <div class="float-right">
                <i class="fas fa-clock stats-icon text-warning warning"></i>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6">
          <div class="card card-white stats-widget">
            <div class="card-body">
              <div class="float-left">
                <span class="stats-number">{{$ENTPN(info.done)}}</span>
                <p class="stats-info">انجام شده</p>
              </div>
              <div class="float-right">
                <i class="fas fa-smile stats-icon text-success success"></i>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-6 col-md-6">
          <div class="card card-white stats-widget">
            <div class="card-body">
              <div class="float-left">
                <span class="stats-number">{{$ENTPN(info.rejected)}}</span>
                <p class="stats-info">رد شده</p>
              </div>
              <div class="float-right">
                <i class="fas fa-frown stats-icon text-danger danger"></i>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      info: [],
      requestsStatus: ["ثبت", "ارجاع به کارشناس", "رد", "بازگشتی", "انجام شده"]
    };
  },
  mounted() {
    this.getDashboardInfo();
  },
  methods: {
    getDashboardInfo() {
      this.isLoading = true;
      this.$persistClient("get", "dashboard/info")
        .then(result => {
          this.info = result.data;
        })
        .finally(() => (this.isLoading = false));
    }
  }
};
</script>
