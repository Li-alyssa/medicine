<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <h2 class="login-title color-main">中药大品种联盟</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="username"
            autocomplete="on"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user-solid"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="password"
            autocomplete="on"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 10px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
            >登录</el-button
          >
          <el-button
            style="width: 100%"
            type="text"
            :loading="loading"
            @click.native.prevent="goRegister"
            >没有账号?立即注册</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456",
      },
      username: "",
      password: "",
      loading: false,
      pwdType: "password",
    };
  },
  methods: {
    handleLogin() {
      if (
        this.username === this.loginForm.username &&
        this.password === this.loginForm.password
      ) {
        this.$router.push("/home");
      }
    },
    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
 
<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
  margin-bottom: 10px;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>