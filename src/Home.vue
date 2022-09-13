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

import axios from "axios";
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
  mounted() {
    axios
      .get("/user/userinfo")
      .then((res) => {
        console.log(res);
        // console.log(res.data.id);
        this.id = res.data.id;
        console.log(this.id);
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>

<style>
.el-main {
  background-color: #f4f3f4;
  width: 100%;
  height: 2000px;
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}

.el-container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>