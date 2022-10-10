<template>
  <div class="out-container">
    <div class="container">
      <div class="left-container">
        <div class="medicine-container">
          <div class="medi-container">
            <div class="medi-msg">
              <div class="medi-info">
                <el-image
                  src="https://www.shanghairanking.cn/_nuxt/img/top_shadow.e02e29f.png"
                ></el-image>
                <div class="medi-name">
                  <span>{{ goodsInfo.name }}</span>
                  <span>{{ goodsInfo.company }}</span>
                </div>
                <div class="number-container">
                  <div class="items">联系电话:{{ goodsInfo.phone }}</div>
                </div>
              </div>
              <div class="labels-head">
                <img
                  src="https://www.shanghairanking.cn/_nuxt/img/top_shadow.e02e29f.png"
                  alt=""
                />
              </div>
              <div class="scroll-container">
                <div class="contant-msg">
                  <span>【标签】{{ strTags }}</span>
                  <span>【处方药/OTC】{{ goodsInfo.otc }}</span>
                  <span>【给药途径】{{ goodsInfo.route }}</span>
                  <span>【市场准入】{{ strToString }}</span>
                  <span>【治疗领域】{{ goodsInfo.domain }}</span>
                </div>

                <div class="recommed-container">
                  <div class="rec-left">
                    <div class="rec-num">98%</div>
                    <div class="rec-text">使用者推荐</div>
                    <div class="rec-participate">xxx人参与</div>
                  </div>
                  <div class="rec-right">
                    <div class="item-top">
                      <div class="img-container">
                        <img
                          src="https://www.shanghairanking.cn/_nuxt/img/tuijian_hui.74ac9fa.svg"
                          alt=""
                        />
                      </div>
                      <span>推荐</span>
                    </div>
                    <div class="item-bottom">
                      <div class="img-container">
                        <img
                          src="https://www.shanghairanking.cn/_nuxt/img/butuijian.17030ab.svg"
                          alt=""
                        />
                      </div>
                      <span>不推荐</span>
                    </div>
                  </div>
                </div>
                <div class="medicine-introduction">
                  <div class="medicine-title">
                    <div class="info-tab">
                      <span class="active">药品介绍</span>
                    </div>
                    <p>
                      {{ goodsInfo.instruction }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="right-container">
        <div class="top-container">
          <div class="top-title">
            <div class="medi-info">
              <el-image
                src="https://www.shanghairanking.cn/_nuxt/img/top_shadow.e02e29f.png"
              ></el-image>
              <div class="medi-name">
                <span>{{ goodsInfo.name }}</span>
                <span>{{ goodsInfo.company }}</span>
              </div>
              <div class="number-container">
                <div class="items">联系电话:{{ goodsInfo.phone }}</div>
              </div>
            </div>
            <div class="recommed-container">
              <div class="rec-left">
                <div class="rec-num">98%</div>
                <div class="rec-text">使用者推荐</div>
                <div class="rec-participate">xxx人参与</div>
              </div>
              <div class="rec-right">
                <div class="item-top">
                  <div class="img-container">
                    <img
                      src="https://www.shanghairanking.cn/_nuxt/img/tuijian_hui.74ac9fa.svg"
                      alt=""
                    />
                  </div>
                  <span>推荐</span>
                </div>
                <div class="item-bottom">
                  <div class="img-container">
                    <img
                      src="https://www.shanghairanking.cn/_nuxt/img/butuijian.17030ab.svg"
                      alt=""
                    />
                  </div>
                  <span>不推荐</span>
                </div>
              </div>
            </div>
          </div>
          <div class="top-introduce">
            <div class="contant-msg">
              <span>【标签】{{ strTags }}</span>
              <span>【处方药/OTC】{{ goodsInfo.otc }}</span>
              <span>【给药途径】{{ goodsInfo.route }}</span>
              <span>【市场准入】{{ strToString }}</span>
              <span>【治疗领域】{{ goodsInfo.domain }}</span>
            </div>
            <div class="medicine-title">
              <div class="info-tab">
                <span class="active">药品介绍</span>
              </div>
              <p>
                {{ goodsInfo.instruction }}
              </p>
            </div>
          </div>
        </div>
        <rank />
        <div class="reason">
          <div class="title">
            <div class="left"></div>
            <span>选择理由</span>
          </div>
          <div class="reason-main">
            <div
              class="reason-main-tag"
              v-for="(gl, index) in goodsIntroduction"
              :key="gl.id"
            >
              {{ gl.text }}
            </div>
          </div>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName">
            <el-tab-pane label="说明书文件" name="first"
              >这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊这里有好多好多的文字啊</el-tab-pane
            >
            <el-tab-pane label="医保准入" name="second">
              <img src="../.././assets/1.jpg" alt="" style="width: 100%" />
            </el-tab-pane>
            <el-tab-pane label="海外销售" name="third"
              ><img src="../.././assets/1.jpg" alt="" style="width: 100%"
            /></el-tab-pane>
            <el-tab-pane label="药品价格" name="fourth"
              ><img src="../.././assets/1.jpg" alt="" style="width: 100%" />
            </el-tab-pane>
            <el-tab-pane label="论文列表" name="fifth">
              <el-table
                :data="paperList"
                stripe
                style="width: 100%"
                v-if="activeName === 'fifth'"
              >
                <el-table-column prop="title" label="论文名称" width="180">
                </el-table-column>
                <el-table-column prop="author" label="作者" width="180">
                </el-table-column>
                <el-table-column prop="journal" label="期刊名称" width="180">
                </el-table-column>
                <el-table-column prop="year" label="发表年份">
                </el-table-column>
                <el-table-column prop="type" label="期刊类型">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="专利列表" name="sixth">
              <el-table
                :data="patentList"
                stripe
                style="width: 100%"
                v-if="activeName === 'sixth'"
              >
                <el-table-column prop="name" label="专利名称" width="180">
                </el-table-column>
                <el-table-column prop="type" label="专利类型" width="180">
                </el-table-column>
                <el-table-column prop="status" label="法律状态" width="width">
                </el-table-column>
                <el-table-column
                  prop="authorizationYear"
                  label="申请年份"
                  width="width"
                >
                </el-table-column>
                <el-table-column
                  prop="applicationNum"
                  label="公开年份"
                  width="width"
                >
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="photos">
          <div class="title">
            <div class="left"></div>
            <span>产品获奖/新闻报道</span>
          </div>
          <div class="photos-main">
            <el-carousel :interval="4000" type="card" height="200px">
              <el-carousel-item v-for="item in 6" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- <chart /> -->
        <!-- <remark /> -->
      </div>
    </div>
  </div>
</template>

<script>
import rank from "@/components/Products/rightContainer/rank.vue";
// import chart from "@/components/Products/rightContainer/chart.vue";
// import remark from "@/components/Products/rightContainer/remark.vue";

export default {
  data() {
    return {
      activeName: "second",
      tableData: [],
      goodsInfo: {
        access: [],
        tags: [],
      },
      goodsIntroduction: [],
      paperList: [],
      patentList: [],
    };
  },
  components: {
    rank,
    // chart,
    // remark,
  },
  methods: {
    //获取产品详情信息
    async getGoodInfo() {
      try {
        let result = await this.$API.reqGetProductInfo(this.$route.params.id);
        // console.log(result);
        this.goodsInfo = result.response;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品介绍
    async getProductIntroduction() {
      try {
        let result = await this.$API.reqGetProductIntroduction(
          this.$route.params.id
        );
        // console.log(result);
        this.goodsIntroduction = result.response;
        // this.goodsInfo = result.response;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品论文列表
    async getProductPaper() {
      try {
        const data = {
          productId: this.$route.params.id,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        };
        let result = await this.$API.reqGetCompanyOrProductPaper(data);
        // console.log(result);
        this.paperList = result.response.list;
      } catch (error) {
        console.log(error.message);
      }
    },

    //获取产品专利列表
    async getProductPatent() {
      try {
        const data = {
          productId: this.$route.params.id,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        };
        let result = await this.$API.reqGetCompanyOrProductPatent(data);
        // console.log(result);
        this.patentList = result.response.list;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getGoodInfo();
    this.getProductIntroduction();
    this.getProductPaper();
    this.getProductPatent();
  },
  computed: {
    strToString() {
      return this.goodsInfo.access.toString();
    },
    strTags() {
      return this.goodsInfo.tags.toString();
    },
  },
};
</script>

<style scoped>
.out-container {
  position: relative;
  overflow: visible;
  min-height: calc(100vh - 375px);
}

.container {
  padding-bottom: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1180px;
}

.left-container {
  /* position: sticky; */
  position: relative;
  /* top: 70px; */
  float: left;
  background-color: #fff;
  width: 382px;
  padding: 32px 0;
  border-radius: 4px;
  /* height: calc(100vh - 208px); */
  /* min-height: 456px; */
  margin-bottom: 20px;
}

.medicine-container {
  width: 334px;
  margin: 0 auto;
}

.medi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medi-msg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medi-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medi-info .el-image {
  display: inline-block;
  width: 74px;
  height: 74px;
}
.medi-name {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.medi-name span:first-child {
  margin-top: 12px;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #312f31;
}
.medi-name span:nth-child(2) {
  margin-top: 6px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #605e60;
}

.number-container {
  width: 100%;
  margin-top: 16px;
  height: 42px;
  background-color: #f8f8f8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin-top: 4px; */
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #605e60;
}

.labels-head {
  position: relative;
  width: 100%;
  margin-top: 20px;
}

.labels-head img {
  position: absolute;
  width: 100%;
}

.scroll-container {
  /* height: calc(100vh - 428px); */
  overflow-y: auto;
  margin-top: 22px;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.contant-msg span {
  padding: 10px;
  display: block;
  background-color: #f8f8f8;
  border-radius: 4px;
  margin-top: 5px;
  font-family: pingfang-SC;
  font-size: 14px;
  color: #312f31;
}

.recommed-container {
  padding: 8px;
  width: 316px;
  height: 88px;
  box-shadow: 0 0 12px rgb(0 0 0 / 12%);
  border-radius: 4px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
}

.recommed-container .rec-left {
  width: 50%;
  padding: 8px 12px;
  height: 72px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rec-num {
  font-family: PingFang SC;
  font-size: 24px;
  line-height: 33px;
  font-weight: 500;
  color: #312f31;
}

.rec-text {
  font-family: PingFang SC;
  font-size: 14px;
  color: #383638;
}

.rec-participate {
  font-family: PingFang SC;
  font-size: 12px;
  color: #8d8b8d;
}

.recommed-container .rec-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-top {
  width: 130px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item-top .img-container {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
}
.item-top .img-container img {
  width: 65%;
}
.item-top span {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #312f31;
  margin-left: 6px;
}

.item-bottom {
  width: 130px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item-bottom .img-container {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
}
.item-bottom .img-container img {
  width: 65%;
}
.item-bottom span {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #312f31;
  margin-left: 6px;
}

.medicine-introduction {
  width: 100%;
  margin-top: 20px;
}

.medicine-introduction .medicine-title {
  position: relative;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
  display: flex;
  flex-direction: column;
}

.info-tab span {
  border-bottom: 2px solid #409eff;
}
.medicine-title p {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #605e60;
  margin-top: 12px;
  text-align: justify;
  line-height: 22px;
}
.right-container {
  float: right;
  width: 780px;
  position: relative;
}
.reason {
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px 16px;
}
.reason-main {
  width: 100%;
  /* background-color: red; */
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.reason-main-tag {
  width: 24%;
  margin-right: 1.1%;
  height: 200px;
  display: inline-block;
  background-color: #f8f8f8;
  border-radius: 5px;
}
.tabs {
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px 16px;
}
.photos {
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

.photos-main {
  /* display: flex; */
  /* align-items: center; */
  /* position: relative; */
  width: 100%;
}
.el-carousel__item {
  border-radius: 8px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/* // 滚动条宽度 */
div::-webkit-scrollbar {
  height: 8px;
}
/* // 滚动条轨道 */
div::-webkit-scrollbar-track {
  background: #fff;
  border-radius: 10px;
}
/* // 小滑块 */
div::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 10px;
}

.scroll-left {
  margin-right: 10px;
}

.top-container {
  display: none;
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px 16px;
}

.el-image {
  display: inline-block;
  width: 74px;
  height: 74px;
}

.top-title .el-image {
  margin-top: 20px;
}
@media only screen and (max-width: 850px) {
  .left-container {
    display: none;
  }
  .container {
    width: 100%;
  }
  .right-container {
    width: 80%;
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .top-container {
    /* width: 80%; */
    display: block;
    margin-bottom: 20px;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 16px 16px;
  }
}

@media screen and (min-width: 850px) and (max-width: 1250px) {
  .left-container {
    display: none;
  }
  .container {
    width: 100%;
  }
  .right-container {
    float: none;
    margin-left: auto;
    margin-right: auto;
  }

  .top-container {
    display: block;
    margin-bottom: 20px;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    padding: 0 16px 16px;
  }
}
</style>