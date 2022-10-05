<template>
  <div class="goods">
    <div class="search_container">
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
        <el-button type="danger">搜索</el-button>
      </div>
      <div class="select">
        <el-select placeholder="处方药/OTC" v-model="value1">
          <el-option
            v-for="item in OtcType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select placeholder="给药途径" v-model="value2">
          <el-option
            v-for="item in RouteType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select placeholder="市场准入" v-model="value3">
          <el-option
            v-for="item in AccessType"
            :key="item.id"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select placeholder="治疗领域" v-model="value4">
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
              <router-link :to="`/product/${goods.id}`">
                <div class="medi_main">
                  <div class="main_container">
                    <!-- <div class="logo_container">
                      <img
                        data-v-375288e5=""
                        onerror="javascript:this.src='/images/blank.svg';"
                        src="https://www.shanghairanking.cn/_uni/logo/27532357.png"
                        alt="清华大学"
                      />
                    </div> -->
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
                  </div>
                </div>
              </router-link>
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
      query: {
        page: 1,
        size: 20,
        total: 1110,
      },
      input: "",
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
      OtcType: [
        {
          id: 1,
          value: "RX",
          label: "处方药",
        },
        {
          id: 2,
          value: "OTC",
          label: "非处方药",
        },
      ],
      RouteType: [
        {
          id: 1,
          value: "ZS",
          label: "注射",
        },
        {
          id: 2,
          value: "KF",
          label: "口服",
        },
        {
          id: 3,
          value: "DYY",
          label: "滴眼液",
        },
        {
          id: 4,
          value: "WY",
          label: "外用",
        },
      ],
      AccessType: [
        {
          id: 1,
          value: "GB",
          label: "国保",
        },
        {
          id: 2,
          value: "JY",
          label: "基药",
        },
        {
          id: 3,
          value: "GT",
          label: "国谈",
        },
        {
          id: 4,
          value: "JC",
          label: "集采",
        },
      ],
      DomainType: [
        {
          id: 1,
          value: "XNXGZS",
          label: "心脑血管疾病用药（注射类）",
        },
        {
          id: 2,
          value: "XNXGKF",
          label: "心脑血管疾病用药（口服药）",
        },
        {
          id: 3,
          value: "DX",
          label: "代谢类疾病用药",
        },
        {
          id: 4,
          value: "HX",
          label: "呼吸系统疾病用药",
        },
        {
          id: 5,
          value: "GG",
          label: "骨骼肌肉系统用药",
        },
        {
          id: 6,
          value: "MN",
          label: "泌尿系统用药",
        },
        {
          id: 7,
          value: "XH",
          label: "消化系统用药",
        },
        {
          id: 8,
          value: "ZL",
          label: "肿瘤用药",
        },
        {
          id: 9,
          value: "SJ",
          label: "神经系统用药",
        },
        {
          id: 10,
          value: "FK",
          label: "妇科用药",
        },
        {
          id: 11,
          value: "GC",
          label: "肛肠皮肤用药",
        },
        {
          id: 12,
          value: "WG",
          label: "五官科用药",
        },
        {
          id: 13,
          value: "EK",
          label: "儿科用药",
        },
        {
          id: 14,
          value: "BY",
          label: "补益类",
        },
      ],
      goodList: [],
    };
  },
  methods: {
    //商品控制分页模块
    handleCurrentChange() {},
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
      try {
        let result = await this.$API.reqGetProductList(data);
        console.log(result);
        this.goodList = result.response.list;
        this.total = result.response.total;
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
  margin: 0 30px;
}
@media screen and (max-width: 768px) {
  .search {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding-bottom: 40px;
    padding-right: 15%;
    padding-left: 15%;
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
    /* margin: 0 2%; */
    margin-top: 10px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1920px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-right: 20%;
    padding-left: 20%;
  }

  .select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
  }
}

@media screen and (min-width: 1920px) {
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    padding-right: 30%;
    padding-left: 30%;
  }

  .select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    width: 100%;
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
  background: #d60b0a;
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
  color: #d60b0a;
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
}
</style>