<template>
  <el-header>
    <el-row :gutter="10">
      <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="6"
        ><div class="grid-content"></div
      ></el-col>
      <el-col :xs="24" :sm="20" :md="18" :lg="16" :xl="12"
        ><div class="grid-content">
          <div class="header_logo">
            <a href="/">
              <img src="../assets/logo.png" />
            </a>
          </div>
          <div class="header_nav">
            <ul>
              <li>
                <router-link to="/variety">品种</router-link>
              </li>
              <li>
                <!-- <a href="/">排行榜</a> -->
                <el-col>
                  <el-dropdown>
                    <router-link to="/Rank"
                      ><span class="el-dropdown-link">
                        排行榜<i
                          class="el-icon-arrow-down el-icon--right"
                        ></i> </span
                    ></router-link>
                    <el-dropdown-menu slot="dropdown">
                      <router-link to="/TotalRank"
                        ><el-dropdown-item
                          >总排行榜</el-dropdown-item
                        ></router-link
                      >
                      <router-link to="/FeatureRank"
                        ><el-dropdown-item
                          >功能排行榜</el-dropdown-item
                        ></router-link
                      >
                      <router-link to="/ProvinceRank">
                        <el-dropdown-item
                          >省份排行榜</el-dropdown-item
                        ></router-link
                      >
                      <router-link to="/ThesisRank"
                        ><el-dropdown-item
                          >论文排行榜</el-dropdown-item
                        ></router-link
                      >
                      <router-link to="/PatentRank"
                        ><el-dropdown-item
                          >专利排行榜</el-dropdown-item
                        ></router-link
                      >
                      <router-link to="/EthnicRank"
                        ><el-dropdown-item
                          >民族药排行榜</el-dropdown-item
                        ></router-link
                      >
                      <router-link to="/InjectionRank">
                        <el-dropdown-item
                          >(非)注射排行榜</el-dropdown-item
                        ></router-link
                      >
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </li>
              <!-- <li>
                <a href="/">登录/注册</a>
              </li> -->
            </ul>
          </div>
        </div></el-col
      >
      <el-col :xs="0" :sm="2" :md="3" :lg="4" :xl="6"
        ><div class="grid-content"></div
      ></el-col>
    </el-row>
  </el-header>
</template>

<script>
export default {
  name: "shange",
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 60px;
  /* background-color: skyblue; */
}

.el-header {
  background-color: #fff;
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
}
.header_logo {
  float: left;
}

.header_logo img {
  width: 35px;
  height: 35px;
  margin-top: 12px;
}
.header_nav {
  height: 60px;
  float: left;
  margin-left: 10%;
}
.header_nav ul li {
  line-height: 60px;
  float: left;
  position: relative;
}
.header_nav ul li a {
  padding: 17px 0;
  margin-right: 68px;
  font-size: 16px;
}

.el-dropdown-link {
  cursor: pointer;
  padding: 17px 0;
  font-size: 16px;
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>