<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">داشبورد</h3>
    </div>
    <div class="card card-white">
      <div class="alert alert-success" role="alert">به سامانه خوش آمدید</div>
    </div>
    <loading :is-loading="isLoading" :card="false" :card-white="false"></loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false
    };
  }
};
</script>
