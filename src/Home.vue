<template>
  <div id="home">首页</div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      id: "",
    };
  },

  mounted() {},
};
</script>

<style>
#home {
  padding-top: 60px;
  overflow: hidden;
  display: flex;
  height: calc(100vh - 124px);
  justify-content: center;
  align-items: center;
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