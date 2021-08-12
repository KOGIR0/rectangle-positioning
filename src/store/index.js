import { createStore } from "vuex";

export default createStore({
  state: {
    top: 100,
    left: 100,
    width: 100,
    height: 100,
    offsetX: 0,
    offsetY: 0,
    moveRect: false,
    fieldTop: 0,
    fieldLeft: 0,
    fieldWidth: 800,
    fieldHeight: 500,
  },
  mutations: {
    setFieldSize(state, payload) {
      state.fieldHeight = payload.fieldHeight;
      state.fieldWidth = payload.fieldWidth;
      state.fieldLeft = payload.fieldLeft;
      state.fieldTop = payload.fieldTop;
      if (state.left + state.width > state.fieldWidth) {
        state.left = state.fieldLeft;
      }
      if (state.top + state.height > state.fieldHeight) {
        state.top = state.fieldTop;
      }
    },
    setMoveRect(state, payload) {
      state.moveRect = payload;
    },
    setOffset(state, payload) {
      state.offsetX = payload.offsetX;
      state.offsetY = payload.offsetY;
    },
    setTop(state, payload) {
      if (
        payload > state.fieldTop &&
        payload + state.height < state.fieldHeight
      ) {
        state.top = payload;
      }
    },
    setLeft(state, payload) {
      if (
        payload > state.fieldLeft &&
        payload + state.width < state.fieldWidth
      ) {
        state.left = payload;
      }
    },
    setWidth(state, payload) {
      if (payload + state.left < state.fieldWidth) {
        state.width = payload;
      }
    },
    setHeight(state, payload) {
      if (payload + state.top < state.fieldHeight) {
        state.height = payload;
      }
    },
  },
  actions: {},
  modules: {},
});
