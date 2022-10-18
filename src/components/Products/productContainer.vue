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
                  <span
                    >{{ goodsInfo.name }}
                    <a
                      class="el-icon-share"
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
                    <div
                      :class="recommend ? 'item-top-2' : 'item-top'"
                      @click="recommendTrue"
                    >
                      <div class="img-container">
                        <img
                          :src="
                            recommend
                              ? 'https://www.shanghairanking.cn/_nuxt/img/tuijian.6e30c21.svg '
                              : 'https://www.shanghairanking.cn/_nuxt/img/tuijian_hui.74ac9fa.svg'
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
                        <img
                          :src="
                            unRecommend
                              ? '	https://www.shanghairanking.cn/_nuxt/img/butuijian_active.dd9fbce.svg'
                              : 'https://www.shanghairanking.cn/_nuxt/img/butuijian.17030ab.svg'
                          "
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
                <div
                  :class="recommend ? 'item-top-2' : 'item-top'"
                  @click="recommendTrue"
                >
                  <div class="img-container">
                    <img
                      :src="
                        recommend
                          ? 'https://www.shanghairanking.cn/_nuxt/img/tuijian.6e30c21.svg '
                          : 'https://www.shanghairanking.cn/_nuxt/img/tuijian_hui.74ac9fa.svg'
                      "
                      alt=""
                    />
                  </div>
                  <span>推荐</span>
                </div>
                <div :class="unRecommend ? 'item-bottom-2' : 'item-bottom'">
                  <div class="img-container">
                    <img
                      :src="
                        unRecommend
                          ? '	https://www.shanghairanking.cn/_nuxt/img/butuijian_active.dd9fbce.svg'
                          : 'https://www.shanghairanking.cn/_nuxt/img/butuijian.17030ab.svg'
                      "
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
          <div class="upPhoto-container" @click="dialogVisible = true">
            <i class="el-icon-upload"></i>
          </div>
          <el-tabs v-model="activeName">
            <el-tab-pane label="说明书文件" name="first">{{
              goodsInfo.instruction
            }}</el-tab-pane>
            <el-tab-pane label="医保准入" name="second">
              <img
                :src="insurancePicture"
                alt=""
                style="width: 100%; height: 100px; object-fit: contain"
              />
            </el-tab-pane>
            <el-tab-pane label="海外销售" name="third"
              ><img
                :src="salePicture"
                alt=""
                style="width: 100%; height: 100px; object-fit: contain"
            /></el-tab-pane>
            <el-tab-pane label="药品价格" name="fourth"
              ><img
                :src="pricePicture"
                alt=""
                style="width: 100%; height: 100px; object-fit: contain"
              />
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
            <el-tab-pane label="专利列表" name="sixth">
              <el-table
                :data="patentList"
                stripe
                style="width: 100%"
                v-if="activeName === 'sixth'"
              >
                <el-table-column prop="name" label="专利名称" width="width">
                </el-table-column>
                <el-table-column prop="type" label="专利类型" width="120">
                </el-table-column>
                <el-table-column
                  prop="status"
                  label="法律状态"
                  width="100"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="applicationYear"
                  label="申请年份"
                  width="80"
                  align="center"
                >
                </el-table-column>
                <el-table-column
                  prop="authorizationYear"
                  label="公开年份"
                  width="80"
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
          </el-tabs>
        </div>
        <div class="photos" v-show="goodsInfo.special">
          <div class="title">
            <div class="left"></div>
            <span>产品获奖/新闻报道</span>
          </div>
          <div class="photos-main">
            <el-carousel :interval="4000" height="200px">
              <el-carousel-item
                v-for="(item, index) in NewsPicture"
                :key="index"
              >
                <img
                  :src="item.serial"
                  alt=""
                  style="width: 100%; height: 100%; object-fit: contain"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-exceed="handleExceed"
            :on-success="handleSuccess"
            :file-list="fileList"
            :limit="fileLimit"
            :before-upload="beforeUpload"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件,且不超过500kb
            </div>
          </el-upload>
          <el-select
            v-model="value"
            placeholder="请选择上传位置"
            size="small"
            @change="getOptionList(value)"
            style="margin-top: 10px; width: 180px"
          >
            <el-option
              v-for="item in pictureTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleUpload">确认上传</el-button>
          </span>
        </el-dialog>
        <!-- <chart /> -->
        <!-- <remark /> -->
      </div>
    </div>

    <el-dialog
      title="请打开微信扫描二维码"
      :visible.sync="shareDialogVisible"
      width="30%"
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
import share from "@/api/share";
import vueQr from "vue-qr";
// import chart from "@/components/Products/rightContainer/chart.vue";
// import remark from "@/components/Products/rightContainer/remark.vue";

