<template>
  <div id="companyDetails">
    <div class="introduction">
      <div class="introduction-container">
        <div class="company-img">
          <el-image :src="CompanyInfo.serial">
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
        <div class="company-title">
          <div>
            <div class="company-title-name">{{ CompanyInfo.name }}</div>
            <div class="company-title-tag">
              {{ CompanyInfo.tagJson.toString() }}
            </div>
          </div>
        </div>
        <div class="company-introduce">
          <div class="company-introduce-container">
            <span :class="showDetail ? 'showFalse' : ''"
              >公司简介:{{ CompanyInfo.details }}</span
            >
            <span
              @click="
                exchangeButton = !exchangeButton;
                showDetail = !showDetail;
              "
            >
              <span style="cursor: pointer; color: #409eff">
                {{ exchangeButton ? "展开" : "收起" }}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="introduction-container-mobile">
        <div class="company-img">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
        <div class="company-title">
          <div class="company-title-name">{{ CompanyInfo.name }}</div>
          <div class="company-title-tag">
            {{ CompanyInfo.tagJson.toString() }}
          </div>
        </div>
        <div class="company-introduce">
          <div class="company-introduce-container">
            <span :class="showDetail ? 'showFalse' : ''"
              >公司简介:{{ CompanyInfo.details }}</span
            >
            <div
              @click="
                exchangeButton = !exchangeButton;
                showDetail = !showDetail;
              "
            >
              <p style="cursor: pointer">
                {{ exchangeButton ? "展开" : "收起" }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- <div
        class="search"
        style="width: 200px; position: absolute; top: 0; right: 0; z-index: 1"
      >
        <el-input
          placeholder="请输入搜索年份"
          v-model="searchYear"
          suffix-icon="el-icon-search"
          @keyup.enter.native="seachEnter"
        >
        </el-input>
      </div> -->
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="科研论文" name="second">
          <el-table
            :data="paperList"
            stripe
            style="width: 100%"
            v-if="activeName === 'second'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="title" label="论文名称" width="420">
              <template slot-scope="scope">
                <!-- tips悬浮提示 -->
                <el-tooltip placement="top" :open-delay="500" effect="light">
                  <div slot="content">{{ scope.row.title }}</div>
                  <div class="mytitle">
                    {{ scope.row.title }}
                  </div>
                </el-tooltip>
              </template>
            </el-table-column>
            <el-table-column prop="author" label="作者" width="270">
            </el-table-column>
            <el-table-column prop="journal" label="期刊名称" width="180">
            </el-table-column>
            <el-table-column
              prop="year"
              label="发表年份"
              width="100"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="type" label="期刊类型" width="100">
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
        <el-tab-pane label="发明专利" name="third">
          <el-table
            :data="patentList"
            stripe
            style="width: 100%"
            v-if="activeName === 'third'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="专利名称" width="580">
            </el-table-column>
            <el-table-column prop="type" label="专利类型" width="140">
            </el-table-column>
            <el-table-column prop="status" label="法律状态" width="140">
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
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="获奖项目" width="490">
            </el-table-column>
            <el-table-column prop="issued" label="颁奖单位" width="180">
            </el-table-column>
            <el-table-column prop="level" label="奖励等级" width="180">
            </el-table-column>
            <el-table-column prop="type" label="奖励类型" width="120">
            </el-table-column>
            <el-table-column
              prop="year"
              label="获奖年份"
              width="100"
              align="center"
            >
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
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="项目名称" width="730">
            </el-table-column>
            <el-table-column prop="level" label="项目等级" width="120">
            </el-table-column>
            <el-table-column prop="type" label="项目类型" width="120">
            </el-table-column>
            <el-table-column
              prop="year"
              label="项目年份"
              width="100"
              align="center"
            >
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
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="获奖项目" width="790">
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
      <div id="content-side-product">
        <div class="rank-table-box">
          <div class="title">
            <div></div>
            <span>筛选产品</span>
            <span class="el-icon-refresh" @click="refresh"></span>
          </div>
          <ul>
            <li
              class="rank-table-line"
              v-for="(item, index) in productList"
              :key="index"
              @click="change(index)"
              :class="{ activeColors: index == current }"
            >
              <span class="rank-table-item" @click="getProductInfo(item.id)">
                <span>{{ item.name }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div id="content-side">
        <div class="rank-table-box">
          <div class="title">
            <div></div>
            <span>筛选年份</span>
            <span class="el-icon-refresh" @click="refresh"></span>
          </div>
          <ul>
            <li
              class="rank-table-line"
              v-for="(item, index) in options"
              :key="item.value"
              @click="changeYearIndex(index)"
              :class="{ activeColors: index == currentYear }"
            >
              <span class="rank-table-item" @click="getYearInfo(item.value)">
                <span>{{ item.value }}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      tableData: [],
      activeName: "second",
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
      CompanyInfo: {
        tagJson: "",
      },
      exchangeButton: true,
      showDetail: true,
      searchYear: "",
      options: [
        {
          value: 2021,
          label: "2021",
        },
        {
          value: 2020,
          label: "2020",
        },
        {
          value: 2019,
          label: "2019",
        },
        {
          value: 2018,
          label: "2018",
        },
        {
          value: 2017,
          label: "2017",
        },
        {
          value: 2016,
          label: "2016",
        },
        {
          value: 2015,
          label: "2015",
        },
        {
          value: 2014,
          label: "2014",
        },
        {
          value: 2013,
          label: "2013",
        },
        {
          value: 2012,
          label: "2012",
        },
      ],
      productList: [],
      current: -1,
      currentYear: -1,
    };
  },

  created() {
    //获取父级传递的信息
    this.CompanyInfo = this.$route.query;
  },
  methods: {
    //回车搜索
    // seachEnter() {
    //   this.getCompanyPaper();
    //   this.getCompanyPatent();
    //   this.getCompanyAward();
    //   this.getCompanySupport();
    //   this.getCompanyGc();
    // },
    change(index) {
      this.current = index;
    },
    changeYearIndex(index) {
      this.currentYear = index;
    },

    //年份选择
    getYearInfo(year) {
      console.log(year);
      this.searchYear = year;
      this.getCompanyPaper();
      this.getCompanyPatent();
      this.getCompanyAward();
      this.getCompanySupport();
      this.getCompanyGc();
    },
    //获取产品论文列表
    async getCompanyPaper() {
      try {
        const data = {
          companyId: this.$route.query.id,
          pageNum: this.paperQuery.pageNum,
          pageSize: this.paperQuery.pageSize,
          year: this.searchYear,
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
        // this.paperList = result.response.list;
        this.paperQuery.paperTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },

    //获取产品专利列表
    async getCompanyPatent() {
      try {
        const data = {
          companyId: this.$route.query.id,
          pageNum: this.patentQuery.pageNum,
          pageSize: this.patentQuery.pageSize,
          year: this.searchYear,
        };
        let result = await this.$API.reqGetCompanyOrProductPatent(data);
        // console.log(result);
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
          companyId: this.$route.query.id,
          pageNum: this.awardQuery.pageNum,
          pageSize: this.awardQuery.pageSize,
          year: this.searchYear,
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
          companyId: this.$route.query.id,
          pageNum: this.supportQuery.pageNum,
          pageSize: this.supportQuery.pageSize,
          year: this.searchYear,
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
          companyId: this.$route.query.id,
          pageNum: this.gcQuery.pageNum,
          pageSize: this.gcQuery.pageSize,
          year: this.searchYear,
        };
        let result = await this.$API.reqGetCompanyGc(data);
        this.gcList = result.response.list;
        this.gcQuery.gcTotal = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品筛选
    async getProductQuery() {
      try {
        const data = {
          companyId: this.$route.query.id,
          // year: this.searchYear,
        };
        let result = await this.$API.getProductQuery(data);
        console.log(result);
        this.productList = result.response;
      } catch (error) {
        console.log(error.message);
      }
    },

    //刷新页面 更新为原始列表
    refresh() {
      this.reload();
    },

    //获取产品信息列表
    async getProductInfo(id) {
      try {
        const data = {
          productId: id,
          pageNum: this.supportQuery.pageNum,
          pageSize: this.supportQuery.pageSize,
        };
        let resultPaper = await this.$API.reqGetCompanyOrProductPaper(data);
        let resultPatent = await this.$API.reqGetCompanyOrProductPatent(data);
        let resultAward = await this.$API.reqGetCompanyAward(data);
        let resultSupport = await this.$API.reqGetCompanySupport(data);
        let resultGc = await this.$API.reqGetCompanyGc(data);

        for (var i = 0; i < resultPaper.response.list.length; i++) {
          var reg = new RegExp("%", "g"); //g表示全部的
          //         // //将json转换为字符串   将被替换内容替换为替换内容
          let str = JSON.stringify(resultPaper.response).replace(reg, ",");
          var replaceData = JSON.parse(str);
          // console.log(data);
        }
        this.paperList = replaceData.list;
        this.paperQuery.paperTotal = resultPaper.response.total;
        this.patentList = resultPatent.response.list;
        this.patentQuery.patentTotal = resultPatent.response.total;
        this.awardList = resultAward.response.list;
        this.awardQuery.awardTotal = resultAward.response.total;
        this.supportList = resultSupport.response.list;
        this.supportQuery.supportTotal = resultSupport.response.total;
        this.gcList = resultGc.response.list;
        this.gcQuery.gcTotal = resultGc.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },

    handleCurrentChangePaper(val) {
      // console.log(val);
      this.$set(this.paperQuery, "pageNum", val);
      this.getCompanyPaper();
    },
    handleCurrentChangePatent(val) {
      // console.log(val);
      this.$set(this.patentQuery, "pageNum", val);
      this.getCompanyPatent();
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
  },
  mounted() {
    this.getCompanyPaper();
    this.getCompanyPatent();
    this.getCompanyAward();
    this.getCompanySupport();
    this.getCompanyGc();
    this.getProductQuery();
  },
};
</script>

<style scoped>
.activeColors {
  background-color: #f9f9f9;
  border-bottom: 1px solid #409eff;
}

#companyDetails {
  overflow: hidden;
  margin-top: 60px;
}

#companyDetails .introduction {
  /* background-color: #fff; */
  padding: 10px;
}
#companyDetails .introduction-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
}
#companyDetails .company-img {
  /* margin: 10px; */
  /* background-color: #111; */
  height: 100%;
  width: 20vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  /* object-fit: cover; */
}
#companyDetails .el-image {
  padding: 10px;
}
#companyDetails .company-title {
  /* background-color: #ccc; */
  height: 100%;
  /* margin-top: 10vmin; */
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#companyDetails .company-title-name {
  /* margin-top: 20%; */
  /* background-color: red; */
  color: #111;
  font-size: 24px;
  font-weight: bolder;
  font-family: "Party LET";
}
#companyDetails .company-title-tag {
  /* background-color: blue; */
  margin-top: 5px;
  color: #ccc;
}

