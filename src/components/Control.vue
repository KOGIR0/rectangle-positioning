<template>
  <div>
    <div>
      <div>Top</div>
      <input type="number" v-model="top" min="0" />
    </div>
    <div>
      <div>Left</div>
      <input type="number" v-model="left" min="0" />
    </div>
    <div>
      <div>Height</div>
      <input type="number" v-model="height" min="0" />
    </div>
    <div>
      <div>Width</div>
      <input type="number" v-model="width" min="0" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Control",
  computed: {
    top: {
      set(val) {
        this.$store.commit("setTop", val);
      },
      get() {
        return this.$store.state.top;
      },
    },
    left: {
      set(val) {
        this.$store.commit("setLeft", val);
      },
      get() {
        return this.$store.state.left;
      },
    },
    width: {
      set(val) {
        this.$store.commit("setWidth", val);
      },
      get() {
        return this.$store.state.width;
      },
    },
    height: {
      set(val) {
        this.$store.commit("setHeight", val);
      },
      get() {
        return this.$store.state.height;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
