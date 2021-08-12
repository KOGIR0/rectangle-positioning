<template>
  <MouseControl
    id="center-control"
    :onDrag="MoveRectangle"
    :onMouseDown="MouseDown"
  />
</template>

<script>
import MouseControl from "./MouseControl.vue";

export default {
  name: "CenterControl",
  components: {
    MouseControl,
  },
  methods: {
    MouseDown(e) {
      // offset from the center of control rectangle
      let mouseOffsetX =
        e.pageX - this.$store.state.left - this.$store.state.width / 2;
      let mouseOffsetY =
        e.pageY - this.$store.state.top - this.$store.state.height / 2;
      this.$store.commit("setOffset", {
        offsetX: mouseOffsetX,
        offsetY: mouseOffsetY,
      });
    },
    MoveRectangle(e) {
      this.$store.commit(
        "setTop",
        e.pageY - this.$store.state.offsetY - this.$store.state.height / 2
      );
      this.$store.commit(
        "setLeft",
        e.pageX - this.$store.state.offsetX - this.$store.state.width / 2
      );
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:math';
@import "../../styles/styles.scss";

#center-control {
  position: absolute;
  top: 50% - math.div($control-rect-height, 2);
  left: 50% - math.div($control-rect-width, 2);
  background-color: $control-bc;
  width: $control-rect-width;
  height: $control-rect-height;
}
</style>
