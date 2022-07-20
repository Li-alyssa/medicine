<template>
  <el-footer>
    <div class="me-footer">
      <p>
        Designed by
        <strong>
          <router-link to="/" class="me-login-design-color">Alyssa</router-link>
        </strong>
      </p>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>


<style>
.el-footer {
  display: flex;
  height: 4vh;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.me-footer {
  text-align: center;
  line-height: 60px;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
}
.me-login-design-color {
  color: #5fb878 !important;
}
</style>