<template>
  <div class="container">
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      class="fileManagerForm"
    >
      <el-form-item label="PDF上传">
        <el-upload
          accept=".pdf"
          action=""
          :limit="1"
          :on-exceed="handleExceed"
          :before-upload="beforeUpload"
          :on-success="upSuccess"
          :on-error="upError"
          :http-request="handleUpload"
        >
          <el-button size="small" type="primary">
            <span class="iconfont icon-shangchuan" />上传文件
          </el-button>
        </el-upload>
        <span>上传文件只能是 pdf 文件,且大小不能超过2MB</span>
      </el-form-item>

      <el-form-item label="压缩包上传">
        <el-upload
          accept=".zip, .rar"
          action=""
          :limit="1"
          :before-upload="beforeUploadSecond"
          :http-request="handleUploadSecond"
        >
          <el-button size="small" type="primary">
            <span class="iconfont icon-shangchuan" />数据导入
          </el-button>
        </el-upload>
        <span>上传文件只能是压缩文件,且大小不能超过10MB</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
      },
      fileList: [],
    };
  },
  mounted() {},
  methods: {
    // this.$msg(); 为自定义全局提示
    // 上传文件之前
    beforeUpload(file) {
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);

      const whiteList = ["pdf"];

      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message("上传文件只能是 pdf格式", "error");
        return false;
      }

      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message("上传文件大小不能超过 2MB", "error");
        return false;
      }
    },
    //限制上传
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    // 上传成功
    upSuccess(e) {
      this.$message("上传成功", "suceess");
    },
    // 上传失败
    upError(e) {
      this.$message("上传失败", "error");
    },
    async handleUpload(params) {
      console.log(params);
      //   this.fileList.push(params.file);
      //   console.log(this.fileList);
      let data = new FormData();
      data.append("file", params.file);
      let result = await this.$API.uploadPDF(data);
      console.log(result);
      //   this.$message("上传PDF成功", "success");
      this.$confirm("上传PDF成功,是否继续上传?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "success",
      })
        .then(() => {
          this.fileList = [];
        })
        .catch(() => {
          this.$router.push("/home");
        });
      //   console.log(result);
      //   this.serial = result.response;
    },

    //压缩包
    // 上传文件之前
    beforeUploadSecond(file) {
      const fileSuffix = file.name.substring(file.name.lastIndexOf(".") + 1);

      const whiteList = ["zip", "rar"];

      if (whiteList.indexOf(fileSuffix) === -1) {
        this.$message("上传文件只能是压缩格式", "error");
        return false;
      }

      const isLt10M = file.size / 1024 / 1024 < 10;

      if (!isLt10M) {
        this.$message("上传文件大小不能超过 10MB", "error");
        return false;
      }
    },

    async handleUploadSecond(params) {
      console.log(params);
      this.fileList.push(params.file);
      console.log(this.fileList);
      let data = new FormData();
      data.append("file", params.file);
      let result = await this.$API.uploadFile(data);
      console.log(result);
      //   this.$message("上传PDF成功", "success");
    },
  },
};
</script>

<style>
.container {
  background-color: #fff;
  width: 100%;
}

.fileManagerForm {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>