<template>
  <div class="out-container">
    <div class="container">
      <div class="left-container">
        <div class="medicine-container">
          <div class="medi-container">
            <div class="medi-msg">
              <div class="medi-info">
                <el-image :src.async="goodsInfo.serial"></el-image>
                <div class="medi-name">
                  <span
                    >{{ goodsInfo.name }}
                    <a
                      class="iconfont icon-wechat-fill"
                      @click="shareDialogVisible = true"
                    ></a
                  ></span>
                  <span>{{ goodsInfo.company }}</span>
                </div>
                <div class="number-container">
                  <div class="items">联系电话:{{ goodsInfo.phone }}</div>
                </div>
              </div>
              <div class="labels-head">
                <img src="@/assets/top_shadow.png" alt="" />
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
                    <div class="rec-num" v-if="goodsInfo.recommend">
                      {{ goodsInfo.recommend.percent }}%
                    </div>
                    <div class="rec-text">使用者推荐</div>
                    <div class="rec-participate" v-if="goodsInfo.recommend">
                      {{
                        goodsInfo.recommend.up + goodsInfo.recommend.down
                      }}人参与
                    </div>
                  </div>
                  <div class="rec-right">
                    <div
                      v-if="goodsInfo.recommend"
                      :class="
                        goodsInfo.recommend.recommend
                          ? 'item-top-2'
                          : 'item-top'
                      "
                      @click="recommendTrue"
                    >
                      <div class="img-container">
                        <img
                          v-if="goodsInfo.recommend"
                          :src="
                            goodsInfo.recommend.recommend ? imgUrl : imgUrl2
                          "
                          alt=""
                        />
                      </div>
                      <span>推荐</span>
                    </div>
                    <div
                      :class="unRecommend ? 'item-bottom-2' : 'item-bottom'"
                      @click="recommendFalse"
                    >
                      <div class="img-container">
                        <img src="@/assets/butuijian.png" alt="" />
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
                      {{ goodsInfo.comment }}
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
              <el-image :src.async="goodsInfo.serial"></el-image>
              <div class="medi-name">
                <span
                  >{{ goodsInfo.name }}
                  <a
                    class="iconfont icon-wechat-fill"
                    @click="shareDialogVisible = true"
                  ></a
                ></span>
                <span>{{ goodsInfo.company }}</span>
              </div>
              <div class="number-container">
                <div class="items">联系电话:{{ goodsInfo.phone }}</div>
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
            <div class="recommed-container">
              <div class="rec-left">
                <div class="rec-num" v-if="goodsInfo.recommend">
                  {{ goodsInfo.recommend.percent }}%
                </div>
                <div class="rec-text">使用者推荐</div>
                <div class="rec-participate" v-if="goodsInfo.recommend">
                  {{ goodsInfo.recommend.up + goodsInfo.recommend.down }}人参与
                </div>
              </div>
              <div class="rec-right">
                <div
                  v-if="goodsInfo.recommend"
                  :class="
                    goodsInfo.recommend.recommend ? 'item-top-2' : 'item-top'
                  "
                  @click="recommendTrue"
                >
                  <div class="img-container">
                    <img :src="recommend ? mgUrl : imgUrl2" alt="" />
                  </div>
                  <span>推荐</span>
                </div>
                <div
                  :class="unRecommend ? 'item-bottom-2' : 'item-bottom'"
                  @click="recommendFalse"
                >
                  <div class="img-container">
                    <img src="@/assets/butuijian.png" alt="" />
                  </div>
                  <span>不推荐</span>
                </div>
              </div>
            </div>
            <div class="medicine-title">
              <div class="info-tab">
                <span class="active">药品介绍</span>
              </div>
              <p>
                {{ goodsInfo.comment }}
              </p>
            </div>
          </div>
        </div>
        <rank />
        <div class="reason" v-show="goodsInfo.special">
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
        <div class="tabs" v-show="goodsInfo.special">
          <!-- <div class="upPhoto-container" @click="dialogVisible = true">
            <i class="el-icon-upload"></i>
          </div> -->
          <el-tabs v-model="activeName">
            <el-tab-pane label="说明书文件" name="first">
              <div v-html="instructionContent"></div>
            </el-tab-pane>
            <el-tab-pane label="论文列表" name="second">
              <el-table
                :data="paperList"
                stripe
                style="width: 100%"
                v-if="activeName === 'second'"
              >
                <el-table-column prop="title" label="论文名称" width="180">
                </el-table-column>
                <el-table-column prop="author" label="作者" width="180">
                </el-table-column>
                <el-table-column prop="journal" label="期刊名称" width="180">
                </el-table-column>
                <el-table-column prop="year" label="发表年份" align="center">
                </el-table-column>
                <el-table-column prop="type" label="期刊类型">
                </el-table-column>
              </el-table>
              <el-pagination
                background
                @current-change="handleCurrentChangePaper"
                :current-page="paperQuery.pageNum"
                :page-size="paperQuery.pageSize"
                :total="paperQuery.paperTotal"
                layout="prev, pager, next, jumper"
                style="margin-top: 20px; text-align: center"
              >
              </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="专利列表" name="third">
              <el-table
                :data="patentList"
                stripe
                style="width: 100%"
                v-if="activeName === 'third'"
              >
                <el-table-column prop="name" label="专利名称" width="300">
                </el-table-column>
                <el-table-column prop="type" label="专利类型" width="120">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="法律状态"
                  width="120"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="applicationYear"
                  label="申请年份"
                  width="100"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="authorizationYear"
                  label="公开年份"
                  width="100"
                  align="center"
                >
                </el-table-column>
              </el-table>
              <el-pagination
                background
                @current-change="handleCurrentChangePatent"
                :current-page="patentQuery.pageNum"
                :page-size="patentQuery.pageSize"
                :total="patentQuery.patentTotal"
                layout="prev, pager, next, jumper"
                style="margin-top: 20px; text-align: center"
              >
              </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="科技奖励" name="forth">
              <el-table
                :data="awardList"
                stripe
                style="width: 100%"
                v-if="activeName === 'forth'"
              >
                <el-table-column prop="name" label="获奖项目" width="180">
                </el-table-column>
                <el-table-column prop="issued" label="颁奖单位" width="180">
                </el-table-column>
                <el-table-column prop="level" label="奖励等级" width="180">
                </el-table-column>
                <el-table-column prop="type" label="奖励类型" width="120">
                </el-table-column>
                <el-table-column prop="year" label="获奖年份" align="center">
                </el-table-column
              ></el-table>
              <el-pagination
                background
                @current-change="handleCurrentChangeAward"
                :current-page="awardQuery.pageNum"
                :page-size="awardQuery.pageSize"
                :total="awardQuery.awardTotal"
                layout="prev, pager, next, jumper"
                style="margin-top: 20px; text-align: center"
              >
              </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="科技项目" name="fifth">
              <el-table
                :data="supportList"
                stripe
                style="width: 100%"
                v-if="activeName === 'fifth'"
              >
                <el-table-column prop="name" label="项目名称" width="400">
                </el-table-column>
                <el-table-column prop="level" label="项目等级" width="120">
                </el-table-column>
                <el-table-column prop="type" label="项目类型" width="120">
                </el-table-column>
                <el-table-column prop="year" label="项目年份" align="center">
                </el-table-column
              ></el-table>
              <el-pagination
                background
                @current-change="handleCurrentChangeSupport"
                :current-page="supportQuery.pageNum"
                :page-size="supportQuery.pageSize"
                :total="supportQuery.supportTotal"
                layout="prev, pager, next, jumper"
                style="margin-top: 20px; text-align: center"
              >
              </el-pagination>
            </el-tab-pane>
            <el-tab-pane label="指南共识" name="sixth">
              <el-table
                :data="gcList"
                stripe
                style="width: 100%"
                v-if="activeName === 'sixth'"
              >
                <el-table-column prop="name" label="获奖项目">
                </el-table-column>
                <el-table-column prop="issued" label="发布单位" width="180">
                </el-table-column>
                <el-table-column
                  prop="year"
                  label="发布时间"
                  width="100"
                  align="center"
                >
                </el-table-column
              ></el-table>

              <el-pagination
                background
                @current-change="handleCurrentChangeGc"
                :current-page="gcQuery.pageNum"
                :page-size="gcQuery.pageSize"
                :total="gcQuery.gcTotal"
                layout="prev, pager, next, jumper"
                style="margin-top: 20px; text-align: center"
              >
              </el-pagination
            ></el-tab-pane>
          </el-tabs>
        </div>
        <div class="tabs" v-show="goodsInfo.special">
          <el-tabs v-model="activeName2">
            <el-tab-pane label="医保准入" name="first">
              <div v-html="insuranceContent"></div>
            </el-tab-pane>
            <el-tab-pane label="海外销售" name="second">
              <div v-html="saleContent"></div>
            </el-tab-pane>
            <el-tab-pane label="药品价格" name="third">
              <div v-html="priceContent"></div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="photos" v-show="goodsInfo.special">
          <div class="title">
            <div class="left"></div>
            <span>产品获奖/新闻报道</span>
          </div>
          <el-carousel
            :interval="5000"
            arrow="always"
            style="width: 100%"
            height="300px"
          >
            <el-carousel-item v-for="(item, index) in pictureList" :key="index">
              <img
                class="carouselImg"
                :src.async="item.serial"
                alt=""
                @click="getCarouselInfo(item)"
              />
            </el-carousel-item>
          </el-carousel>
          <el-drawer :visible.sync="drawer" :with-header="false">
            <div class="photos-main">
              <div v-html="pictureContent"></div>
            </div>
          </el-drawer>
        </div>
        <recommend :productId="productId" />
      </div>
    </div>

    <el-dialog
      title="请打开微信扫描二维码"
      :visible.sync="shareDialogVisible"
      customClass="dialog"
      center
    >
      <div style="text-align: center">
        <vue-qr
          :text="shareData.url"
          :margin="10"
          colorDark="#000"
          colorLight="#fff"
          :dotScale="1"
          :logoSrc="shareData.icon"
          :logoScale="0.2"
          :size="200"
        ></vue-qr>
      </div>
      <br />
      <div style="text-align: center"><h6>分享该产品</h6></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="shareDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="shareDialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import rank from "@/components/Products/rightContainer/rank.vue";
