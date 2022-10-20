<template>
  <div class="company">
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
    </div>
    <div class="Category">
      <div class="medicine_container">
        <div class="medi_container">
          <div class="medi_title">共查询到{{ total }}家企业</div>
          <ul>
            <li v-for="(company, index) in companyList" :key="company.id">
              <div @click="toCompanyDetail(company)">
                <div class="medi_main">
                  <div class="main_container">
                    <!-- <div class="logo_container">
                      <img
                        data-v-375288e5=""
                        src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        alt=""
                      />
                    </div> -->
                    <div class="title_container">
                      <div>
                        <span>{{ company.name }}</span>
                        <div>省份:{{ company.province }}</div>
                        <div>简介:{{ company.details }}</div>
                        <div>
                          <p
                            style="
                              display: inline-block;
                              color: #111;
                              font-size: small;
                            "
                          >
                            标签:
                          </p>
                          <span
                            v-for="(tag, index) in JSON.parse(company.tagJson)"
                            >{{ tag }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
export default {
  name: "company",
  data() {
    return {
      input: "",
      pageNum: 1,
      pageSize: 10,
      total: 0,
      companyList: [],
      companyId: 0,
    };
  },
  methods: {
    //获取公司列表
    async getCompanyList() {
      let data = {};
      data["pageNum"] = this.pageNum;
      data["pageSize"] = this.pageSize;
      try {
        let result = await this.$API.reqGetCompanyList(data);
        console.log(result);
        this.companyList = result.response.list;
        this.total = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },

    //控制分页
    handleCurrentChange(val) {
      // console.log(val);
      this.$set(this, "pageNum", val);
      this.getCompanyList();
    },
    toCompanyDetail(query) {
      this.$router.push({
        name: "companyDetails",
        query: {
          id: query.id,
          name: query.name,
          details: query.details,
          tagJson: JSON.parse(query.tagJson),
        },
      });
    },

    async handleSearch() {
      let data = {
        name: this.input,
        pageNum: this.pageNum,
        pageSize: this.pageSize,
      };
      try {
        let result = await this.$API.reqGetCompanyList(data);
        // console.log(result);
        this.companyList = result.response.list;
        this.total = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
  },

  mounted() {
    this.getCompanyList();
  },
  computed: {},
};
</script>

<style scoped>
.company {
  margin-top: 60px;
  overflow: hidden;
}
.search_container {
  background-color: #fff;
  padding: 40px 0 0;
}
@media screen and (max-width: 768px) {
  .search {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding-bottom: 40px;
    /* padding-right: 15%;
    padding-left: 15%; */
    width: 95%;
  }
}

@media screen and (min-width: 768px) and (max-width: 1920px) {
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

.el-button {
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
  margin-top: 20px;
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
}
</style>