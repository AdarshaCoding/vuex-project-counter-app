import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {},
  mutations: {
    decrementCounter(state) {
      if (state.counter > 0) {
        state.counter--;
      }
    },
    incrementCounter(state) {
      state.counter++;
    },
  },
  actions: {},
  modules: {},
});
