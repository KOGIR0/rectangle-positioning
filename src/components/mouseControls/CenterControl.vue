<template>
  <MouseControl
    id="position"
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
      this.$store.commit("setOffset", {
        offsetX: e.pageX - this.$store.state.left - this.$store.state.width / 2,
        offsetY: e.pageY - this.$store.state.top - this.$store.state.height / 2,
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

#position {
  position: absolute;
  top: 50% - math.div($control-rect-height, 2);
  left: 50% - math.div($control-rect-width, 2);
  background-color: $control-bc;
  width: $control-rect-width;
  height: $control-rect-height;
}
</style>
