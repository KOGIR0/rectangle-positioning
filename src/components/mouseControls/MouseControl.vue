<template>
  <div
    id="position"
    @mousedown="AllowRectangleMove"
    @mouseup="BlockRectangleMove"
    @mouseleave="MoveRectangle"
    @mousemove="MoveRectangle"
    @dragstart="() => false"
  />
</template>

<script>
export default {
  props: ["onDrag", "onMouseDown"],
  name: "MouseControl",
  methods: {
    AllowRectangleMove: function (e) {
      this.$store.commit("setMoveRect", true);
      this.$props.onMouseDown(e);
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
