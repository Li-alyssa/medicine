<template>
  <div id="app">
    <el-container>
      <Header v-show="$route.meta.show" />
      <el-main>
        <router-view> </router-view>
      </el-main>
      <Footer v-show="$route.meta.show" />
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.el-main {
  background-color: #f4f3f4;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}

.el-container {
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
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
