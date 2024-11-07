<template>
  <div class="gantt-leftbar">
    <div
      class="gantt-leftbar-item gantt-block-top-space"
      :style="{ height: topSpace + 'px' }"
    ></div>
    <div
      class="gantt-leftbar-item"
      v-for="(data, index) in showDatas"
      :key="dataKey ? data[dataKey] : index"
      :style="cellHeightStyle(data)"
    >
      <slot :data="data">
        <div class="gantt-leftbar-defalutItem">need slot</div>
      </slot>
    </div>
  </div>
</template>

<script>
import dr from "../dynamic-render.js";
export default {
  name: "LeftBar",
  mixins: [dr],
  props: {
    dataKey: String,
    datas: {
      type: Array,
      required: true
    }
  },
  computed: {
    cellHeightStyle() {
      return function(data) {
        let height = 0;
        if (data.cellHeight > 0) {
          height = data.cellHeight;
        } else {
          height = this.cellHeight;
        }
        return {
          height: `${height}px`
        };
      };
    }
  }
};
</script>
