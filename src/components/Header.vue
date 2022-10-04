<template>
  <el-header>
    <div class="header_nav">
      <div class="header_logo">
        <a href="/">
          <img src="http://plc.bbtcml.com/img/1639812519(1).8527a9d1.jpg" />
        </a>
      </div>
      <ul :class="menu ? 'nav-links' : 'mobile-menu'">
        <li class="active" @click="menuBtn">
          <router-link to="/home">首页</router-link>
        </li>
        <!-- <li>
                <router-link to="/variety">品种</router-link>
              </li> -->
        <li @click="menuBtn">
          <router-link to="/companies">企业</router-link>
        </li>
        <li @click="menuBtn">
          <router-link to="/goods">产品</router-link>
        </li>
        <li>
          <el-col>
            <el-dropdown
              split-button
              type="text"
              trigger="click"
              style="color: black; margin-top: 3px"
            >
              <router-link to="/Rank"
                ><span class="el-dropdown-link" @click="menuBtn"
                  >排行榜</span
                ></router-link
              >
              <el-dropdown-menu slot="dropdown">
                <router-link to="/TotalRank"
                  ><el-dropdown-item
                    ><span @click="menuBtn">总排行榜</span></el-dropdown-item
                  ></router-link
                >
                <router-link to="/FeatureRank"
                  ><el-dropdown-item
                    ><span @click="menuBtn">功能排行榜</span></el-dropdown-item
                  ></router-link
                >
                <router-link to="/ProvinceRank">
                  <el-dropdown-item
                    ><span @click="menuBtn">省份排行榜</span></el-dropdown-item
                  ></router-link
                >
                <router-link to="/ThesisRank"
                  ><el-dropdown-item
                    ><span @click="menuBtn">论文排行榜</span></el-dropdown-item
                  ></router-link
                >
                <router-link to="/PatentRank"
                  ><el-dropdown-item
                    ><span @click="menuBtn">专利排行榜</span></el-dropdown-item
                  ></router-link
                >
                <router-link to="/EthnicRank"
                  ><el-dropdown-item
                    ><span @click="menuBtn"
                      >民族药排行榜</span
                    ></el-dropdown-item
                  ></router-link
                >
                <router-link to="/InjectionRank">
                  <el-dropdown-item
                    ><span @click="menuBtn"
                      >(非)注射排行榜</span
                    ></el-dropdown-item
                  ></router-link
                >
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </li>
        <li class="loginAndRegister" @click="menuBtn">
          <span @click="$router.push('/login')">登录</span>
          <span @click="$router.push('/register')">/注册</span>
        </li>
      </ul>
      <img
        src="@/assets/menu-btn.png"
        alt=""
        class="menu-btn"
        @click="menuBtn"
      />
    </div>
  </el-header>
</template>

<script>
export default {
  name: "shange",
  data() {
    return {
      menu: true,
    };
  },
  methods: {
    menuBtn() {
      this.menu = !this.menu;
      // console.log(this.menu);
    },
  },
  mounted() {},
};
</script>

<style scoped>
.el-header {
  background-color: #fff;
  position: fixed;
  z-index: 1024;
  min-width: 100%;
  box-shadow: 0 2px 3px hsla(0, 0%, 7%, 0.1), 0 0 0 1px hsla(0, 0%, 7%, 0.1);
}

.header_nav {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  justify-content: center;
  /* padding: 20px; */
  columns: whitesmoke;
}
.header_logo img {
  width: 150px;
  height: 35px;
  margin-top: 12px;
}
.nav-links {
  display: flex;
  align-items: center;
}
.mobile-menu {
  display: flex;
  align-items: center;
}
.el-button--text {
  color: red;
}
.nav-links li {
  margin: 0 30px;
}
.mobile-menu li {
  margin: 0 30px;
}
.active a {
  color: #409eff;
  /* text-decoration: underline; */
  font-weight: bold;
}
.menu-btn {
  display: none;
  position: absolute;
  top: 15px;
  right: 30px;
  width: 40px;
  background-color: #111;
  cursor: pointer;
}
.el-dropdown-link {
  cursor: pointer;
  /* padding: 17px 0; */
  font-size: 16px;
  color: black;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/* .demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
} */

.loginAndRegister {
  cursor: pointer;
}

@media only screen and (max-width: 850px) {
  .header_nav {
    padding: 0;
  }
  .header_logo img {
    width: 150px;
    height: 35px;
    position: absolute;
  }

  .nav-links {
    flex-direction: column;
    width: 100%;
    height: 60px;
    justify-content: center;
    background-color: #fff;
    margin-top: -999px;
    transition: all 0.5s ease;
  }
  .mobile-menu {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    background-color: #fff;
    margin-top: 0px;
    display: flex;
    align-items: center;
    transition: all 0.5s ease;
    border-bottom-right-radius: 30%;
    /* border-bottom-left-radius: 30%; */
  }
  .menu-btn {
    display: block;
  }
  .mobile-menu li {
    margin: 30px auto;
    /* margin: 0 30px; */
  }
}
</style>