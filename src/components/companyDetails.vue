<template>
  <div id="companyDetails">
    <div class="introduction">
      <div class="introduction-container">
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
            公司简介:{{ CompanyInfo.details }}
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
            公司简介:{{ CompanyInfo.details }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="生产品种" name="first">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            border
            v-if="activeName === 'first'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="mingcheng"
              label="名称"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="gongneng"
              label="功能主治"
              width="width"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="caozuo"
              label="操作"
              width="80"
              fixed="right"
            >
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="科研论文" name="second">
          <el-table
            :data="paperList"
            stripe
            style="width: 100%"
            border
            v-if="activeName === 'second'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="title" label="论文名称" width="180">
            </el-table-column>
            <el-table-column prop="author" label="作者" width="180">
            </el-table-column>
            <el-table-column prop="journal" label="期刊名称" width="180">
            </el-table-column>
            <el-table-column prop="year" label="发表年份"> </el-table-column>
            <el-table-column prop="type" label="期刊类型"> </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="发明专利" name="third">
          <el-table
            :data="patentList"
            stripe
            style="width: 100%"
            border
            v-if="activeName === 'third'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
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
        <el-tab-pane label="科技奖励" name="forth">
          <el-table
            :data="awardList"
            stripe
            style="width: 100%"
            border
            v-if="activeName === 'forth'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="获奖项目" width="180">
            </el-table-column>
            <el-table-column prop="issued" label="颁奖单位" width="180">
            </el-table-column>
            <el-table-column prop="level" label="奖励等级" width="width">
            </el-table-column>
            <el-table-column prop="type" label="奖励类型" width="width">
            </el-table-column>
            <el-table-column prop="year" label="获奖年份" width="width">
            </el-table-column></el-table
        ></el-tab-pane>
        <el-tab-pane label="科技项目" name="fifth">
          <el-table
            :data="supportList"
            stripe
            style="width: 100%"
            border
            v-if="activeName === 'fifth'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="项目名称" width="180">
            </el-table-column>
            <el-table-column prop="level" label="项目等级" width="width">
            </el-table-column>
            <el-table-column prop="type" label="项目类型" width="width">
            </el-table-column>
            <el-table-column prop="year" label="项目年份" width="width">
            </el-table-column></el-table
        ></el-tab-pane>
        <el-tab-pane label="指南共识" name="sixth">
          <el-table
            :data="gcList"
            stripe
            style="width: 100%"
            border
            v-if="activeName === 'sixth'"
          >
            <el-table-column
              label="序号"
              type="index"
              width="80"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="name" label="获奖项目" width="width">
            </el-table-column>
            <el-table-column prop="issued" label="发布单位" width="width">
            </el-table-column>
            <el-table-column prop="year" label="发布时间" width="width">
            </el-table-column></el-table
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      pageNum: 1,
      pageSize: 10,
      paperList: [],
      patentList: [],
      supportList: [],
      awardList: [],
      gcList: [],
      CompanyInfo: {
        tagJson: "",
      },
    };
  },
  created() {
    //获取父级传递的信息
    this.CompanyInfo = this.$route.query;
  },
  methods: {
    //获取产品论文列表
    async getCompanyPaper() {
      try {
        const data = {
          companyId: this.$route.query.id,
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
    async getCompanyPatent() {
      try {
        const data = {
          companyId: this.$route.query.id,
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
    //获取产品奖励列表
    async getCompanyAward() {
      try {
        const data = {
          companyId: this.$route.query.id,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        };
        let result = await this.$API.reqGetCompanyAward(data);
        // console.log(result);
        this.awardList = result.response.list;
      } catch (error) {
        console.log(error.message);
      }
    },

    //获取产品项目列表
    async getCompanySupport() {
      try {
        const data = {
          companyId: this.$route.query.id,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        };
        let result = await this.$API.reqGetCompanySupport(data);
        console.log(result);
        this.supportList = result.response.list;
      } catch (error) {
        console.log(error.message);
      }
    },
    //获取产品指南列表
    async getCompanyGc() {
      try {
        const data = {
          companyId: this.$route.query.id,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        };
        let result = await this.$API.reqGetCompanyGc(data);
        console.log(result);
        this.gcList = result.response.list;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  mounted() {
    this.getCompanyPaper();
    this.getCompanyPatent();
    this.getCompanyAward();
    this.getCompanySupport();
    this.getCompanyGc();
  },
};
</script>

<style>
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
  height: 200px;
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
  margin-top: 10vmin;
  width: 15%;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: column; */
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
}
#companyDetails .el-tabs {
  width: 100%;
}

#companyDetails .introduction-container-mobile {
  display: none;
}
@media only screen and (max-width: 768px) {
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