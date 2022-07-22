<template>
  <div id="main-container">
    <div class="content">
      <div id="content-box">
        <div class="tool-box">
          <div class="table-title">
            <div></div>
            <div>省份排行榜</div>
            <div>共X种产品</div>
          </div>
          <div class="search-select">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <input
            type="text"
            class="search-input"
            placeholder="请输入药品名称"
          />
        </div>
        <div class="rk-table-box">
          <table class="rk-table">
            <thead>
              <tr>
                <th>排名</th>
                <th>产品名称</th>
                <th>生产药业</th>
                <th>科技因子</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="ranking">1</div>
                </td>
                <td>
                  <div class="medicine-container">
                    <div class="logo">
                      <img
                        data-v-375288e5=""
                        onerror="javascript:this.src='/images/blank.svg';"
                        src="https://www.shanghairanking.cn/_uni/logo/27532357.png"
                        alt="清华大学"
                      />
                    </div>
                    <div class="medicine-name">
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <router-link to="/" class="name"
                              >安康欣胶囊</router-link
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <div class="number">国药准字Z20023377</div>
                          </div>
                        </div>
                      </div>
                      <p class="tags">发明专利: 0/相关论文: 1/未纳入医保</p>
                    </div>
                  </div>
                </td>
                <td>安徽高山药业有限公司</td>
                <td>1.485</td>
              </tr>
              <tr>
                <td>
                  <div class="ranking">1</div>
                </td>
                <td>
                  <div class="medicine-container">
                    <div class="logo">
                      <img
                        data-v-375288e5=""
                        onerror="javascript:this.src='/images/blank.svg';"
                        src="https://www.shanghairanking.cn/_uni/logo/27532357.png"
                        alt="清华大学"
                      />
                    </div>
                    <div class="medicine-name">
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <router-link to="/" class="name"
                              >安康欣胶囊</router-link
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <div class="number">国药准字Z20023377</div>
                          </div>
                        </div>
                      </div>
                      <p class="tags">发明专利: 0/相关论文: 1/未纳入医保</p>
                    </div>
                  </div>
                </td>
                <td>安徽高山药业有限公司</td>
                <td>1.485</td>
              </tr>
              <tr>
                <td>
                  <div class="ranking">1</div>
                </td>
                <td>
                  <div class="medicine-container">
                    <div class="logo">
                      <img
                        data-v-375288e5=""
                        onerror="javascript:this.src='/images/blank.svg';"
                        src="https://www.shanghairanking.cn/_uni/logo/27532357.png"
                        alt="清华大学"
                      />
                    </div>
                    <div class="medicine-name">
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <router-link to="/" class="name"
                              >安康欣胶囊</router-link
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <div class="number">国药准字Z20023377</div>
                          </div>
                        </div>
                      </div>
                      <p class="tags">发明专利: 0/相关论文: 1/未纳入医保</p>
                    </div>
                  </div>
                </td>
                <td>安徽高山药业有限公司</td>
                <td>1.485</td>
              </tr>
              <tr>
                <td>
                  <div class="ranking">1</div>
                </td>
                <td>
                  <div class="medicine-container">
                    <div class="logo">
                      <img
                        data-v-375288e5=""
                        onerror="javascript:this.src='/images/blank.svg';"
                        src="https://www.shanghairanking.cn/_uni/logo/27532357.png"
                        alt="清华大学"
                      />
                    </div>
                    <div class="medicine-name">
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <router-link to="/" class="name"
                              >安康欣胶囊</router-link
                            >
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class="tooltip">
                          <div class="link-container">
                            <div class="number">国药准字Z20023377</div>
                          </div>
                        </div>
                      </div>
                      <p class="tags">发明专利: 0/相关论文: 1/未纳入医保</p>
                    </div>
                  </div>
                </td>
                <td>安徽高山药业有限公司</td>
                <td>1.485</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div id="content-side">
      <div class="rank-table-box">
        <div class="title">
          <div></div>
          <span>排行榜侧边栏</span>
        </div>
        <div class="rank-table-line">
          <router-link to="/" class="rank-table-item">
            <span>总排行榜</span>
            <img
              src="https://www.shanghairanking.cn/_nuxt/img/arrow_right.955c17a.svg"
              alt=""
            />
          </router-link>
        </div>
        <div class="rank-table-line">
          <router-link to="/" class="rank-table-item">
            <span>功能排行榜</span>
            <img
              src="https://www.shanghairanking.cn/_nuxt/img/arrow_right.955c17a.svg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "山东",
        },
        {
          value: "选项2",
          label: "福建",
        },
        {
          value: "选项3",
          label: "台湾",
        },
        {
          value: "选项4",
          label: "河北",
        },
        {
          value: "选项5",
          label: "河南",
        },
        {
          value: "选项6",
          label: "重庆",
        },
        {
          value: "选项7",
          label: "湖南",
        },
        {
          value: "选项8",
          label: "湖北",
        },
        {
          value: "选项9",
          label: "江西",
        },
        {
          value: "选项10",
          label: "海南",
        },
        {
          value: "选项11",
          label: "黑龙江",
        },
        {
          value: "选项12",
          label: "天津",
        },
        {
          value: "选项13",
          label: "陕西",
        },
        {
          value: "选项14",
          label: "贵州",
        },
        {
          value: "选项15",
          label: "新疆",
        },
        {
          value: "选项16",
          label: "澳门",
        },
        {
          value: "选项17",
          label: "江苏",
        },
        {
          value: "选项18",
          label: "安徽",
        },
        {
          value: "选项19",
          label: "西藏",
        },
        {
          value: "选项20",
          label: "吉林",
        },
        {
          value: "选项21",
          label: "上海",
        },
        {
          value: "选项22",
          label: "山西",
        },
        {
          value: "选项23",
          label: "宁夏",
        },
        {
          value: "选项24",
          label: "甘肃",
        },
        {
          value: "选项25",
          label: "香港",
        },
        {
          value: "选项26",
          label: "四川",
        },
        {
          value: "选项27",
          label: "浙江",
        },
        {
          value: "选项28",
          label: "广西",
        },
        {
          value: "选项29",
          label: "云南",
        },
        {
          value: "选项30",
          label: "内蒙古",
        },
        {
          value: "选项31",
          label: "辽宁",
        },
        {
          value: "选项32",
          label: "广东",
        },
        {
          value: "选项33",
          label: "青海",
        },
        {
          value: "选项34",
          label: "北京",
        },
      ],
      value: "",
    };
  },
};
</script>