import recommend from "@/components/Products/rightContainer/recommend.vue";
import share from "@/api/share";
import vueQr from "vue-qr";
import "@/assets/iconfont/iconfont.css";

export default {
  data() {
    return {
      imgUrl: require("@/assets/tuijian.png"),
      imgUrl2: require("@/assets/tuijian_hui.png"),
      productId: this.$route.params.id,
      activeName: "first",
      activeName2: "first",
      tableData: [],
      goodsInfo: {
        access: [],
        tags: [],
      },
      goodsIntroduction: [],
      paperQuery: {
        pageNum: 1,
        pageSize: 10,
        paperTotal: 0,
      },
      patentQuery: {
        pageNum: 1,
        pageSize: 10,
        patentTotal: 0,
      },
      awardQuery: {
        pageNum: 1,
        pageSize: 10,
        awardTotal: 0,
      },
      supportQuery: {
        pageNum: 1,
        pageSize: 10,
        supportTotal: 0,
      },
      gcQuery: {
        pageNum: 1,
        pageSize: 10,
        gcTotal: 0,
      },
      paperList: [],
      patentList: [],
      supportList: [],
      awardList: [],
      gcList: [],
      dialogVisible: false,
      shareDialogVisible: false,
      fileList: [],
      filePhoto: [],
      fileUrl: "",
      // 允许的文件类型
      fileType: ["png", "jpg", "bmp", "jpeg"],
      // 运行上传文件大小，单位 M
      fileSize: 50,
      // 附件数量限制
      fileLimit: 1,
      value: "",

      pictureTypeList: [
        {
          value: 1,
          label: "产品获奖或新闻报道",
        },
        {
          value: 2,
          label: "医保准入",
        },
        {
          value: 3,
          label: "海外销售",
        },
        {
          value: 4,
          label: "药品价格",
        },
      ],
      serial: "",
      //医保准入图
      insuranceContent: "",
      //海外销售图
      saleContent: "",
      //药品价格图
      priceContent: "",
      newsContent: "",
      instructionContent: "",
      shareData: {
        // url: 'http://cxyabc.vaiwan.com/to_detail',  //需要转化成二维码的网址
        url: window.location.href.toString(), //需要转化成二维码的网址
        icon: "",
      },
      userinfo: JSON.parse(sessionStorage.getItem("user")),
      recommend: true,
      unRecommend: false,
      drawer: false,
      pictureList: [],
      pictureContent: "",
    };
  },
  components: {
    rank,
    recommend,
    vueQr,
  },
  methods: {
    //获取产品详情信息
    async getGoodInfo() {
      try {
        let result = await this.$API.reqGetProductInfo(this.$route.params.id);

        var pictureSerial = result.response.serial;
        var downloadPictureResult =
          await this.$API.reqDownloadUpLoadProductPhoto(pictureSerial);

        const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
        result.response.serial = src;

        this.goodsInfo = result.response;
        // console.log(this.goodsInfo);
        // this.getShareReady();
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
          pageNum: this.paperQuery.pageNum,
          pageSize: this.paperQuery.pageSize,
        };
        let result = await this.$API.reqGetCompanyOrProductPaper(data);
        // console.log(result);

        for (var i = 0; i < result.response.list.length; i++) {
          var reg = new RegExp("%", "g"); //g表示全部的
          //         // //将json转换为字符串   将被替换内容替换为替换内容
          let str = JSON.stringify(result.response).replace(reg, ",");
          var replaceData = JSON.parse(str);
          // console.log(data);
        }
        this.paperList = replaceData.list;
        this.paperQuery.paperTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },

    //获取产品专利列表
    async getProductPatent() {
      try {
        const data = {
          productId: this.$route.params.id,
          pageNum: this.patentQuery.pageNum,
          pageSize: this.patentQuery.pageSize,
        };
        let result = await this.$API.reqGetCompanyOrProductPatent(data);
        console.log(result);
        this.patentList = result.response.list;
        this.patentQuery.patentTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品奖励列表
    async getCompanyAward() {
      try {
        const data = {
          productId: this.$route.params.id,
          pageNum: this.awardQuery.pageNum,
          pageSize: this.awardQuery.pageSize,
        };
        let result = await this.$API.reqGetCompanyAward(data);
        // console.log(result);
        this.awardList = result.response.list;
        this.awardQuery.awardTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品项目列表
    async getCompanySupport() {
      try {
        const data = {
          productId: this.$route.params.id,
          pageNum: this.supportQuery.pageNum,
          pageSize: this.supportQuery.pageSize,
        };
        let result = await this.$API.reqGetCompanySupport(data);
        this.supportList = result.response.list;
        this.supportQuery.supportTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品指南列表
    async getCompanyGc() {
      try {
        const data = {
          productId: this.$route.params.id,
          pageNum: this.gcQuery.pageNum,
          pageSize: this.gcQuery.pageSize,
        };
        let result = await this.$API.reqGetCompanyGc(data);
        console.log(result);
        this.gcList = result.response.list;
        this.gcQuery.gcTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },

    //控制分页
    handleCurrentChangePaper(val) {
      // console.log(val);
      this.$set(this.paperQuery, "pageNum", val);
      this.getProductPaper();
    },
    handleCurrentChangePatent(val) {
      // console.log(val);
      this.$set(this.patentQuery, "pageNum", val);
      this.getProductPatent();
    },
    handleCurrentChangeAward(val) {
      // console.log(val);
      this.$set(this.awardQuery, "pageNum", val);
      this.getCompanyAward();
    },
    handleCurrentChangeSupport(val) {
      // console.log(val);
      this.$set(this.supportQuery, "pageNum", val);
      this.getCompanySupport();
    },
    handleCurrentChangeGc(val) {
      // console.log(val);
      this.$set(this.gcQuery, "pageNum", val);
      this.getCompanyGc();
    },

    async getinsuranceContent() {
      const data = {
        productId: this.$route.params.id,
        type: "2",
      };
      // console.log(data);
      try {
        let result = await this.$API.checkquill(data);
        // console.log(result);
        this.insuranceContent = result.response.content;
      } catch (error) {
        console.log(error.message);
      }
    },
    async getsaleContent() {
      const data = {
        productId: this.$route.params.id,
        type: "3",
      };
      // console.log(data);
      try {
        let result = await this.$API.checkquill(data);
        // console.log(result);
        this.saleContent = result.response.content;
      } catch (error) {
        console.log(error.message);
      }
    },
    async getpriceContent() {
      const data = {
        productId: this.$route.params.id,
        type: "4",
      };
      // console.log(data);
      try {
        let result = await this.$API.checkquill(data);
        // console.log(result);
        this.priceContent = result.response.content;
      } catch (error) {
        console.log(error.message);
      }
    },
    async getnewsContent() {
      const data = {
        productId: this.$route.params.id,
        type: "1",
      };
      // console.log(data);
      try {
        let result = await this.$API.checkquill(data);
        this.newsContent = result.response.content;
        // console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    },

    //获取说明书富文本
    async getInstructionContent() {
      const data = {
        productId: this.$route.params.id,
        type: "5",
      };
      // console.log(data);
      try {
        let result = await this.$API.checkquill(data);
        this.instructionContent = result.response.content;
        // console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    },

    //使用者推荐
    async recommendTrue() {
      if (this.userinfo) {
        if (this.goodsInfo.recommend.recommend == true) {
          // console.log(this.recommend);
          this.$message({
            message: "重复投票!",
          });
        } else if (this.goodsInfo.recommend.recommend == false) {
          this.$message({
            message: "重复投票!",
          });
        } else {
          let data = {
            productId: this.$route.params.id,
            recommend: true,
          };
          let result = await this.$API.reqRecommend(data);
          console.log(result);
          this.$message({
            message: "推荐成功!",
            type: "success",
          });
          this.recommend = !this.recommend;
          this.getGoodInfo();
        }
      } else {
        this.$alert("您还未登录,请先登录!", {
          confirmButtonText: "确定",
        });
      }
    },

    //使用者不推荐
    async recommendFalse() {
      if (this.userinfo) {
        if (this.goodsInfo.recommend.recommend == true) {
          // console.log(this.recommend);
          this.$message({
            message: "重复投票!",
          });
        } else if (this.goodsInfo.recommend.recommend == false) {
          this.$message({
            message: "重复投票!",
          });
        } else {
          let data = {
            productId: this.$route.params.id,
            recommend: false,
          };
          let result = await this.$API.reqRecommend(data);
          console.log(result);
          this.$message({
            message: "不推荐成功!",
            type: "warning",
          });
          this.unRecommend = !this.unRecommend;
          this.getGoodInfo();
        }
      } else {
        this.$alert("您还未登录,请先登录!", {
          confirmButtonText: "确定",
        });
      }
    },

    //获取轮播图
    async getCarousel() {
      let id = this.$route.params.id;
      let result = await this.$API.getProductAwardPicture(id);
      console.log(result);
      var downloadPictureResult = "";
      var pictureSerial = "";
      result.response.forEach(async (picture) => {
        // console.log(company);
        pictureSerial = picture.serial;
        downloadPictureResult = await this.$API.reqDownloadUpLoadProductPhoto(
          pictureSerial
        );
        const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
        picture.serial = src;
        // console.log(company.serial);
      });
      console.log(result);
      this.pictureList = result.response;
    },

    //获取轮播图内容
    getCarouselInfo(item) {
      console.log(item);
      this.drawer = true;
      this.pictureContent = item.news;
    },
  },
  mounted() {
    this.getGoodInfo();
    this.getProductIntroduction();
    this.getProductPaper();
    this.getProductPatent();
    this.getCompanyAward();
    this.getCompanySupport();

    this.getCompanyGc();

    // this.getCheckedInsurancePicture();
    // this.getCheckedSalePicture();
    // this.getCheckedPricePicture();
    // this.getCheckedNewsPicture();
    this.getinsuranceContent();
    this.getsaleContent();
    this.getpriceContent();
    this.getnewsContent();
    this.getInstructionContent();
    this.getCarousel();
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
<style>
img {
  width: 100%;
}
.dialog {
  width: 30%;
}
@media screen and (max-width: 850px) {
  .dialog {
    width: 50%;
  }
}
@media screen and (max-width: 500px) {
  .dialog {
    width: 80%;
  }
}
</style>
<style scoped>
img {
  max-width: 100% !important;
  height: auto !important;
}
.icon-wechat-fill {
  font-size: 24px;
}
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
.item-top-2 {
  width: 130px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #fbe6e6;
}

.item-top-2 .img-container {
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
.item-top-2 .img-container img {
  width: 65%;
}
.item-top-2 span {
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
.item-bottom-2 {
  width: 130px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #eae9ea;
}

.item-bottom-2 .img-container {
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
.item-bottom-2 .img-container img {
  width: 65%;
}
.item-bottom-2 span {
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
  /* width: 100%; */
  height: 100%;
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
  padding: 10px 10px;
  font-size: 20px;
  line-height: 2;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-carousel__item {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */

.carouselImg {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
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

.upPhoto-container {
  position: absolute;
  top: 140px;
  right: -45px;
}
.upPhoto-container i {
  font-size: 40px;
  color: #409eff;
  cursor: pointer;
}

@media screen and (max-width: 850px) {
  .left-container {
    display: none;
  }
  .container {
    width: 100%;
  }
  .right-container {
    width: 100%;
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

  .recommed-container {
    padding: 8px;
    width: 90%;
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
  .upPhoto-container {
    position: absolute;
    top: 85%;
    /* bottom: 0; */
    right: 0;
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