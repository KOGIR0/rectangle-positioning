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
      this.$store.commit("setOffset", {
        offsetX: e.pageX - this.$store.state.left - this.$store.state.width / 2,
        offsetY: e.pageY - this.$store.state.top,
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
@import "../../styles/styles.scss";

#top-control {
  position: absolute;
  top: -$control-rect-height / 2;
  left: 50% - $control-rect-width / 2;
  width: $control-rect-width;
  height: $control-rect-height;
  background-color: $control-bc;
}
</style>
