<template>
  <div class="goods">
    <div class="search_container">
      <div class="search">
        <el-input
          placeholder="请输入内容"
          v-model="input"
          clearable
          @keyup.enter.native="handleSearch()"
        >
        </el-input>
        <el-button type="danger" @click="handleSearch">搜索</el-button>
      </div>
      <div class="select">
        <el-select
          placeholder="处方药/OTC"
          v-model="value1"
          @change="getOptionOneList(value1)"
          clearable
        >
          <el-option
            v-for="item in OtcType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select
          placeholder="给药途径"
          v-model="value2"
          @change="getOptionTwoList(value2)"
          clearable
        >
          <el-option
            v-for="item in RouteType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select
          placeholder="市场准入"
          v-model="value3"
          @change="getOptionThreeList(value3)"
          clearable
        >
          <el-option
            v-for="item in AccessType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select
          placeholder="治疗领域"
          v-model="value4"
          @change="getOptionFourList(value4)"
          clearable
        >
          <el-option
            v-for="item in DomainType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="Category">
      <div class="medicine_container">
        <div class="medi_container">
          <div class="medi_title">共查询到{{ total }}种药品</div>
          <ul>
            <li v-for="(goods, index) in goodList" :key="goods.id">
              <div class="medi_main">
                <div class="main_container">
                  <router-link :to="`/product/${goods.id}/${goods.name}`">
                    <div class="logo_container">
                      <img
                        :src.async="goods.serial"
                        style="width: 100px; height: 100px; object-fit: contain"
                      />
                      <!-- <el-image
                        :src="goods.serial"
                        style="width: 100px; height: 100px; object-fit: contain"
                      ></el-image> -->
                    </div>
                  </router-link>
                  <div
                    style="position: absolute; bottom: 10px; right: 10px"
                    v-if="
                      (user && user.roles[1].nameDesc == '政策系统普通用户') ||
                      ''
                    "
                  >
                    <el-button
                      size="small"
                      type="warning"
                      @click="editList(goods)"
                      >编辑</el-button
                    >
                    <el-button
                      size="small"
                      type="danger"
                      @click="deleteList(goods)"
                      >删除</el-button
                    >
                  </div>

                  <router-link :to="`/product/${goods.id}/${goods.name}`">
                    <div class="title_container">
                      <div>
                        <span>{{ goods.name }}</span>
                        <div>生产公司:{{ goods.company }}</div>
                        <div>药品类别:{{ goods.domain }}</div>
                        <div>
                          <span
                            v-for="(tag, index) in goods.tags"
                            :key="tag.index"
                            >{{ tag }}</span
                          >
                        </div>
                      </div>
                    </div>
                  </router-link>
                  <div
                    :class="
                      goods.special ? 'container-badge el-icon-guide' : ''
                    "
                  >
                    <span v-show="goods.special">入驻产品</span>
                  </div>
                  <div
                    :class="goods.special ? 'container-badge-right' : ''"
                  ></div>
                </div>
              </div>
            </li>
          </ul>
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-size="pageSize"
            :total="total"
            layout="prev, pager, next, jumper"
            style="margin-top: 20px; text-align: center"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requests from "@/api/request";