#companyDetails .company-introduce {
  /* background-color: #ddd; */
  /* border-left: 1px solid #ccc; */
  height: 100%;
  width: 65%;
  line-height: 40px;
}
#companyDetails .company-introduce-container {
  margin-top: 30px;
  margin-left: 20px;
}
#companyDetails .container {
  width: 1180px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}
#companyDetails .el-tabs {
  width: 100%;
}

#companyDetails .introduction-container-mobile {
  display: none;
}
.showFalse {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.mytitle {
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
#content-side {
  position: absolute;
  width: 100px;
  top: 0px;
  right: -110px;
}
#content-side-product {
  position: absolute;
  width: 100px;
  top: 0px;
  left: -130px;
}

.rank-table-box {
  width: 120px;
  background-color: #fff;
  border-radius: 4px;
}

.rank-table-box .title {
  height: 50px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
}

.rank-table-box .title div {
  width: 4px;
  height: 18px;
  background-color: #409eff;
  border-radius: 0 2px 2px 0;
}
.rank-table-box .title span {
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  line-height: 50px;
  color: #383638;
  padding-left: 12px;
}

.rank-table-box .rank-table-line:hover {
  background-color: #f9f9f9;
}

.rank-table-box .rank-table-line .rank-table-item {
  width: 120px;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
  margin: 0 auto;
}

