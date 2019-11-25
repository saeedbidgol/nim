<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true"
  >
    <div
      :class="{'modal-dialog': true, 'modal-lg':modalLg,'modal-dialog-centered':true, 'modal-sm':modalSm}"
      role="document"
    >
      <div class="modal-content">
        <div class="shadow"></div>
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            {{ title }}
          </button>
          <h5 class="modal-title" id="exampleModalLongTitle"></h5>
          
        </div>
        <loading :is-loading="isLoading">
          <div class="modal-body"> 
            <slot name="body"></slot>
          </div>
          <div class="modal-footer" :class="{'no-modal-footer':!this.$slots['footer']}">
            <slot name="footer"></slot>
          </div>
        </loading>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    id: String,
    title: String,
    isLoading: Boolean,
    modalLg: Boolean,
    modalSm: Boolean
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.no-modal-footer {
  border-top: 0px solid #e5e5e5 !important;
}
.card{
  border: unset !important;
  box-shadow: unset !important;
}
</style>