export default {
  data() {
    return {
      activeName: "first",
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
      paperList: [],
      patentList: [],
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
      pictureType: null,
      pictureIndex: null,
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
      insurancePicture: "",
      //海外销售图
      salePicture: "",
      //药品价格图
      pricePicture: "",
      newsPicture: [],
      //新闻报道轮播图
      newsPicture: [],
      checkedInsurancePictureResult: [],
      checkedSalePictureResult: [],
      checkedPricePictureResult: [],
      checkedNewsPictureResult: [],
      NewsPicture: [],
      binaryData: [],
      shareData: {
        // url: 'http://cxyabc.vaiwan.com/to_detail',  //需要转化成二维码的网址
        url: window.location.href.toString(), //需要转化成二维码的网址
        icon: "",
      },
      userinfo: JSON.parse(sessionStorage.getItem("userinfo")),
      recommend: false,
      unRecommend: false,
    };
  },
  components: {
    rank,
    vueQr,
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
        // console.log(result);
        this.patentList = result.response.list;
        this.patentQuery.patentTotal = result.response.total;
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

    //上传文件之前
    beforeUpload(file) {
      if (file.type != "" || file.type != null || file.type != undefined) {
        //截取文件的后缀，判断文件类型
        const FileExt = file.name.replace(/.+\./, "").toLowerCase();
        //计算文件的大小
        const isLt5M = file.size / 1024 / 1024 < 50; //这里做文件大小限制
        //如果大于50M
        if (!isLt5M) {
          this.$showMessage("上传文件大小不能超过 50MB!");
          return false;
        }
        //如果文件类型不在允许上传的范围内
        if (this.fileType.includes(FileExt)) {
          return true;
        } else {
          this.$message.error("上传文件格式不正确!");
          return false;
        }
      }
    },
    //超出文件个数的回调
    handleExceed() {
      this.$message({
        type: "warning",
        message: "超出最大上传文件数量的限制！",
      });
      return;
    },
    //上传文件成功
    handleSuccess(file, fileList) {
      this.filePhoto = fileList;
    },
    //确认上传图片  调用函数
    async handleUpload() {
      let data = new FormData();
      data.append("file", this.filePhoto.raw);
      // console.log(data);
      let result = await this.$API.reqUpLoadPhoto(data);
      // console.log(result);
      this.serial = result.response;
      this.addPicture();
      this.dialogVisible = false;
      this.filePhoto = [];
    },
    //添加图片
    async addPicture() {
      let pictureData = {
        productId: this.$route.params.id,
        type: this.pictureType,
        serial: this.serial,
      };
      let addPictureResult = await this.$API.reqAddUpLoadPhoto(pictureData);
      // console.log(addPictureResult);
      // this.getCheckedPicture();
      this.getCheckedInsurancePicture();
      this.getCheckedSalePicture();
      this.getCheckedPricePicture();
      this.getCheckedNewsPicture();
    },

    // 查询医保照片
    async getCheckedInsurancePicture() {
      let checkPictureData = {
        productId: this.$route.params.id,
        type: 2,
      };
      let checkedPictureResult = await this.$API.reqCheckUpLoadPhoto(
        checkPictureData
      );
      // console.log(checkedPictureResult);
      this.checkedInsurancePictureResult = checkedPictureResult.response;
      this.getDownloadInsurancePicture();
    },

    // 查询海外图片
    async getCheckedSalePicture() {
      let checkPictureData = {
        productId: this.$route.params.id,
        type: 3,
      };
      let checkedPictureResult = await this.$API.reqCheckUpLoadPhoto(
        checkPictureData
      );
      // console.log(checkedPictureResult);
      this.checkedSalePictureResult = checkedPictureResult.response;
      this.getDownloadSalePicture();
    },
    //查询价格图片
    async getCheckedPricePicture() {
      let checkPictureData = {
        productId: this.$route.params.id,
        type: 4,
      };
      let checkedPictureResult = await this.$API.reqCheckUpLoadPhoto(
        checkPictureData
      );
      // console.log(checkedPictureResult);
      this.checkedPricePictureResult = checkedPictureResult.response;
      this.getDownloadPricePicture();
    },

    //获取图片
    async getDownloadInsurancePicture() {
      var downloadPictureResult = "";
      var pictureSerial = "";
      // console.log(this.checkedPricePictureResult.length == 0);
      if (this.checkedInsurancePictureResult.length == 0) {
        pictureSerial = "143b7b2c-9b6f-42c3-82e4-c8e1a8c0ee681664862539";
      }
      if (this.checkedInsurancePictureResult.length !== 0) {
        pictureSerial = this.checkedInsurancePictureResult.pop().serial;
      }
      downloadPictureResult = await this.$API.reqDownloadUpLoadPhoto(
        pictureSerial
      );
      // console.log(downloadPictureResult);
      const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
      this.insurancePicture = src;
      // console.log(this.insurancePicture);
    },

    async getDownloadSalePicture() {
      var downloadPictureResult = "";
      var pictureSerial = "";
      // console.log(this.checkedPricePictureResult.length == 0);
      if (this.checkedSalePictureResult.length == 0) {
        pictureSerial = "143b7b2c-9b6f-42c3-82e4-c8e1a8c0ee681664862539";
      }
      if (this.checkedSalePictureResult.length !== 0) {
        pictureSerial = this.checkedSalePictureResult.pop().serial;
      }
      downloadPictureResult = await this.$API.reqDownloadUpLoadPhoto(
        pictureSerial
      );
      // console.log(downloadPictureResult);
      const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
      this.salePicture = src;
    },

    async getDownloadPricePicture() {
      var downloadPictureResult = "";
      var pictureSerial = "";
      // console.log(this.checkedPricePictureResult.length == 0);
      if (this.checkedPricePictureResult.length == 0) {
        pictureSerial = "143b7b2c-9b6f-42c3-82e4-c8e1a8c0ee681664862539";
      }
      if (this.checkedPricePictureResult.length !== 0) {
        pictureSerial = this.checkedPricePictureResult.pop().serial;
      }
      downloadPictureResult = await this.$API.reqDownloadUpLoadPhoto(
        pictureSerial
      );
      // console.log(downloadPictureResult);
      const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
      this.pricePicture = src;
    },

    //查询新闻图
    async getCheckedNewsPicture() {
      let checkPictureData = {
        productId: this.$route.params.id,
        type: 1,
      };
      let checkedPictureResult = await this.$API.reqCheckUpLoadPhoto(
        checkPictureData
      );
      // console.log(checkedPictureResult);
      this.checkedNewsPictureResult = checkedPictureResult.response;
      this.getNewsPicture();
    },

    //获取新闻图图片流
    getNewsPicture() {
      this.NewsPicture = [];
      this.checkedNewsPictureResult.forEach(async (res, index) => {
        // console.log(res);
        // console.log(index);
        let downloadNewsPictureResult = await this.$API.reqDownloadUpLoadPhoto(
          res.serial
        );
        // console.log(downloadNewsPictureResult);
        this.binaryData.push(downloadNewsPictureResult);
        // console.log(this.binaryData);
        this.handleNewsPicture();
      });
    },
    //处理新闻图图片流
    handleNewsPicture() {
      var data = {};
      this.binaryData.forEach((res) => {
        const src = window.URL.createObjectURL(res);
        // console.log(src);
        data["serial"] = src;
      });

      this.NewsPicture.push(data);
      // console.log(this.NewsPicture);
    },

    //获取下拉框图片添加位置
    getOptionList(val) {
      console.log(val);
      this.pictureType = val;
    },
    getShareReady() {
      const url = location.href.split("#")[0];
      let dataForWeixin = {
        title: "中医药竞争力平台 - " + this.goodsInfo.name, // 分享标题
        desc: this.goodsInfo.comment, // 内容描述
        linkurl: window.location.href.toString(), // 分享链接,该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        // img: 'http://wx.qlogo.cn/mmopen/ciaIftfPzwlo0coPuwwLS5Fw9UwGMlxY2ziaWpqXzevJI8dKeDvk4n3NxtZS4D8dNHSYUhbiaA6IIGnFsiagEbRlaExselicC3pEA/64',        // 分享内容显示的图片(图片必须是正方形的链接)
        img: "https://mmbiz.qpic.cn/mmbiz_jpg/7ZFySn5RZ9ZsCqkvibNvnrUwibMuZibu4dJB8hiausibibRMR45LkBEXUhL1wt0auYfnGsLHuw7YY5w48gT5icU5FyAgQ/0?wx_fmt=jpeg", // 分享内容显示的图片(图片必须是正方形的链接)
      };
      share.getJSSDK(url, dataForWeixin);
    },

    //使用者推荐
    async recommendTrue() {
      if (this.userinfo) {
        this.recommend = !this.recommend;
        let data = {
          productId: this.$route.params.id,
          recommend: this.recommend,
        };
        let result = await this.$API.reqRecommend(data);
        console.log(result);
      } else {
        this.$alert("您还未登录,请先登录!", {
          confirmButtonText: "确定",
        });
      }
    },

    //使用者不推荐
    async recommendFalse() {
      if (this.userinfo) {
        this.unRecommend = !this.unRecommend;
        let data = {
          productId: this.$route.params.id,
          recommend: this.unRecommend,
        };
        let result = await this.$API.reqRecommend(data);
        console.log(result);
      } else {
        this.$alert("您还未登录,请先登录!", {
          confirmButtonText: "确定",
        });
      }
    },
  },
  mounted() {
    this.getShareReady();
    this.getGoodInfo();
    this.getProductIntroduction();
    this.getProductPaper();
    this.getProductPatent();
    this.getCheckedInsurancePicture();
    this.getCheckedSalePicture();
    this.getCheckedPricePicture();
    this.getCheckedNewsPicture();
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