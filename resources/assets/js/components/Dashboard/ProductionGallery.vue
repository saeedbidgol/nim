<template>
  <div>
    <div class="page-title">
      <h3 class="breadcrumb-header">گالری محصولات</h3>
    </div>
    <loading :is-loading="isLoading">
      <div class="k-rtl">
        <kendo-datasource
          ref="datasource"
          :transport-read="readData"
          :batch="true"
          :page-size="10"
          :schema-total="'total'"
          :schema-data="'data'"
          :server-paging="true"
          :server-sorting="true"
          :server-filtering="true"
        ></kendo-datasource>
        <kendo-grid
          id="grid"
          ref="grid"
          :data-source-ref="'datasource'"
          @databinding="onDataBinding"
          :resizable="true"
          :pageable="grid.pageable"
          :page="page"
          :height="400"
        >
          <kendo-grid-column :title="'ردیف'" :template="getTemplate" :width="60"></kendo-grid-column>
          <kendo-grid-column field="code" title="کد طرح"></kendo-grid-column>
          <kendo-grid-column :template="picTemplate" title="تصویر طرح" field="file_url"></kendo-grid-column>
          <kendo-grid-column field="name" title="نام طرح"></kendo-grid-column>
          <kendo-grid-column field="back_color" title="رنگ زمینه"></kendo-grid-column>
          <kendo-grid-column field="dimensions" title="ابعاد"></kendo-grid-column>
          <kendo-grid-column field="density" title="تراکم"></kendo-grid-column>
          <kendo-grid-column field="colors" title="تعداد رنگ"></kendo-grid-column>
          <kendo-grid-column field="colors" title="نمای دکوراسیون"></kendo-grid-column>
        </kendo-grid>
      </div>
    </loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      gpage: 1,
      record: 0,
      picTemplate: `
      <div class='col-md-12'>
      <img style="border-radius: 50%;" width='50' height='50' src="/uploads/#:file_url#">
      </div
      `
    };
  },
  methods: {
    readData(e) {
      this.isLoading = true;
      let url = "/products?";
      url += `page=${e.data.page}&pageSize=${e.data.pageSize}`;
      this.$persistClient("get", url)
        .then(res => {
          e.success(res.data);
        })
        .finally(() => (this.isLoading = false));
    },
    onDataBinding: function(ev) {
      this.record = (this.gpage - 1) * this.$refs.datasource.pageSize;
    },
    page: function(e) {
      this.gpage = e.page;
    },
    getTemplate: function() {
      return ++this.record;
    }
  }
};
</script>

<style>
</style>