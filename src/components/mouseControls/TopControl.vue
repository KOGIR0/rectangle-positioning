<template>
  <MouseControl
    id="top-control"
    :onDrag="DragProcess"
    :onMouseDown="MouseDown"
  />
</template>

<script>
import MouseControl from "../mouseControls/MouseControl.vue";

export default {
  name: "TopControl",
  components: {
    MouseControl,
  },
  methods: {
    MouseDown(e) {
      // offset from the center of control rectangle
      let mouseOffsetX =
        e.pageX - this.$store.state.left - this.$store.state.width / 2;
      let mouseOffsetY = e.pageY - this.$store.state.top;
      this.$store.commit("setOffset", {
        offsetX: mouseOffsetX,
        offsetY: mouseOffsetY,
      });
    },
    DragProcess(e) {
      this.$store.commit(
        "setHeight",
        this.$store.state.top +
          this.$store.state.offsetY +
          this.$store.state.height -
          e.pageY
      );
      this.$store.commit("setTop", e.pageY - this.$store.state.offsetY);
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:math';
@import "../../styles/styles.scss";

#top-control {
  position: absolute;
  top: math.div(-$control-rect-height, 2);
  left: 50% - math.div($control-rect-width, 2);
  width: $control-rect-width;
  height: $control-rect-height;
  background-color: $control-bc;
}
</style>
