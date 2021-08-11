<template>
  <div id="field" ref="field">
    <Rectangle />
  </div>
</template>

<script>
import Rectangle from "./Rectangle.vue";

export default {
  name: "Field",
  components: {
    Rectangle,
  },
  created() {
    window.addEventListener("resize", this.saveFieldSize);
  },
  unmounted() {
    window.removeEventListener("resize", this.saveFieldSize);
  },
  methods: {
    saveFieldSize() {
      this.$store.commit("setFieldSize", {
        fieldWidth: this.$refs.field.clientWidth,
        fieldHeight: this.$refs.field.clientHeight,
      });
    },
  },
};
</script>

<style scoped lang="scss">
#field {
  border: 1px solid black;
  width: 800px;
  height: 500px;
}
</style>
