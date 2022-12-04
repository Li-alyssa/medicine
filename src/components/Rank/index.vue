<template>
  <div class="index-container">
    <div class="main-container">
      <div
        class="card-item"
        v-for="item in rankList"
        :key="item.listId"
        :style="{ background: item.bgc }"
      >
        <div class="right-area">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="card-box">
          <router-link
            :to="{
              path: `/${item.route}`,
              query: { listId: item.listId, value: item.value },
            }"
          >
            <div class="card-titles">
              <div class="card-title">{{ item.value }}</div>
              <div class="card-subtitle">{{ item.englishName }}</div>
            </div>
          </router-link>
          <div class="card-content">
            <div class="expansion-content">简介</div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-pdf">
      <div class="pdf-title">
        <div class="left"></div>
        <span>pdf下载</span>
      </div>
      <div class="pdf-container">
        <div
          class="pdfList"
          v-for="item in pdfList"
          :key="item.id"
          @click="downLoadPdf(item)"
        >
          <el-tooltip
            class="item"
            effect="light"
            content="点击下载PDF文件"
            placement="bottom"
          >
            <div class="pdf-name">{{ item.name }}</div>
          </el-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import download from "downloadjs";
export default {
  data() {
    return {
      rankList: [
        {
          listId: 1,
          value: "总排行榜",
          route: "TotalRank",
          englishName: "Overall leaderboard",
          imgUrl: require("@/assets/Overall leaderboard.jpg"),
          bgc: "#606EE7",
        },
        {
          listId: 2,
          value: "功能排行榜",
          route: "FeatureRank",
          englishName: "Feature leaderboard",
          imgUrl: require("@/assets/Feature leaderboard.jpg"),
          bgc: "#0080EC",
        },
        {
          listId: 3,
          value: "省份排行榜",
          route: "ProvinceRank",
          englishName: "Provincial leaderboard",
          imgUrl: require("@/assets/Provincial leaderboard.jpg"),
          bgc: "#0089DB",
        },
        {
          listId: 4,
          value: "论文排行榜",
          route: "ThesisRank",
          englishName: "Paper leaderboard",
          imgUrl: require("@/assets/Paper leaderboard.jpg"),
          bgc: "#008CB9",
        },
        {
          listId: 5,
          value: "专利排行榜",
          route: "PatentRank",
          englishName: "Patent leaderboard",
          imgUrl: require("@/assets/Patent leaderboard.jpg"),
          bgc: "#008C8E",
        },
        {
          listId: 6,
          value: "民族药排行榜",
          route: "EthnicRank",
          englishName: "Ethnic leaderboard",
          imgUrl: require("@/assets/Ethnic leaderboard.jpg"),
          bgc: "#008963",
        },
        {
          listId: 7,
          value: "(非)注射排行榜",
          route: "InjectionRank",
          englishName: "Injection leaderboard",
          imgUrl: require("@/assets/Injection leaderboard.jpg"),
          bgc: "#518071",
        },
      ],
      pdfList: [],
    };
  },

  methods: {
    async getPDFList() {
      const data = {
        page: 1,
        size: 10,
      };
      let result = await this.$API.getPdfList(data);
      // console.log(result);
      this.pdfList = result.response.list;
    },

    async downLoadPdf(item) {
      // console.log(item);
      let result = await this.$API.downloadPDF(item.serial);
      download(new Blob([result]), `${item.name}` + ".pdf", "application/pdf");
    },
  },
  mounted() {
    this.getPDFList();
  },
};
</script>

<style scoped>
.main-container {
  width: 1070px;
  padding: 20px;
  background-color: #fff;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}

.card-item {
  width: 100%;
  float: left;
  /* background-image: url(@/assets/homeBackground.jpg); */
  /* -webkit-filter: grayscale(50%);*/
  /* filter: grayscale(50%); */
  /* opacity: 0.4; */
  /* background-color: #849b49; */
  background-size: 100% auto;
  background-repeat: no-repeat;
  margin-bottom: 10px;
  padding: 10px 0;
  overflow: hidden;
  border-radius: 8px;
}

.right-area {
  float: right;
  width: 34%;
  height: 182px;
  display: table;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
}

.right-area img {
  float: right;
  width: 330px;
  height: 182px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 20px;
}

.card-box {
  width: 65%;
  padding: 0 30px;
  position: relative;
  height: 182px;
  box-sizing: border-box;
  color: #fff;
  overflow: hidden;
}

.card-titles {
  cursor: pointer;
  color: #fff;
}

.card-title {
  font-size: 34px;
  margin-top: 15px;
  line-height: 48px;
  height: 48px;
  overflow: hidden;
  color: #fff;
}

.card-subtitle {
  font-size: 20px;
  margin-top: 5px;
  line-height: 28px;
  height: 28px;
  overflow: hidden;
  color: #fff;
}

.card-content {
  margin-top: 14px;
  font-size: 12px;
  line-height: 21px;
  text-align: justify;
  color: #fff;
}
.index-pdf {
  width: 1070px;
  border-radius: 8px;
  background-color: #f8f8f8;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}

.pdf-title {
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;
  /* margin-left: -16px; */
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

.pdf-title span {
  margin-left: 12px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
}

.pdf-container {
  display: flex;
  flex-wrap: nowrap;
  /* justify-content: center; */
  width: 100%;
  /* overflow: hidden; */
  padding: 5px;
}

.pdfList {
  position: relative;
  width: 24%;
  margin-right: 1%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  background-image: url(@/assets/page_tail.png);
  background-size: cover;
  border-radius: 4px;
  min-height: 140px;
  /* z-index: 100; */
}

.pdf-name {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  text-align: center;
}
@media screen and (min-width: 895px) and (max-width: 1210px) {
  .main-container {
    width: 80%;
  }

  .right-area img {
    float: right;
    width: 90%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 20px;
  }
}
@media screen and (max-width: 894px) {
  .main-container {
    width: 90%;
  }
  .card-box {
    width: 54%;
  }
  .right-area {
    width: 45%;
    border-left: none;
  }
  .right-area img {
    object-fit: contain;
    width: 90%;
    height: 100%;
  }
  .card-title {
    font-size: 24px;
    margin-top: 10px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    color: #fff;
  }
}
</style>