export default {
  name: "goods",
  data() {
    return {
      input: this.$route.params.input,
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      otc: null,
      route: null,
      access: null,
      domain: null,
      province: null,
      pageNum: 1,
      pageSize: 10,
      total: 0,
      url: require("@/assets/wx_qr.png"),
      OtcType: [
        {
          value: 1,
          label: "处方药",
        },
        {
          value: 2,
          label: "非处方药",
        },
      ],
      RouteType: [
        {
          value: 1,
          label: "注射",
        },
        {
          value: 2,
          label: "口服",
        },
        {
          value: 3,
          label: "滴眼液",
        },
        {
          value: 4,
          label: "外用",
        },
      ],
      AccessType: [
        {
          value: 1,
          label: "国保",
        },
        {
          value: 2,
          label: "基药",
        },
        {
          value: 3,
          label: "国谈",
        },
        {
          value: 4,
          label: "集采",
        },
      ],
      DomainType: [
        {
          value: 1,

          label: "心脑血管疾病用药（注射类）",
        },
        {
          value: 2,

          label: "心脑血管疾病用药（口服药）",
        },
        {
          value: 3,
          label: "代谢类疾病用药",
        },
        {
          value: 4,
          label: "呼吸系统疾病用药",
        },
        {
          value: 5,
          label: "骨骼肌肉系统用药",
        },
        {
          value: 6,
          label: "泌尿系统用药",
        },
        {
          value: 7,
          label: "消化系统用药",
        },
        {
          value: 8,
          label: "肿瘤用药",
        },
        {
          value: 9,
          label: "神经系统用药",
        },
        {
          value: 10,
          label: "妇科用药",
        },
        {
          value: 11,
          label: "肛肠皮肤用药",
        },
        {
          value: 12,
          label: "五官科用药",
        },
        {
          value: 13,
          label: "儿科用药",
        },
        {
          value: 14,
          label: "补益类",
        },
      ],
      goodList: [],
      user: JSON.parse(window.sessionStorage.getItem("userinfo")),
    };
  },
  watch: {
    sendInput() {
      this.handleSearch();
    },
  },
  methods: {
    //商品控制分页模块
    handleCurrentChange(val) {
      this.$set(this, "pageNum", val);
      this.getProductInfo();
    },
    async getProductInfo() {
      const data = {
        otc: this.otc,
        route: this.route,
        access: this.access,
        domain: this.domain,
        province: this.province,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      var downloadPictureResult = "";
      var pictureSerial = "";
      try {
        let result = await this.$API.reqGetProductList(data);
        result.response.list.forEach(async (goods) => {
          if (goods.serial != "") {
            pictureSerial = goods.serial;
            goods.serialPicture = pictureSerial;
            downloadPictureResult =
              await this.$API.reqDownloadUpLoadProductPhoto(pictureSerial);
            const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
            goods.serial = src;
          } else if (goods.serial == "") {
            pictureSerial = "76ad59de-f630-4970-b380-ce72d876132d1669106871";
            goods.serialPicture = pictureSerial;
            downloadPictureResult =
              await this.$API.reqDownloadUpLoadProductPhoto(pictureSerial);
            const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
            goods.serial = src;
          }
        });
        this.goodList = result.response.list;
        console.log(this.goodList);
        this.total = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },

    async handleSearch() {
      const data = {
        otc: this.otc,
        route: this.route,
        access: this.access,
        domain: this.domain,
        name: this.input,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      try {
        let result = await this.$API.reqGetProductList(data);
        this.goodList = result.response.list;
        this.total = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
    //查看选择器选项
    getOptionOneList(val) {
      this.otc = val;
      this.getProductInfo();
    },
    getOptionTwoList(val) {
      // console.log(val);
      this.getProductInfo();
    },
    getOptionThreeList(val) {
      this.access = val;
      this.getProductInfo();
    },
    getOptionFourList(val) {
      this.domain = val;
      this.getProductInfo();
    },

    //编辑
    editList(goods) {
      // console.log(goods);
      this.$router.push({
        name: "goodsManager",
        params: {
          form: goods,
        },
      });
    },
    //删除
    async deleteList(goods) {
      // console.log(goods);
      try {
        let result = await this.$API.deleteProductInfo(goods.id);
        // console.log(result);
        this.getProductInfo();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getProductInfo();
  },
};
</script>

<style scoped>
.goods {
  margin-top: 60px;
  overflow: hidden;
}
.search_container {
  background-color: #fff;
  padding: 40px 0 0;
}
.el-select {
  /* margin: 0 2%; */
  margin: 0 10px;
}

.el-input /deep/ .el-input__inner {
  height: 43px;
  line-height: 43px;
  border: 1px solid #d7d7d7;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
  color: #333;
  border-radius: 4px 0 0 4px;
  width: 100%;
  overflow: hidden;
}

.search .el-button {
  padding: 0 15px;
  font-size: 16px;
  background: #409eff;
  color: #fff;
  font-weight: 500;
  vertical-align: middle;
  border-radius: 0 4px 4px 0;
  height: 45px;
  width: 115px;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
}

.medicine_container {
  min-height: 375px;
}
.medicine_container .medi_container {
  width: 876px;
  margin: 16px auto 0;
  position: relative;
}

.container-badge {
  position: absolute;
  top: 0;
  right: -4px;
  width: 100px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #409eff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  color: #fff;
}
.container-badge-right {
  position: absolute;
  top: 0;
  right: -14px;
  width: 0;
  height: 18px;
  border: 6px solid #000;
  border-top-color: #409eff;
  border-bottom-color: #f4f3f4;
  border-right-color: #f4f3f4;
  border-left-color: #409eff;
}
.medi_container .medi_title {
  font-family: PingFang SC;
  font-size: 14px;
  color: #605e60;
}

.medi_main .main_container:hover {
  box-shadow: 0 3px 12px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
}
.medi_main .main_container:first-child {
  margin-top: 14px;
}

.medi_main .main_container {
  position: relative;
  display: flex;
  padding: 20px 0 20px 20px;
  background-color: #fff;
  border-radius: 4px;
}

.medi_main .main_container .logo_container img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  /* margin-top: 20px; */
}
img,
input,
select {
  vertical-align: middle;
}
abbr,
acronym,
fieldset,
img {
  border: 0;
}

.medi_main .main_container .title_container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.medi_main .main_container .title_container div:first-child {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #383638;
  /* display: flex;
  align-items: center; */
}
.medi_main .main_container:hover .title_container div:first-child {
  color: #409eff;
}
.medi_main .main_container .title_container div:nth-child(2) {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #8e8c8e;
  margin-top: 4px;
}

.medi_main .main_container .title_container div:nth-child(3) {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #8e8c8e;
  margin-top: 4px;
}

.medi_main .main_container .title_container div:nth-child(4) {
  margin-top: 3px;
}

.medi_main .main_container .title_container div:nth-child(4) span {
  height: 20px;
  background-color: #f8f8f8;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 20px;
  color: #8d8b8d;
  padding: 2px 8px;
}

.medi_main
  .main_container
  .title_container
  div:nth-child(4)
  span:not(:first-child) {
  margin-left: 8px;
}

@media screen and (max-width: 500px) {
  .el-select {
    margin: 0;
    width: 45%;
    margin-top: 10px;
  }
}

@media screen and (max-width: 894px) {
  .medicine_container .medi_container {
    width: 95%;
    margin: 16px auto 0;
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    /* padding-right: 30%;
    padding-left: 30%; */
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  .select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 20px;
    width: 100%;
  }

  .el-select {
    margin: 0 2%;
    margin-top: 10px;
  }
}

@media screen and (min-width: 894px) and (max-width: 1920px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    /* padding-right: 20%;
    padding-left: 20%; */
    width: 876px;
    margin-left: auto;
    margin-right: auto;
  }

  .select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    /* width: 100%; */
    padding-right: 20%;
    padding-left: 20%;
  }

  .el-select {
    width: 200px;
    margin: 0 5px;
  }
}

@media screen and (min-width: 1920px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    /* padding-right: 30%;
    padding-left: 30%; */
    width: 876px;
    margin-left: auto;
    margin-right: auto;
  }

  .select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
  }

  .el-select {
    width: 8%;
  }
}
</style>