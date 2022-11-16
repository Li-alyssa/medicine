<template>
  <el-header>
    <div class="header_nav">
      <div class="header_logo">
        <router-link to="/home">
          <img src="http://plc.bbtcml.com/img/1639812519(1).8527a9d1.jpg" />
        </router-link>
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
                <ul>
                  <li
                    v-for="(rank, index) in rankList"
                    :key="rank.id"
                    @click="menuBtn"
                  >
                    <router-link
                      :to="{
                        path: `/${rank.route}`,
                        query: { listId: rank.listId, value: rank.value },
                      }"
                      ><el-dropdown-item
                        ><span>{{ rank.value }}</span></el-dropdown-item
                      ></router-link
                    >
                  </li>
                </ul>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </li>
        <li class="loginAndRegister" @click="menuBtn">
          <!-- <span @click="$router.push('/login')">登录</span>
          <span @click="$router.push('/register')">/注册</span> -->
          <div class="user-bar">
            <!--        <el-avatar style="position: absolute;right: 150px;top: 8px;"-->
            <!--                   :src="require('../assets/img/sir.png')" alt="头像"></el-avatar>-->
            <div v-if="!user">
              <el-button type="primary" round size="small" @click="doLogin"
                >登录/注册</el-button
              >
              <!--            <el-button type="primary" round size="small" @click="registVisible = true">注册</el-button>-->
            </div>
            <div v-if="user">
              <span>{{ user.roles[0].nameDesc }}</span
              ><span v-if="user.nickname" style="margin-right: 10px"
                >: {{ user.nickname }}</span
              >
              <el-button type="primary" round size="small" @click="doLogout"
                >退出</el-button
              >
            </div>
          </div>
        </li>
      </ul>
      <img
        src="@/assets/menu-btn.png"
        alt=""
        class="menu-btn"
        @click="menuBtn"
      />
    </div>
    <!--    扫描二维码登录-->
    <el-dialog
      title="微信扫码后登录"
      :visible.sync="loginDialogVisible"
      customClass="dialog"
      center
      append-to-body
    >
      <div style="text-align: center">
        <vue-qr
          :text="loginData.url"
          :margin="10"
          colorDark="#000"
          colorLight="#fff"
          :dotScale="1"
          :logoSrc="loginData.icon"
          :logoScale="0.2"
          :size="200"
        ></vue-qr>
      </div>
      <br />
      <!--      <div style="text-align: center"><h6>分享该文</h6></div>-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="loginDialogVisible = false"
          >确定</el-button
        >
      </span>
    </el-dialog>
  </el-header>
</template>

<script>
import vueQr from "vue-qr";
import { loadCurrentUser } from "@/api";
export default {
  name: "shange",
  components: {
    vueQr,
  },
  data() {
    return {
      menu: true,
      user: null,
      loginData: {
        // url: 'http://cxyabc.vaiwan.com/to_detail',  //需要转化成二维码的网址
        url: "", //需要转化成二维码的网址
        state: "",
        icon: require("@/assets/wx_qr.png"), //二维码中间的图片,可以不设置
      },
      loginUser: {
        username: "",
        password: "Carrot97",
        // code: '',
        rememberMe: true,
      },
      // verifyCode: "/verifyCode",
      msgCodeText: "发送验证码",
      loginDialogVisible: false,
      userInfo: {},
      backData: {},
      rankList: [
        {
          listId: 1,
          value: "总排行榜",
          route: "TotalRank",
        },
        {
          listId: 2,
          value: "功能排行榜",
          route: "FeatureRank",
        },
        {
          listId: 3,
          value: "省份排行榜",
          route: "ProvinceRank",
        },
        {
          listId: 4,
          value: "论文排行榜",
          route: "ThesisRank",
        },
        {
          listId: 5,
          value: "专利排行榜",
          route: "PatentRank",
        },
        {
          listId: 6,
          value: "民族药排行榜",
          route: "EthnicRank",
        },
        {
          listId: 7,
          value: "(非)注射排行榜",
          route: "InjectionRank",
        },
      ],
    };
  },
  methods: {
    handleWxCode() {
      let param = window.location.search.substring(1);
      if (param) {
        this.backData.code = param.split("&")[0].split("=")[1];
        this.backData.state = param.split("&")[1].split("=")[1];
        this.$API.mobileDoLoginCallBack(this.backData);
        document.addEventListener(
          "WeixinJSBridgeReady",
          function () {
            WeixinJSBridge.call("closeWindow");
          },
          false
        );
        WeixinJSBridge.call("closeWindow");
      }
    },
    menuBtn() {
      this.menu = !this.menu;
      // console.log(this.menu);
    },

    //获取用户登录信息
    getUserInfo() {
      this.user = JSON.parse(sessionStorage.getItem("userinfo"));
    },

    doLogin() {
      this.$API.reqLoginQrCode("http://plc.bbtcml.com/rank").then((resp) => {
        if (resp) {
          this.loginData.url = resp.response.url;
          setTimeout(() => {
            this.loginDialogVisible = true;
          }, 500);
          this.loginData.state = resp.response.state;
          this.loginUser.username = resp.response.state;
          var waitWeiXin = setInterval(() => {
            this.$API.reqDoLogin(this.loginUser).then((resp) => {
              if (resp.response) {
                this.user = resp.response;
                window.sessionStorage.setItem(
                  "userinfo",
                  JSON.stringify(resp.response)
                );
                // location.reload();
                this.loginDialogVisible = false;
                clearInterval(waitWeiXin);
              }
            });
          }, 1000);
        }
      });
    },
    doLogout() {
      this.$confirm("此操作将退出用户登录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$API.reqDoLogout("/logout").then(() => {
            this.$router.replace("/home");
            window.sessionStorage.removeItem("userinfo");
            this.user = null;
            location.reload();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    handleRememberMe() {
      this.$API.loadCurrentUser("/user/currentUser").then((resp) => {
        if (resp.response && resp.response !== 1) {
          this.user = resp.response;
          window.sessionStorage.setItem("user", JSON.stringify(resp.response));
        }
      });
    },
  },
  mounted() {
    this.handleWxCode();
    this.getUserInfo();
    this.handleRememberMe();
  },
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
  /* background-color: red; */
}
.header_logo {
  margin-right: 250px;
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

@media screen and (max-width: 850px) {
  .header_nav {
    padding: 0;
  }

  .header_logo {
    margin-right: 0;
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