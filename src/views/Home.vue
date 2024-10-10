<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="counter-container">
      <div class="counter">
        <h1>{{ getCounter }}</h1>
      </div>
      <div class="buttons">
        <button @click="$store.commit('decrementCounter')">-</button>
        <button @click="$store.commit('incrementCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",

  computed: {
    getCounter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<style scoped lang="scss">
.counter-container {
  border: 1px solid black;
  width: 300px;
  height: 200px;
  margin: auto;

  .counter {
    font-size: 25px;
  }

  .buttons {
    button {
      width: 100px;
      padding: 2px;
      font-weight: bold;
      font-size: 30px;
      margin: 10px;
      cursor: pointer;
    }
  }
}
</style>
