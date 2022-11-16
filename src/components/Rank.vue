<template>
  <div class="rank">
    <div class="rank-container">
      <div
        class="rank-item"
        v-for="(item, index) in rankList"
        :key="item.listId"
      >
        <div class="rank-item-top">
          <div class="rank-item-left">
            <router-link
              :to="{
                path: `/${item.route}`,
                query: { listId: item.listId, value: item.value },
              }"
            >
              <div class="rank-item-title">
                <span>{{ item.value }}</span>
              </div>
              <div class="rank-item-subtitle">{{ item.englishName }}</div>
            </router-link>
            <div class="rank-item-introduction">简介</div>
          </div>
          <div class="rank-item-right">
            <img :src="item.imgUrl" alt="" />
          </div>
        </div>
        <div class="check-rank">
          <router-link
            :to="{
              path: `/${item.route}`,
              query: { listId: item.listId, value: item.value },
            }"
          >
            <span>查看排名 ></span>
          </router-link>
        </div>
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
  data() {
    return {
      rankList: [
        {
          listId: 1,
          value: "总排行榜",
          route: "TotalRank",
          englishName: "Overall leaderboard",
          imgUrl: require("@/assets/Overall leaderboard.jpg"),
        },
        {
          listId: 2,
          value: "功能排行榜",
          route: "FeatureRank",
          englishName: "Feature leaderboard",
          imgUrl: require("@/assets/Feature leaderboard.jpg"),
        },
        {
          listId: 3,
          value: "省份排行榜",
          route: "ProvinceRank",
          englishName: "Provincial leaderboard",
          imgUrl: require("@/assets/Provincial leaderboard.jpg"),
        },
        {
          listId: 4,
          value: "论文排行榜",
          route: "ThesisRank",
          englishName: "Paper leaderboard",
          imgUrl: require("@/assets/Paper leaderboard.jpg"),
        },
        {
          listId: 5,
          value: "专利排行榜",
          route: "PatentRank",
          englishName: "Patent leaderboard",
          imgUrl: require("@/assets/Patent leaderboard.jpg"),
        },
        {
          listId: 6,
          value: "民族药排行榜",
          route: "EthnicRank",
          englishName: "Ethnic leaderboard",
          imgUrl: require("@/assets/Ethnic leaderboard.jpg"),
        },
        {
          listId: 7,
          value: "(非)注射排行榜",
          route: "InjectionRank",
          englishName: "Injection leaderboard",
          imgUrl: require("@/assets/Injection leaderboard.jpg"),
        },
      ],
    };
  },
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
  width: 1180px;
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
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
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
@media screen and (min-width: 768px) and (max-width: 1920px) {
  .rank-item {
    width: 60%;
    /* height: 100%; */
  }

  .rank-item-right {
    width: 32%;
    margin-top: auto;
    margin-bottom: auto;
    /* background-color: yellow; */
  }
  .rank-item-right img {
    object-fit: cover;
    /* background-color: yellow; */
  }
}
@media screen and (max-width: 768px) {
  .rank-item {
    width: 80%;
    /* height: 100%; */
  }

  .rank-item-right {
    width: 32%;
    margin-top: auto;
    margin-bottom: auto;
    /* background-color: yellow; */
  }
  .rank-item-right img {
    object-fit: cover;
    /* background-color: yellow; */
  }
}
</style>  