.rank-table-box .rank-table-line .rank-table-item span {
  font-weight: 500;
  font-size: 14px;
  font-family: PingFang SC;
  color: #312f31;
  margin: 0 auto;
  cursor: pointer;
}

.rank-table-box .rank-table-line .rank-table-item span:hover {
  color: #d60b0a;
}

.rank-table-box .rank-table-line .rank-table-item img {
  width: 14px;
}
@media screen and (max-width: 768px) {
  #companyDetails .introduction-container {
    width: 100%;
    display: none;
  }
  #companyDetails .introduction-container-mobile {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    margin-right: auto;
    margin-left: auto;
    /* height: 200px; */
    background-color: #fff;
    border-radius: 10px;
  }
  #companyDetails .introduction-container-mobile .company-img {
    /* margin: 10px; */
    /* background-color: #111; */
    height: 80%;
    width: 80%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    /* object-fit: cover; */
  }
  #companyDetails .el-image {
    padding: 0;
    margin-top: 10px;
    border-radius: 10px;
  }
  #companyDetails .introduction-container-mobile .company-title {
    /* background-color: #ccc; */
    height: 100%;
    margin-top: 10px;
    width: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
  }
  #companyDetails .company-title-name {
    /* margin-top: 20%; */
    /* background-color: red; */
    color: #111;
    font-size: 24px;
    font-weight: bolder;
    font-family: "Party LET";
  }
  #companyDetails .company-title-tag {
    /* background-color: blue; */
    margin-top: 5px;
    color: #ccc;
  }

  #companyDetails .introduction-container-mobile .company-introduce {
    /* background-color: #ddd;   */
    /* border-left: 1px solid #ccc; */
    height: 100%;
    width: 80%;
  }
  #companyDetails .introduction-container-mobile .company-introduce-container {
    margin-top: 10px;
    margin-left: 0;
  }
  #companyDetails .container {
    width: 98%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1250px) {
  #companyDetails .introduction-container {
    width: 100%;
  }

  #companyDetails .container {
    width: 98%;
  }
}
#companyDetails .el-table__body-wrapper::-webkit-scrollbar {
  /*width: 0;宽度为0隐藏*/
  width: 0px;
}
</style>