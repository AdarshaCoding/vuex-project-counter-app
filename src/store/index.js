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
    incrementCounter(state, randomNumber) {
      console.log(randomNumber);
      state.counter += randomNumber;
    },
  },
  actions: {
    incrementCounter({ commit }) {
      const generateRandomNumber = async () => {
        const response = await fetch(
          "https://www.randomnumberapi.com/api/v1.0/random?min=1&max=9&count=1"
        );
        const data = await response.json();

        commit("incrementCounter", data[0]);
      };
      generateRandomNumber();
    },
  },
  modules: {},
});
