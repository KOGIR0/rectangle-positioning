<template>
  <MouseControl
    id="right-width"
    :onDrag="DragProcess"
    :onMouseDown="MouseDown"
  />
</template>

<script>
import MouseControl from "./MouseControl.vue";

export default {
  name: "RightControl",
  components: {
    MouseControl,
  },
  methods: {
    MouseDown(e) {
      this.$store.commit("setOffset", {
        offsetX: e.pageX - this.$store.state.left - this.$store.state.width,
        offsetY: e.pageY - this.$store.state.top - this.$store.state.height / 2,
      });
    },
    DragProcess(e) {
      let newWidth =
        e.pageX - this.$store.state.offsetX - this.$store.state.left;
      this.$store.commit("setWidth", newWidth);
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:math';
@import "../../styles/styles.scss";

#right-width {
  position: absolute;
  top: 50% - math.div($control-rect-height, 2);
  left: 100% - math.div($control-rect-width, 2);
  background-color: $control-bc;
  width: $control-rect-width;
  height: $control-rect-height;
}
</style>