<style scoped>
#main-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 1180px;
  min-height: 500px;
}

.content {
  width: 880px;
  overflow: hidden;
}

#content-side {
  width: 280px;
}

#content-box {
  background-color: #fff;
  border: 1px solid #dbeaeb;
  border-radius: 4px;
}

.tool-box {
  padding: 10px 16px 10px 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-title {
  display: flex;
  width: 400px;
  align-items: center;
}

.tool-box .table-title div:first-child {
  width: 4px;
  height: 18px;
  background-color: #e5002d;
  border-radius: 0 2px 2px 0;
}

.tool-box .table-title div:nth-child(2) {
  line-height: 22;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #383638;
  text-indent: 10px;
}

.tool-box .table-title div:nth-child(3) {
  margin-left: 10px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 20px;
  color: #aeaeae;
}
.el-select {
  padding-right: 10px;
}
.search-input {
  width: 259px;
  border-radius: 4px;
  height: 40px;
  border: 1px solid #d7d7d7;
  padding-left: 10px;
  padding-right: 25px;
  font-family: PingFangSC-Regular;
  color: #312f31;
  background-image: url(https://www.shanghairanking.cn/_nuxt/img/icon_search.09b85c9.svg);
  background-repeat: no-repeat;
  background-position: right 5px top 12px;
}
.search-input:focus {
  outline: none;
  border: 1px solid #f7cece;
}
.rk-table-box {
  padding: 0 16px;
}

.rk-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: fixed;
}

.rk-table-box .rk-table thead tr th {
  text-align: center;
  vertical-align: middle;
  background-color: #f5f4f5;
  height: 50px;
  font-size: 14px;
  font-family: PingFangSC-Regular;
  color: #605e60;
  padding: 4px 5px;
  box-sizing: border-box;
}

.rk-table-box .rk-table thead tr th:first-child {
  width: 7%;
}

.rk-table-box .rk-table thead tr th:nth-child(2) {
  width: 43%;
  text-align: left;
  padding-left: 15px;
}

.rk-table-box .rk-table thead tr th:nth-child(3) {
  width: 28%;
}

.rk-table-box .rk-table thead tr th:nth-child(4) {
  width: 22%;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}

.rk-table tr {
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
}

.rk-table td {
  color: #383638;
  cursor: default;
  text-align: center;
  font-size: 14px;
  font-family: PingFangSC-Regular;
}

.rk-table td .ranking {
  display: inline-block;
  min-width: 14px;
  height: 22px;
  background-color: #efefef;
  border-radius: 4px;
  font-family: Helvetica;
  font-size: 14px;
  color: #919191;
  margin: auto;
  padding: 0 4px;
  line-height: 22px;
}

.rk-table td:nth-child(2) {
  text-align: left;
  padding-left: 15px;
}

.rk-table td .medicine-container {
  display: flex;
  align-items: center;
  padding: 16px 0;
}

.rk-table td .medicine-container .logo img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.rk-table td .medicine-container .medicine-name {
  display: flex;
  flex-direction: column;
  margin-left: 16px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.link-container {
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.name {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  line-height: 22px;
  color: #383638;
}

.name:hover {
  color: #e5002d;
}

.number {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 20px;
  color: #8e8c8e;
}

.tags {
  margin-top: 8px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #8d8b8d;
}

.rank-table-box {
  width: 280px;
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
  background-color: #e5002d;
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
  width: 250px;
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
}

.rank-table-box .rank-table-line .rank-table-item span:hover {
  color: #d60b0a;
}

.rank-table-box .rank-table-line .rank-table-item img {
  width: 14px;
}
@media screen and (min-width: 895px) and (max-width: 1210px) {
  #main-container {
    width: 100%;
    justify-content: center;
  }
  .content {
    width: 95%;
  }
  #content-side {
    display: none;
  }
}
@media screen and (min-width: 540px) and (max-width: 894px) {
  #main-container {
    width: 100%;
  }
  .content {
    width: 100%;
    overflow: hidden;
  }
  #content-side {
    display: none;
  }

  .rk-table-box .rk-table thead tr th:nth-child(4) {
    width: 0;
    display: none;
  }

  .rk-table td:nth-child(4) {
    color: #383638;
    cursor: default;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    display: none;
  }
}

@media screen and (max-width: 540px) {
  #main-container {
    width: 100%;
    justify-content: center;
  }
  .content {
    width: 95%;
  }
  #content-side {
    display: none;
  }

  .rk-table-box .rk-table thead tr th:nth-child(3) {
    width: 0;
    display: none;
  }

  .rk-table-box .rk-table thead tr th:nth-child(4) {
    width: 0;
    display: none;
  }

  .rk-table td:nth-child(3) {
    color: #383638;
    cursor: default;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    display: none;
  }
  .rk-table td:nth-child(4) {
    color: #383638;
    cursor: default;
    text-align: center;
    font-size: 14px;
    font-family: PingFangSC-Regular;
    display: none;
  }
  .el-select {
    width: 100px;
  }
  .search-input {
    width: 100px;
  }
  .tool-box .table-title div:nth-child(3) {
    display: none;
    margin-left: 10px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    line-height: 20px;
    color: #aeaeae;
  }
}
</style>