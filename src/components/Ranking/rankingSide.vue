<template>
  <div id="content-side">
    <div class="rank-table-box">
      <div class="title">
        <div></div>
        <span>排行榜侧边栏</span>
      </div>
      <div class="rank-table-line">
        <router-link to="/" class="rank-table-item">
          <span>总排行榜</span>
          <img
            src="https://www.shanghairanking.cn/_nuxt/img/arrow_right.955c17a.svg"
            alt=""
          />
        </router-link>
      </div>
      <div class="rank-table-line">
        <router-link to="/" class="rank-table-item">
          <span>功能排行榜</span>
          <img
            src="https://www.shanghairanking.cn/_nuxt/img/arrow_right.955c17a.svg"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#content-side {
  width: 280px;
}

.rank-table-box {
  width: 280px;
  background-color: #fff;
  border-radius: 4px;
}

.rank-table-box .title {
  height: 50px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
}

.rank-table-box .title div {
  width: 4px;
  height: 18px;
  background-color: #e5002d;
  border-radius: 0 2px 2px 0;
}
.rank-table-box .title span {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  line-height: 50px;
  color: #383638;
  padding-left: 12px;
}

.rank-table-box .rank-table-line:hover {
  background-color: #f9f9f9;
}

.rank-table-box .rank-table-line .rank-table-item {
  width: 250px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  margin: 0 auto;
}

.rank-table-box .rank-table-line .rank-table-item span {
  font-weight: 500;
  font-size: 14px;
  font-family: PingFang SC;
  color: #312f31;
}

.rank-table-box .rank-table-line .rank-table-item span:hover {
  color: #d60b0a;
}

.rank-table-box .rank-table-line .rank-table-item img {
  width: 14px;
}
</style>