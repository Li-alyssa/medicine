<template>
  <div class="top-bg">
    <div class="input-container">
      <div class="select-wrap">
        <input placeholder="药品搜索" class="input" />
        <div class="search">搜索</div>
      </div>
    </div>
    <div class="suggest">
      热门搜索
      <router-link to="/variety/:id" class="tags">谢谢谢谢</router-link>
    </div>
    <div class="bottom-container">
      <div class="title-container">
        <div class="title-border">
          <div>
            <span>中药大品种科技竞争力排行榜</span>
            <span>RANKIINGS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-bg {
  position: relative;
  background: url(https://www.shanghairanking.cn/_nuxt/img/bj1.51928e3.jpg);
  background-size: cover;
  height: 250px;
  padding-top: 130px;
}

.input-container {
  display: flex;
  align-items: center;
  background-color: rgba(96, 110, 231, 0.6);
  width: 660px;
  height: 80px;
  border-radius: 8px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

.select-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input {
  height: 55px;
  width: 550px;
  margin-left: 12px;
  padding: 0 10px;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 16px;
}
.input:focus {
  outline: none;
}
.search {
  font-size: 18px;
  color: #fff;
  letter-spacing: 0;
  text-align: center;
  padding: 10px 15px;
  margin-left: 3px;
  cursor: pointer;
}

.suggest {
  height: 34px;
  overflow: hidden;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}

.suggest .tags {
  height: 20px;
  overflow: hidden;
  display: inline-block;
  padding: 7px 10px;
  border-radius: 4px;
  background-color: #123456;
  color: #fff;
  margin-left: 15px;
}

.bottom-container {
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
}

.title-container {
  height: 36px;
  padding-top: 24px;
  width: 1070px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-radius: 8px 8px 0 0;
  margin-right: auto;
  margin-left: auto;
}
.title-border {
  border-bottom: 1px solid #d7d7d7;
  overflow: hidden;
  height: 32px;
  line-height: 32px;
}
.title-container div span:first-child {
  float: left;
  font-size: 24px;
  color: #333;
  letter-spacing: 0;
}
.title-container div span:last-child {
  float: right;
  margin-left: 18px;
  font-size: 18px;
  color: #aeaeae;
  letter-spacing: 0;
}
</style>