<template>
  <div class="main">
    <div class="title">
      <div class="left"></div>
      <span>药品排名</span>
    </div>
    <div
      class="ranking-main"
      v-for="(rankInfo, index) in showHandleList"
      :key="index"
    >
      <div class="container-one">
        <div class="rank-latest">
          <div class="rank-lates-rank">
            <div class="icon-latest">
              <img style="width: 20px" src="@/assets/left_ornaments_gold.png" />
              <span>{{ rankInfo.best }}</span>
              <img
                style="width: 20px"
                src="@/assets/right_ornaments_gold.png"
                alt=""
              />
            </div>
            <div class="category-latest">
              <span>{{ rankInfo.name }}</span>
            </div>
          </div>
        </div>
        <div class="rank-line">
          <ul class="line-hist">
            <li
              class="item-rank"
              v-for="(rk, index) in rankInfo.list"
              :key="index"
            >
              <div class="rank">{{ rk.ranking }}</div>
              <div
                :class="
                  index !== rankInfo.list.length - 1 ? 'round ' : 'round-last '
                "
              ></div>
              <div class="year">{{ rk.year }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="show-more"
      v-if="rankList.length > 3"
      @click="showAll = !showAll"
    >
      {{ word }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // rankInfo: {},
      rankList: [],
      showAll: false,
    };
  },
  computed: {
    showHandleList() {
      if (this.showAll == false) {
        //收起状态-显示“展示”
        var showList = []; //定义⼀个空数组
        if (this.rankList.length > 3) {
          //控制显⽰前三个
          for (var i = 0; i < 3; i++) {
            showList.push(this.rankList[i]); //将数组的前3条存放到showList数组中
          }
        } else {
          showList = this.rankList; //个数足够显示，不需要再截取
        }
        return showList; //返回当前数组
      } else {
        // 展开状态-显示“收起”
        return this.rankList;
      }
    },
    word() {
      if (this.showAll == false) {
        //对⽂字进⾏处理
        return "展开";
      } else {
        return "收起";
      }
    },
  },

  methods: {
    async getProductRanking() {
      try {
        let result = await this.$API.reqGetProductRanking(
          this.$route.params.id
        );
        // console.log(result);
        this.rankList = result.response;
        // console.log(result.response);
        // this.rankInfo = result.response[0];
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getProductRanking();
  },
};
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
  margin-bottom: 10px;
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
  font-size: small;
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
  color: #fff;
}
.round-last {
  border: 1px solid #409eff;
  background-color: #409eff;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: relative;
  margin: 30px 0 5px;
}
.round:after {
  position: absolute;
  content: "";
  left: 35px;
  top: 2px;
  height: 1px;
  width: 50px;
  border-bottom: 2px solid #d7d7d7;
}
.year {
  font-family: PingFang SC;
  font-size: 15px;
  color: #605e60;
}

.show-more {
  text-align: center;
  cursor: pointer;
}
.show-more:hover {
  color: #409eff;
}
@media screen and (max-width: 850px) {
  .round:after {
    display: none;
  }

  .rank-latest {
    width: 25%;
  }

  .rank-line {
    width: 75%;
  }
}

@media screen and (max-width: 520px) {
  .rank-line {
    width: 75%;
    padding: 19px 0;
  }
  .rank {
    height: 25px;
    line-height: 25px;
    font-family: PingFang SC;
    font-size: 15px;
  }

  .year {
    font-size: 12px;
  }
  /* .category-latest {
    font-size: 12px;
  }
  .rank-latest {
    width: 25%;
    height: 100%;
  }
  .rank-line {
    width: 75%;
    height: 100%;
  } */
}

@media screen and (min-width: 850px) and (max-width: 1250px) {
}
</style>