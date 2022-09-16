<template>
  <div id="home">
    <top />
    <index />
  </div>
</template>

<script>
import top from "@/components/Rank/top.vue";
import index from "@/components/Rank/index";
export default {
  name: "Home",
  data() {
    return {
      id: "",
    };
  },
  components: {
    top,
    index,
  },
  mounted() {},
};
</script>

<style>
#home {
  padding-top: 60px;
  overflow: hidden;
  height: calc(100vh - 124px);
  background-color: #fff;
}
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