<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #111;
  outline: none;
}

a,
button {
  cursor: pointer;
}

ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

img {
  border: 0;
}
</style>
