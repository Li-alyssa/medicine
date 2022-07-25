<template>
  <div class="main">
    <div class="title">
      <div class="left"></div>
      <span>药品排名</span>
    </div>
    <div class="ranking-main">
      <div class="container-one">
        <div class="rank-latest">
          <div class="rank-lates-rank">
            <div class="icon-latest">
              <img
                src="https://www.shanghairanking.cn/_nuxt/img/left_ornaments_gold.1421cac.svg"
                alt=""
              />
              <span>1</span>
              <img
                src="https://www.shanghairanking.cn/_nuxt/img/right_ornaments_gold.2482357.svg"
                alt=""
              />
            </div>
            <div class="category-latest">
              <span>总排行榜</span>
            </div>
          </div>
        </div>
        <div class="rank-line">
          <div class="line-hist">
            <div class="item-rank">
              <div class="rank">1</div>
              <div class="round"></div>
              <div class="year">2018</div>
            </div>
            <div class="item-rank">
              <div class="rank">1</div>
              <div class="round"></div>
              <div class="year">2019</div>
            </div>
            <div class="item-rank">
              <div class="rank">1</div>
              <div class="round"></div>
              <div class="year">2020</div>
            </div>
            <div class="item-rank">
              <div class="rank">1</div>
              <div class="round"></div>
              <div class="year">2021</div>
            </div>
            <div class="item-rank">
              <div class="rank">1</div>
              <div class="round-last"></div>
              <div class="year">2022</div>
            </div>
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
.main {
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px 16px;
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;
  margin-left: -16px;
  pointer-events: none;
}

.left {
  position: absolute;
  top: 0;
  left: 14px;
  width: 36px;
  height: 4px;
  background-color: #409eff;
  border-radius: 0 0 2px 2px;
}

.title span {
  margin-left: 12px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
}

.ranking-main {
  display: flex;
  align-items: center;
  position: relative;
}

.container-one {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  height: 100px;
}

.rank-latest {
  width: 246px;
  height: 68px;
  padding-top: 17px;
  padding-bottom: 15px;
  background-image: linear-gradient(
    1turn,
    rgba(10, 149, 214, 0.03),
    rgba(61, 10, 214, 0.08)
  );
  border-radius: 4px;
}

.rank-lates-rank {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon-latest {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-latest img {
  height: 35px;
}
.icon-latest span {
  font-family: PingFang SC;
  font-size: 32px;
  color: rgb(242, 209, 84);
  font-weight: 500;
  margin: 0 4px;
  flex-grow: 0;
  flex-shrink: 0;
}

.category-latest {
  display: flex;
  justify-content: center;
  align-items: center;
}

.category-latest span {
  margin-top: 4px;
}

.rank-line {
  position: relative;
  background-color: #f8f8f8;
  border-radius: 4px;
  width: 446px;
  height: calc(100% - 38px);
  padding: 19px 21px;
}

.rank-line:before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  font-size: 0;
  overflow: hidden;
  display: block;
  border-color: transparent #f8f8f8 transparent transparent;
  border-style: solid dashed dashed;
  border-width: 15px;
  left: -6%;
  top: 35%;
}

.line-hist {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.item-rank {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 34px;
  position: relative;
  cursor: pointer;
}

.rank {
  height: 25px;
  line-height: 25px;
  font-family: PingFang SC;
  font-size: 18px;
  color: #312f31;
  font-weight: 500;
  position: absolute;
  white-space: nowrap;
}
.round {
  border: 1px solid #409eff;
  background-color: #fff;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: relative;
  margin: 30px 0 5px;
}
.round-last {
  border: 1px solid #409eff;
  background-color: #fff;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: relative;
  margin: 30px 0 5px;
}
.round:after {
  position: absolute;
  content: "";
  left: 9px;
  top: 2px;
  height: 1px;
  width: 91px;
  border-bottom: 2px solid #d7d7d7;
}
.year {
  font-family: PingFang SC;
  font-size: 15px;
  color: #605e60;
}
</style>