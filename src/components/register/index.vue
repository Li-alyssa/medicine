<template>
  <div>
    <el-card class="register-form-layout">
      <el-form
        autocomplete="on"
        :model="registerForm"
        ref="registerForm"
        label-position="left"
      >
        <h2 class="register-title color-main">中药大品种联盟</h2>
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
            v-model="password"
            autocomplete="on"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            v-model="password"
            autocomplete="on"
            placeholder="请再次确认密码"
            prefix-icon="el-icon-key"
          >
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 10px">
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleRegister"
            >注册</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
export default {
  name: "register",
  data() {
    return {
      registerForm: {
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
    handleRegister() {
      this.$router.push("/login");
    },
  },
};
</script>
 
<style scoped>
.register-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.register-title {
  text-align: center;
  margin-bottom: 10px;
}

.register-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>