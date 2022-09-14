<template>
  <div class="me-footer">
    <p>
      Designed by
      <strong>
        <router-link to="/" class="me-login-design-color">Alyssa</router-link>
      </strong>
    </p>
  </div>
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
/* .el-footer {
  display: flex;
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
} */

.me-footer {
  text-align: center;
  line-height: 60px;
  font-family: "Open Sans", sans-serif;
  background-color: #eeeeee;
  font-size: 18px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.me-login-design-color {
  color: #5fb878 !important;
}
</style>