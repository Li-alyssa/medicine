<template>
  <div class="search_container">
    <div class="search">
      <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
      <el-button type="danger">搜索</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      input: "",
    };
  },
};
</script>

<style scoped>
.search_container {
  background-color: #fff;
  padding: 40px 0 0;
}
@media screen and (max-width: 768px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-right: 15%;
    padding-left: 15%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1920px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-right: 20%;
    padding-left: 20%;
  }
}

@media screen and (min-width: 1920px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-right: 30%;
    padding-left: 30%;
  }
}
/* .search {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  padding-right: 30%;
  padding-left: 30%;
} */

.el-input /deep/ .el-input__inner {
  height: 43px;
  line-height: 43px;
  border: 1px solid #d7d7d7;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  color: #333;
  border-radius: 4px 0 0 4px;
  width: 100%;
  overflow: hidden;
}

.el-button {
  padding: 0 15px;
  font-size: 16px;
  background: #d60b0a;
  color: #fff;
  font-weight: 500;
  vertical-align: middle;
  border-radius: 0 4px 4px 0;
  height: 45px;
  width: 115px;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
}
</style>