<template>
  <div
    id="position"
    @mousedown="AllowRectangleMove"
    @mouseup="BlockRectangleMove"
    @mouseleave="MoveRectangle"
    @mousemove="MoveRectangle"
    @dragstart="() => false"
    ref="mouseControl"
  />
</template>

<script>
export default {
  props: ["onDrag"],
  name: "MouseControl",
  methods: {
    AllowRectangleMove: function (e) {
      this.$store.commit("setMoveRect", true);
      console.log(this.$refs.mouseControl);
      // offset from the center of control rectangle
      let controlCenterPos = {
        x:
          this.$refs.mouseControl.offsetLeft +
          this.$refs.mouseControl.offsetWidth / 2 +
          this.$store.state.left,
        y:
          this.$refs.mouseControl.offsetTop +
          this.$refs.mouseControl.offsetHeight / 2 +
          this.$store.state.top,
      };
      let mouseOffsetX = e.pageX - controlCenterPos.x;
      let mouseOffsetY = e.pageY - controlCenterPos.y;
      this.$store.commit("setOffset", {
        offsetX: mouseOffsetX,
        offsetY: mouseOffsetY,
      });
    },
    BlockRectangleMove: function () {
      this.$store.commit("setMoveRect", false);
    },
    MoveRectangle: function (e) {
      if (this.$store.state.moveRect) {
        this.$props.onDrag(e);
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
