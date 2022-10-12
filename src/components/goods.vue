<template>
  <div class="goods">
    <div class="search_container">
      <div class="search">
        <el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
        <el-button type="danger">搜索</el-button>
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
              <router-link :to="`/product/${goods.id}/${goods.name}`">
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
    };
  },
  methods: {
    //商品控制分页模块
    handleCurrentChange(val) {
      console.log(val);
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
      try {
        let result = await this.$API.reqGetProductList(data);
        console.log(result);
        this.goodList = result.response.list;
        this.total = result.response.total;
      } catch (error) {
        console.log(error.message);
      }
    },
    //查看选择器选项
    getOptionOneList(val) {
      console.log(val);
      this.otc = val;
      this.getProductInfo();
    },
    getOptionTwoList(val) {
      this.route = val;
      console.log(val);
      this.getProductInfo();
    },
    getOptionThreeList(val) {
      this.access = val;
      console.log(val);
      this.getProductInfo();
    },
    getOptionFourList(val) {
      this.domain = val;
      console.log(val);
      this.getProductInfo();
    },
  },
  mounted() {
    this.getProductInfo();
  },
  // created() {
  //   this.value1 = this.OtcType[0].value;
  //   this.value2 = this.RouteType[0].value;
  //   this.value3 = this.AccessType[0].value;
  //   this.value4 = this.DomainType[0].value;
  // },
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
    margin: 0 2%;
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
    /* width: 100%; */
    padding-right: 20%;
    padding-left: 20%;
  }

  .el-select {
    /* width: 5%; */
    margin: 0 5px;
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

  .el-select {
    width: 8%;
  }
}
</style>