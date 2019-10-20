
<template>
  <li :class="{'last-item':item.vehicle_name}">
    <div>
      <i
        @click="toggle"
        v-if="isFolder"
        :class="{'fa':true, 'fa-plus': !isOpen,  'fa-minus': isOpen}"
        aria-hidden="true"
      ></i>
      <p-check
          type="checkbox"
          :value="item.moduleID"
          name="vehicle"
          @click.native="check($event,item.id,item.checkType)"
          :checked="item.checked"
          class="p-icon p-plain"
          color="info-o"
        >
          <i slot="extra" class="icon fa fa-check"></i>
        </p-check>
      <span :id="item.id" :class="{'name': true}" @click="toggle">{{  item.name }}</span>
    </div>
    <ul v-show="isOpen" v-if="isFolder">
      <PermissionTreeItems class="item" v-for="(child, index) in item.children" :key="index" :item="child"></PermissionTreeItems>
    </ul>
  </li>
</template>

<script>
export default {
  name: "PermissionTreeItems",
  props: {
    item: Object
  },
  data() {
    return {
      isOpen: false
    };
  },
  mounted() {},
  computed: {
    isFolder: function() {
      return this.item.children && this.item.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    check: function(e,id,type) {
      let data = {
        id: id,
        checked : e.target.checked,
        type: type
      }
      this.$root.$emit('treeCheck', data);
    }

  },
  beforeDestroy() {}
};
</script>
<style scoped>
ul {
  list-style: none;
}
.last-item .name {
  font-family: tahoma;
}
li ul {
  padding-right: 15px;
}
li {
  line-height: 30px;
}
i.icon.fa.fa-check {
  text-indent: 3px;
}
</style>
