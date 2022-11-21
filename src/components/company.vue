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
              <div>
                <div class="medi_main">
                  <div class="main_container">
                    <div class="logo_container">
                      <img
                        :src.async="company.serial"
                        alt=""
                        style="width: 100px; height: 100px; object-fit: contain"
                      />
                    </div>
                    <div
                      style="position: absolute; top: 10px; right: 10px"
                      v-if="
                        (user &&
                          user.roles[1].nameDesc == '政策系统普通用户') ||
                        ''
                      "
                    >
                      <el-button
                        size="small"
                        type="warning"
                        @click="editList(company)"
                        >编辑</el-button
                      >
                      <el-button
                        size="small"
                        type="danger"
                        @click="deleteList(company)"
                        >删除</el-button
                      >
                    </div>
                    <div
                      class="title_container"
                      @click="toCompanyDetail(company)"
                    >
                      <div>
                        <span>{{ company.name }}</span>
                        <div>
                          省份:{{ company.province }}
                          <p
                            style="
                              display: inline-block;
                              margin-left: 3px;
                              color: #8e8c8e;
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

                        <div>简介:{{ company.details }}</div>
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

      user: JSON.parse(window.sessionStorage.getItem("userinfo")),
    };
  },
  methods: {
    //获取公司列表
    async getCompanyList() {
      let data = {};
      var downloadPictureResult = "";
      var pictureSerial = "";
      data["pageNum"] = this.pageNum;
      data["pageSize"] = this.pageSize;
      try {
        let result = await this.$API.reqGetCompanyList(data);
        result.response.list.forEach(async (company) => {
          // console.log(company);
          company.details =
            company.details.length > 240
              ? company.details.substring(0, 240) + "..."
              : company.details;

          pictureSerial = company.serial;
          downloadPictureResult = await this.$API.reqDownloadUpLoadCompanyPhoto(
            pictureSerial
          );

          const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
          company.serial = src;
          // console.log(company.serial);
        });
        // console.log(result.response.list);
        this.companyList = result.response.list;
        // console.log(this.companyList);

        this.total = result.response.total;
        // console.log(this.total);
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
          serial: query.serial,
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
    //编辑
    editList(company) {
      // console.log(company);
      this.$router.push({
        name: "companyManager",
        params: {
          form: company,
        },
      });
    },
    //删除
    async deleteList(company) {
      // console.log(company);
      try {
        let result = await this.$API.deleteCompanyInfo(company.id);
        console.log(result);
        this.getCompanyList();
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
  padding: 20px;
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
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

/* .medi_main .main_container .title_container div:nth-child(4) {
  margin-top: 3px;
} */

.medi_main .main_container .title_container div:nth-child(2) span {
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