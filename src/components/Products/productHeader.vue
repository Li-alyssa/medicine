<template>
  <div class="breadcrumb-header">
    <div class="breadcrumb">
      <router-link to="/variety" class="breadcrumb-item">品种</router-link>
      <div class="breadcrumb-icon"></div>
      <div class="breadcrumb-item">安康欣胶囊</div>
    </div>
  </div>
</template>

<script scoped>
export default {};
</script>

<style>
.breadcrumb-header {
  width: 1180px;
  margin-right: auto;
  margin-left: auto;
}

.breadcrumb {
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 50px;
}

.breadcrumb-item {
  white-space: nowrap;
  font-size: 16px;
  color: #8d8b8d;
  font-family: PingFangSC-Regular;
  display: inline-block;
}
.breadcrumb-icon {
  display: inline-block;
  vertical-align: middle;
  width: 12px;
  height: 12px;
  margin-right: 5px;
  background-image: url(/src/assets/箭头.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>