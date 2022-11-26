<template>
  <div class="companyManager-container">
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      class="companyManagerForm"
    >
      <el-form-item label="企业名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="企业省份">
        <el-select v-model="form.valueProvince" placeholder="请选择" clearable>
          <el-option
            v-for="item in optionsProvince"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form :model="form" :inline="true" label-width="100px">
        <el-form-item label="电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="官网">
          <el-input v-model="form.website"></el-input>
        </el-form-item>
      </el-form>
      <el-form-item label="企业Logo">
        <el-upload
          action=""
          class="avatar-uploader"
          :file-list="fileList"
          :auto-upload="true"
          accept="image/png,image/gif,image/jpg,image/jpeg"
          :show-file-list="false"
          :http-request="handleUpload"
        >
          <img v-if="form.logo" :src="form.logo" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <!-- <img
          v-if="this.form.logo != ''"
          :src="form.logo"
          alt=""
          style="width: 100px; height: 100px; object-fit: contain"
        />
        <el-button @click="updatedialogVisible = true">点击上传</el-button>
        <el-dialog
          title="提示"
          :visible.sync="updatedialogVisible"
          customClass="dialog"
        >
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-exceed="handleExceed"
            :on-success="handleSuccess"
            :file-list="fileList"
            :limit="fileLimit"
            :before-upload="beforeUpload"
            list-type="picture"
          >
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件,且不超过500kb
            </div>
          </el-upload>
          <span slot="footer" class="dialog-footer">
            <el-button @click="updatedialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleUpload">确认上传</el-button>
          </span>
        </el-dialog> -->
      </el-form-item>
      <el-form-item label="企业标签">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="form.inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New Tag</el-button
        >
      </el-form-item>

      <el-form-item label="企业简介">
        <el-input
          type="textarea"
          v-model="form.description"
          autosize
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="富文本编辑器">
        <el-button @click="dialogVisible = true">点击上传</el-button>
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <!-- 富文本编辑器弹出框 -->
    <!-- <el-dialog title="上传产品富文本" :visible.sync="dialogVisible" width="47%">
      <el-form :model="form">
        <el-form-item>
          <quill-editor v-model="form.content"></quill-editor>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.type" placeholder="请选择上传区域">
            <el-option
              v-for="(item, index) in pictureTypeList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
// import "quill/dist/quill.core.css";
// import "quill/dist/quill.snow.css";
// import "quill/dist/quill.bubble.css";
// import { quillEditor } from "vue-quill-editor";

