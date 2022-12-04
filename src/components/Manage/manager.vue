<template>
  <div id="manage-container">
    <div class="container">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        router
      >
        <el-menu-item index="/manage/companyManager">企业管理</el-menu-item>
        <el-menu-item index="/manage/goodsManager">产品管理</el-menu-item>
        <el-menu-item index="/manage/fileManager">上传管理</el-menu-item>
        <!-- <el-menu-item index="/index/menu1">富文本编辑</el-menu-item> -->
      </el-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </div>
  </div>
</template>

<script>
export default {
  name: "manager",

  data() {
    return {
      activeIndex: "/manage/companyManager",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
    },
  },
};
</script>

<style>
#manage-container {
  overflow: hidden;
  margin-top: 60px;
}
#manage-container .container {
  width: 1180px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border-radius: 10px;
}
.el-menu {
  align-items: center; /* 垂直居中 */
  /* justify-content: center; 水平居中 */
}
</style>