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
  mounted() {
    this.saveFieldSize();
  },
  methods: {
    saveFieldSize() {
      this.$store.commit("setFieldSize", {
        fieldTop: this.$refs.field.offsetTop,
        fieldLeft: this.$refs.field.offsetLeft,
        fieldWidth: this.$refs.field.offsetLeft + this.$refs.field.offsetWidth,
        fieldHeight: this.$refs.field.offsetTop + this.$refs.field.offsetHeight,
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
