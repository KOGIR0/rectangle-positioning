<template>
  <MouseControl
    id="left-control"
    :onDrag="LeftDragProcess"
    :onMouseDown="MouseDown"
  />
</template>

<script>
import MouseControl from "./MouseControl.vue";

export default {
  name: "LeftControl",
  components: {
    MouseControl,
  },
  methods: {
    MouseDown(e) {
      // offset from the center of control rect
      let mouseOffsetX = e.pageX - this.$store.state.left;
      let mouseOffsetY =
        e.pageY - this.$store.state.top - this.$store.state.height / 2;
      this.$store.commit("setOffset", {
        offsetX: mouseOffsetX,
        offsetY: mouseOffsetY,
      });
    },
    LeftDragProcess(e) {
      this.$store.commit(
        "setWidth",
        this.$store.state.left +
          this.$store.state.offsetX +
          this.$store.state.width -
          e.pageX
      );
      this.$store.commit("setLeft", e.pageX - this.$store.state.offsetX);
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:math';
@import "../../styles/styles.scss";

#left-control {
  position: absolute;
  top: 50% - math.div($control-rect-height, 2);
  left: math.div(-$control-rect-width, 2);
  width: $control-rect-width;
  height: $control-rect-height;
  background-color: $control-bc;
}
</style>
