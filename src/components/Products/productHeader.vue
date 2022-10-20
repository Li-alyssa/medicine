<template>
  <div class="breadcrumb-header">
    <div class="breadcrumb">
      <router-link to="/goods" class="breadcrumb-item">品种</router-link>
      <div class="breadcrumb-icon"></div>
      <div class="breadcrumb-item">{{ $route.params.name }}</div>
    </div>
  </div>
</template>

<script scoped>
export default {
  data() {
    return {
      titleName: "",
    };
  },
};
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

@media screen and (max-width: 850px) {
  .breadcrumb-header {
    /* width: 100vmin; */
    display: none;
  }
}

@media screen and (min-width: 850px) and (max-width: 1250px) {
  .breadcrumb-header {
    width: 80vmin;
  }
}
</style>