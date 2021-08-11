<template>
  <div id="rectangle" ref="rectangle" :style="style">
    <LeftControl />
    <TopControl />
    <CenterControl />
    <RightControl />
    <BottomControl />
  </div>
</template>

<script>
import CenterControl from "./mouseControls/CenterControl.vue";
import LeftControl from "./mouseControls/LeftControl.vue";
import RightControl from "./mouseControls/RightControl.vue";
import BottomControl from "./mouseControls/BottomControl.vue";
import TopControl from "./mouseControls/TopControl.vue";

export default {
  name: "Rectangle",
  computed: {
    style: function () {
      return {
        width: this.$store.state.width + "px",
        height: this.$store.state.height + "px",
        top: this.$store.state.top + "px",
        left: this.$store.state.left + "px",
      };
    },
  },
  components: {
    CenterControl,
    LeftControl,
    RightControl,
    BottomControl,
    TopControl,
  },
};
</script>

<style scoped lang="scss">
@import "../styles/styles.scss";

#rectangle {
  position: absolute;
  width: $rect-width;
  height: 100px;
  background-color: aqua;
}
</style>
