<template>
  <div class="row" @mouseup="() => this.$store.commit('setMoveRect', false)">
    <Field />
    <Control />
  </div>
</template>

<script>
import Field from "./components/Field.vue";
import Control from "./components/Control.vue";

export default {
  name: "App",
  components: {
    Field,
    Control,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

.row {
  display: flex;
  flex-direction: row;
}
</style>
