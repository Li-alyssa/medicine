<template>
  <div class="main">
    <div class="title">
      <div class="left"></div>
      <span>推荐药品</span>
    </div>
    <div class="recommend-main">
      <div class="container">
        <div
          class="recommendList"
          v-for="item in recommendList"
          :key="index"
          @click="goProductInfo(item)"
        >
          <div class="side-item">
            <div class="pic">
              <img src="@/assets/page_tail.png" alt="" />
            </div>
            <div class="univ">
              <div class="logo-container">
                <img :src="item.serial" />
              </div>
              <div class="medicine-text">
                <div class="name">{{ item.name }}</div>
                <div class="enName">{{ item.englishName }}</div>
              </div>
              <div class="tag">
                <span class="label" v-for="tags in item.tags" :key="index">{{
                  tags
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // rankInfo: {},
      recommendList: [],
    };
  },
  props: ["productId"],
  methods: {
    async getRecommendList() {
      let result = await this.$API.getRecommendList(this.productId);
      console.log(result);
      result.response.forEach(async (company) => {
        console.log(company.serial);
        var pictureSerial = company.serial;
        var downloadPictureResult =
          await this.$API.reqDownloadUpLoadProductPhoto(pictureSerial);

        const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
        company.serial = src;
        console.log(company.serial);
      });
      this.recommendList = result.response;
      console.log(this.recommendList);
    },

    goProductInfo(item) {
      this.$router.push(`/product/${item.id}/${item.name}`);
    },
  },
  mounted() {
    this.getRecommendList();
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

.recommend-main {
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
}
.recommend-main :hover {
  background-color: #fff;
  cursor: pointer;
}
.container {
  width: 100%;
  padding: 5px;
  position: relative;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}

.recommendList {
  position: relative;
  width: 33%;
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  border-radius: 4px;
  z-index: 100;
  margin-right: 10px;
}
/* .recommendList :hover {
  background-color: #fff;
  box-shadow: 0 0 5px rgb(0 0 0 / 12%);
} */

.side-item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  width: 100%;
}
.pic {
  margin-top: 12px;
  width: 100%;
  border-radius: 4px;
  margin: 5px;
  /* background-color: red; */
}

.pic img {
  width: 100%;
}

.univ {
  width: 100%;
  margin-top: 12px;
  padding-bottom: 4px;
}

.logo-container {
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 12%);
  width: 50px;
  height: 50px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 15px;
}

.logo-container img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.medicine-text {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}

.medicine-text .name {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
}

.medicine-text .enName {
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #8e8c8e;
  margin-top: 4px;
}

.tag {
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-right: -10px;
  margin-left: 5px;
}

.tag .label {
  height: 16px;
  background-color: #fff;
  border-radius: 4px;
  padding: 2px 7px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #8d8b8d;
  white-space: nowrap;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>