<template>
  <MouseControl
    id="bottom-height"
    :onDrag="DragProcess"
    :onMouseDown="MouseDown"
  />
</template>

<script>
import MouseControl from "./MouseControl.vue";

export default {
  name: "BottomControl",
  components: {
    MouseControl,
  },
  methods: {
    MouseDown(e) {
      this.$store.commit("setOffset", {
        offsetX: e.pageX - this.$store.state.left - this.$store.state.width / 2,
        offsetY: e.pageY - this.$store.state.top - this.$store.state.height,
      });
    },
    DragProcess(e) {
      let newHeight =
        e.pageY - this.$store.state.offsetY - this.$store.state.top;
      this.$store.commit("setHeight", newHeight);
    },
  },
};
</script>

<style scoped lang="scss">
@use 'sass:math';
@import "../../styles/styles.scss";

#bottom-height {
  position: absolute;
  top: 100% - math.div($control-rect-height, 2);
  left: 50% - math.div($control-rect-width, 2);
  background-color: $control-bc;
  width: $control-rect-width;
  height: $control-rect-height;
}
</style>
