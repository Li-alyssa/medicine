<template>
  <div id="home">
    <el-container>
      <Header />
      <el-main>
        <router-view> </router-view>
      </el-main>
      <Footer />
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "Home",
  data() {
    return {
      id: "",
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {},
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
</style>