export default {
  // components: {
  //   quillEditor,
  // },
  data() {
    return {
      form: {
        id: "",
        name: "",
        valueProvince: "",
        inputValue: "",
        phone: "",
        website: "",
        logo: "",
        description: "",
        // content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
        // type: "",
      },
      serial: "",
      dynamicTags: [],
      inputVisible: false,
      dialogVisible: false,
      updatedialogVisible: false,
      fileList: [],
      filePhoto: [],
      fileUrl: "",
      // 允许的文件类型
      fileType: ["png", "jpg", "bmp", "jpeg"],
      // 运行上传文件大小，单位 M
      fileSize: 50,
      // 附件数量限制
      fileLimit: 1,
      pictureTypeList: [
        {
          value: 1,
          label: "产品获奖或新闻报道",
        },
        {
          value: 2,
          label: "医保准入",
        },
        {
          value: 3,
          label: "海外销售",
        },
        {
          value: 4,
          label: "药品价格",
        },
      ],
      optionsProvince: [
        {
          value: 31,
          label: "北京",
        },
        {
          value: 32,
          label: "天津",
        },
        {
          value: 33,
          label: "河北",
        },
        {
          value: 34,
          label: "辽宁",
        },
        {
          value: 35,
          label: "吉林",
        },
        {
          value: 36,
          label: "黑龙江",
        },
        {
          value: 37,
          label: "山东",
        },
        {
          value: 38,
          label: "江苏",
        },
        {
          value: 39,
          label: "上海",
        },
        {
          value: 310,
          label: "浙江",
        },
        {
          value: 311,
          label: "安徽",
        },
        {
          value: 312,
          label: "福建",
        },
        {
          value: 313,
          label: "江西",
        },
        {
          value: 314,
          label: "广东",
        },
        {
          value: 315,
          label: "广西",
        },
        {
          value: 316,
          label: "海南",
        },
        {
          value: 317,
          label: "河南",
        },
        {
          value: 318,
          label: "湖南",
        },
        {
          value: 319,
          label: "湖北",
        },
        {
          value: 320,
          label: "山西",
        },
        {
          value: 321,
          label: "内蒙古",
        },
        {
          value: 322,
          label: "宁夏",
        },
        {
          value: 323,
          label: "青海",
        },
        {
          value: 324,
          label: "陕西",
        },
        {
          value: 325,
          label: "甘肃",
        },
        {
          value: 326,
          label: "新疆",
        },
        {
          value: 327,
          label: "四川",
        },
        {
          value: 328,
          label: "贵州",
        },
        {
          value: 329,
          label: "云南",
        },
        {
          value: 330,
          label: "重庆",
        },
        {
          value: 331,
          label: "西藏",
        },
      ],
    };
  },
  mounted() {
    // console.log(this.$route);
    if (this.$route.params.form) {
      this.form.id = this.$route.params.form.id;
      this.form.name = this.$route.params.form.name;
      this.form.valueProvince = this.$route.params.form.province;
      this.form.phone = this.$route.params.form.phone;
      this.form.website = this.$route.params.form.website;
      this.form.description = this.$route.params.form.details;
      this.form.logo = this.$route.params.form.serial;
      this.dynamicTags = JSON.parse(this.$route.params.form.tagJson);
    }
  },
  methods: {
    //表单提交
    async onSubmit() {
      // console.log("submit!");
      if (this.$route.params.form) {
        const formData = {
          id: this.form.id,
          name: this.form.name,
          details: this.form.description,
          province: this.form.valueProvince,
          tagJson: JSON.stringify(this.dynamicTags),
          phone: this.form.phone,
          website: this.form.website,
          serial: this.serial,
        };
        console.log(formData);
        try {
          let result = await this.$API.updateCompanyInfo(formData);
          this.$router.push("/companies");
          console.log(result);
          (this.form = {}), (this.serial = ""), (this.dynamicTags = []);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        const formData = {
          name: this.form.name,
          details: this.form.description,
          province: this.form.valueProvince,
          tagJson: JSON.stringify(this.dynamicTags),
          phone: this.form.phone,
          website: this.form.website,
          serial: this.serial,
        };
        console.log(formData);
        try {
          let result = await this.$API.updateCompanyInfo(formData);
          // console.log(result);
          this.$router.push("/companies");
          (this.form = {}), (this.serial = ""), (this.dynamicTags = []);
        } catch (error) {
          console.log(error.message);
        }
      }
    },

    //删除tag
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    //显示tag输入框
    showInput() {
      this.inputVisible = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    //关闭tag输入框
    handleInputConfirm() {
      let inputValue = this.form.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.form.inputValue = "";
    },

    //确认上传图片  调用函数
    async handleUpload(param) {
      // console.log(param);
      let data = new FormData();
      data.append("file", param.file);
      // data.append("file", this.filePhoto.raw);
      data.append("type", "company");
      // console.log(data);
      let result = await this.$API.reqUpLoadPhoto(data);
      console.log(result);
      this.serial = result.response;
      var downloadPictureResult = await this.$API.reqDownloadUpLoadCompanyPhoto(
        this.serial
      );
      const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
      this.form.logo = src;
      console.log(this.form.logo);
      // this.updatedialogVisible = false;
      this.filePhoto = [];
    },
    //获取图片
    async getDownloadPicture() {
      var downloadPictureResult = "";
      var pictureSerial = "";
      pictureSerial = this.serial;
      downloadPictureResult = await this.$API.reqDownloadUpLoadCompanyPhoto(
        pictureSerial
      );
      // console.log(downloadPictureResult);
      const src = window.URL.createObjectURL(downloadPictureResult); //这里也是关键,调用window的这个方法URL方法
      this.form.logo = src;
      console.log(this.form.logo);
    },
  },
};
</script>

<style>
.companyManager-container {
  background-color: #fff;
  width: 100%;
}

.companyManagerForm {
  width: 80%;
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
}

.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>