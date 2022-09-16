<template>
  <div class="rank">
    <div class="rank-container">
      <div class="rank-item">
        <div class="rank-item-top">
          <div class="rank-item-left">
            <router-link to="/ProvinceRank">
              <div class="rank-item-title">
                <span>区域排名</span>
              </div>
              <div class="rank-item-subtitle">quyupaiming</div>
            </router-link>
            <div class="rank-item-introduction">
              -治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！
            </div>
          </div>
          <div class="rank-item-right">
            <img
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              alt=""
            />
          </div>
        </div>
        <router-link to="/ProvinceRank">
          <div class="check-rank">
            <span>查看排名 ></span>
          </div>
        </router-link>
        <div class="rank-item-blur" style="display: none">
          <div class="rank-item-bcur-text">
            <a href="">
              <span>区域排名</span>
            </a>
          </div>
        </div>
      </div>
      <div class="rank-item">
        <div class="rank-item-top">
          <div class="rank-item-left">
            <a href="">
              <div class="rank-item-title">
                <span>治疗领域排名</span>
              </div>
              <div class="rank-item-subtitle">zhiliaolingyupaim</div>
            </a>
            <div class="rank-item-introduction">
              -治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！-治得好！治的妙！治的呱呱叫！
            </div>
          </div>
          <div class="rank-item-right">
            <img
              src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              alt=""
            />
          </div>
        </div>
        <a href="">
          <div class="check-rank">
            <span>查看排名 ></span>
          </div>
        </a>
        <div class="rank-item-blur" style="display: none">
          <div class="rank-item-bcur-text">
            <a href="">
              <span>区域排名</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.rank {
  margin-top: 60px;
}

.rank-container {
  margin-top: 75px;
  padding-bottom: 20px;
}

.rank-item {
  width: 57%;
  background-color: #fff;
  margin: 20px auto 0;
  border-radius: 4px;
  padding: 30px 40px;
}

.rank-item-top {
  display: flex;
  justify-content: space-between;
}
.rank-item-left {
  width: 68%;
  /* background-color: red; */
}
.rank-item-right {
  width: 32%;
  /* background-color: yellow; */
}
.rank-item-introduction {
  width: 95%;
  font-size: 14px;
  font-family: PingFang SC;
  color: #605e60;
  margin-top: 16px;
  line-height: 24px;
  /* background-color: red; */
}

.rank-item-title {
  font-size: 28px;
  color: #312f31;
  letter-spacing: 0;
  font-family: PingFang SC;
}
.rank-item-subtitle {
  font-size: 16px;
  font-family: PingFang SC;
  color: #8d8b8d;
  margin-top: 4px;
}

.rank-item-title:hover {
  color: #409eff;
}

.rank-item-right img {
  width: 100%;
  height: 200px;
  border-radius: 10px;
}
.check-rank:hover {
  background-color: #409eff;
}
.check-rank {
  padding-left: 10px;
  width: 90px;
  height: 36px;
  /* background-color: red; */
  border-radius: 4px;
  display: flex;
  color: #605e60;
  justify-content: space-between;
  border: 1px solid #aeaeae;
  align-items: center;
  cursor: pointer;
}

.rank-item-blur {
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.rank-item-bcur-text {
  margin-top: 36px;
  box-sizing: border-box;
  flex: 0 0 20%;
  color: #312f31;
  font-family: PingFang SC;
  font-size: 16px;
  line-height: 22px;
}
.rank-item-bcur-text a:hover {
  color: #409eff;
}
</style>  