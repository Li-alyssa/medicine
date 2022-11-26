<template>
  <div class="companyManager-container">
    <el-form
      ref="form"
      :model="form"
      label-width="100px"
      class="companyManagerForm"
    >
      <el-form-item label="产品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="产品英文名称">
        <el-input v-model="form.english_name"></el-input>
      </el-form-item>
      <el-form-item label="所属公司">
        <el-input v-model="form.company_id"></el-input>
      </el-form-item>
      <el-form-item label="省份">
        <el-select v-model="form.province" placeholder="请选择" clearable>
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
      <el-form-item label="产品Logo">
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
        /> -->
        <!-- <el-button @click="updatedialogVisible = true">点击上传</el-button>
        <el-dialog
          title="提示"
          :visible.sync="updatedialogVisible"
          customClass="dialog"
        > -->

        <!-- <el-upload
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
          </el-upload> -->
        <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="updatedialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleUpload">确认上传</el-button>
          </span> -->
        <!-- </el-dialog> -->
      </el-form-item>
      <el-form-item label="产品标签">
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
      <el-form :model="form" :inline="true" label-width="100px">
        <el-form-item label="处方药/OTC">
          <el-select placeholder="处方药/OTC" v-model="form.otc" clearable>
            <el-option
              v-for="item in OtcType"
              :key="item.id"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="给药途径">
          <el-select placeholder="给药途径" v-model="form.route" clearable>
            <el-option
              v-for="item in RouteType"
              :key="item.id"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="市场准入">
          <el-select placeholder="市场准入" v-model="form.access" clearable>
            <el-option
              v-for="item in AccessType"
              :key="item.id"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="治疗领域">
          <el-select placeholder="治疗领域" v-model="form.domain" clearable>
            <el-option
              v-for="item in DomainType"
              :key="item.id"
              :label="item.label"
              :value="item.label"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form-item label="产品点评">
        <el-input type="textarea" v-model="form.Comments"></el-input>
      </el-form-item>
      <el-form-item label="产品介绍">
        <el-input type="textarea" v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="产品说明书">
        <el-input type="textarea" v-model="form.instruction"></el-input>
      </el-form-item>
      <el-form-item label="富文本编辑器" v-if="this.$route.params.form">
        <el-button @click="dialogVisible = true">点击上传</el-button>
      </el-form-item>
      <el-form-item label="是否入驻">
        <el-radio-group v-model="form.Settled">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <!-- 富文本编辑器弹出框 -->
    <el-dialog title="上传产品富文本" :visible.sync="dialogVisible" width="47%">
      <el-form :model="form">
        <el-form-item>
          <quill-editor v-model="form.content"></quill-editor>
        </el-form-item>
        <el-form-item>
          <el-select
            v-model="form.type"
            placeholder="请选择上传区域"
            @change="checkQuill(form.type)"
          >
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
        <el-button type="primary" @click="addQuill">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
    <script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      form: {
        name: "", //产品名
        english_name: "", //英文名
        company_id: "", //所属公司
        tagJson: JSON.stringify(this.dynamicTags), //产品标签
        province: "", //省份
        inputValue: "",
        phone: "", //电话
        website: "", //web
        logo: "", //头像
        description: "", //简介
        content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`,
        type: "", //种类
        otc: "", //处方药
        route: "", //给药途径
        access: "", //市场准入
        domain: "", //治疗领域
        Comments: "", //点评
        instruction: "", //说明书
        Settled: "", //是否入驻
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
      QuillId: null,
      OtcType: [
        {
          value: 1,
          label: "处方药",
        },
        {
          value: 2,
          label: "非处方药",
        },
      ],
      RouteType: [
        {
          value: 1,
          label: "注射",
        },
        {
          value: 2,
          label: "口服",
        },
        {
          value: 3,
          label: "滴眼液",
        },
        {
          value: 4,
          label: "外用",
        },
      ],
      AccessType: [
        {
          value: 1,
          label: "国保",
        },
        {
          value: 2,
          label: "基药",
        },
        {
          value: 3,
          label: "国谈",
        },
        {
          value: 4,
          label: "集采",
        },
      ],
      DomainType: [
        {
          value: 1,

          label: "心脑血管疾病用药（注射类）",
        },
        {
          value: 2,

          label: "心脑血管疾病用药（口服药）",
        },
        {
          value: 3,
          label: "代谢类疾病用药",
        },
        {
          value: 4,
          label: "呼吸系统疾病用药",
        },
        {
          value: 5,
          label: "骨骼肌肉系统用药",
        },
        {
          value: 6,
          label: "泌尿系统用药",
        },
        {
          value: 7,
          label: "消化系统用药",
        },
        {
          value: 8,
          label: "肿瘤用药",
        },
        {
          value: 9,
          label: "神经系统用药",
        },
        {
          value: 10,
          label: "妇科用药",
        },
        {
          value: 11,
          label: "肛肠皮肤用药",
        },
        {
          value: 12,
          label: "五官科用药",
        },
        {
          value: 13,
          label: "儿科用药",
        },
        {
          value: 14,
          label: "补益类",
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
    };
  },
  mounted() {
    if (this.$route.params.form) {
      console.log(this.$route.params.form.serialPicture);
      this.serial = this.$route.params.form.serialPicture;
      console.log(this.serial);
      this.getDownloadPicture();
      console.log(this.form);
      this.form.name = this.$route.params.form.name;
      this.form.province = this.$route.params.form.province;
      this.form.phone = this.$route.params.form.phone;
      this.form.website = this.$route.params.form.website;
      this.form.description = this.$route.params.form.details;
      // this.serial = this.$route.params.form.serial;
      this.dynamicTags = this.$route.params.form.tagJson;
      this.form.english_name = this.$route.params.form.englishName;
      this.form.company_id = this.$route.params.form.company;
      this.form.otc = this.$route.params.form.otc;
      this.form.route = this.$route.params.form.route;
      this.form.access = this.$route.params.form.access[0];
      this.form.domain = this.$route.params.form.domain;
      this.form.instruction = this.$route.params.form.instruction;
      this.form.Comments = this.$route.params.form.comment;
      this.form.Settled = this.$route.params.form.special;
      this.dynamicTags = this.$route.params.form.tags;
    }
    // this.handleUpload();
    // console.log(this.form.logo);
  },
  methods: {
    //表单提交
    async onSubmit() {
      var accessArray = [];
      accessArray.push(this.form.access);
      const final_data = Array.from(this.dynamicTags);
      if (this.$route.params.form) {
        const formData = {
          id: this.$route.params.form.id,
          name: this.form.name,
          englishName: this.form.english_name,
          company: this.form.company_id,
          province: this.form.province,
          otc: this.form.otc,
          route: this.form.route,
          access: accessArray,
          domain: this.form.domain,
          details: this.form.description,
          tagJson: JSON.stringify(this.dynamicTags),
          // tagJson: final_data,
          instruction: this.form.instruction,
          comment: this.form.Comments,
          special: this.form.Settled,
          serial: this.serial,
        };
        console.log(formData);
        try {
          let result = await this.$API.updateProductInfo(formData);
          console.log(result);
          this.$router.push("/goods");
          (this.form = {}), (this.serial = ""), (this.dynamicTags = []);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        const formData = {
          name: this.form.name,
          englishName: this.form.english_name,
          company: this.form.company_id,
          province: this.form.province,
          otc: this.form.otc,
          route: this.form.route,
          access: accessArray,
          domain: this.form.domain,
          details: this.form.description,
          tagJson: JSON.stringify(this.dynamicTags),
          // tagJson: this.dynamicTags,
          instruction: this.form.instruction,
          comment: this.form.Comments,
          special: this.form.Settled,
          serial: this.serial,
        };
        console.log(formData);
        try {
          let result = await this.$API.updateProductInfo(formData);
          console.log(result);
          this.$router.push("/goods");
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

    async addQuill() {
      // console.log(this.QuillId);
      if (this.QuillId) {
        const data = {
          id: this.QuillId,
          productId: this.$route.params.form.id,
          type: this.form.type,
          content: this.form.content,
        };
        // console.log(data);
        try {
          let result = await this.$API.updatequill(data);
          // console.log(result);
        } catch (error) {
          console.log(error.message);
        }
      } else {
        const data = {
          productId: this.$route.params.form.id,
          type: this.form.type,
          content: this.form.content,
        };
        // console.log(data);
        try {
          let result = await this.$API.addquill(data);
          // console.log(result);
        } catch (error) {
          console.log(error.message);
        }
      }
      this.dialogVisible = false;
    },

    async checkQuill(value) {
      const data = {
        productId: this.$route.params.form.id,
        type: value,
      };
      // console.log(data);
      try {
        let result = await this.$API.checkquill(data);
        // console.log(result);
        if (result.response) {
          this.QuillId = result.response.id;
          this.form.content = result.response.content;
        } else {
          this.QuillId = null;
          this.form.content = "";
        }
        // this.QuillId = result.response.id;
      } catch (error) {
        console.log(error.message);
      }
    },
    // 上传头像
    //上传文件之前
    // beforeUpload(file) {
    //   if (file.type != "" || file.type != null || file.type != undefined) {
    //     //截取文件的后缀，判断文件类型
    //     const FileExt = file.name.replace(/.+\./, "").toLowerCase();
    //     //计算文件的大小
    //     const isLt5M = file.size / 1024 / 1024 < 50; //这里做文件大小限制
    //     //如果大于50M
    //     if (!isLt5M) {
    //       this.$showMessage("上传文件大小不能超过 50MB!");
    //       return false;
    //     }
    //     //如果文件类型不在允许上传的范围内
    //     if (this.fileType.includes(FileExt)) {
    //       return true;
    //     } else {
    //       this.$message.error("上传文件格式不正确!");
    //       return false;
    //     }
    //   }
    // },

    //超出文件个数的回调
    // handleExceed() {
    //   this.$message({
    //     type: "warning",
    //     message: "超出最大上传文件数量的限制！",
    //   });
    //   return;
    // },

    // //上传文件成功
    // handleSuccess(file, fileList) {
    //   this.filePhoto = fileList;
    //   // console.log(this.filePhoto);
    // },
    //确认上传图片  调用函数
    async handleUpload(param) {
      let data = new FormData();
      data.append("file", param.file);
      data.append("type", "product");
      // console.log(data);
      let result = await this.$API.reqUpLoadPhoto(data);
      console.log(result);
      this.serial = result.response;
      console.log(this.serial);
      var downloadPictureResult = await this.$API.reqDownloadUpLoadProductPhoto(
        this.serial
      );

      // console.log(downloadPictureResult);
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
      downloadPictureResult = await this.$API.reqDownloadUpLoadProductPhoto(
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