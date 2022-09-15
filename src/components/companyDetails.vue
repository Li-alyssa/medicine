<template>
  <div id="companyDetails">
    <div class="introduction">
      <div class="introduction-container">
        <div class="company-img">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
        <div class="company-title">
          <div class="company-title-name">公司名</div>
          <div class="company-title-tag">标签</div>
        </div>
        <div class="company-introduce">
          <div class="company-introduce-container">
            公司简介:这家公司历史十分悠久！
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <el-tabs type="border-card">
        <el-tab-pane label="生产品种">
          <el-table :data="tableData" stripe style="width: 100%" border>
            <el-table-column prop="bianhao" label="编号" width="180">
            </el-table-column>
            <el-table-column
              prop="mingcheng"
              label="名称"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="gongneng"
              label="功能主治"
              width="width"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="caozuo" label="操作" width="180">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="科研论文">
          <el-table :data="tableData" stripe style="width: 100%" border>
            <el-table-column prop="bianhao" label="编号" width="80">
            </el-table-column>
            <el-table-column prop="timu" label="题目" width="width">
            </el-table-column>
            <el-table-column prop="year" label="发表年份" width="110">
            </el-table-column>
            <el-table-column prop="leixing" label="检错类型" width="110">
            </el-table-column>
            <el-table-column prop="yinzi" label="影响因子" width="110">
            </el-table-column>
            <el-table-column prop="操作" label="操作" width="110">
            </el-table-column> </el-table
        ></el-tab-pane>
        <el-tab-pane label="发明专利">
          <el-table :data="tableData" stripe style="width: 100%" border>
            <el-table-column prop="bianhao" label="编号" width="80">
            </el-table-column>
            <el-table-column prop="timu" label="专利名称" width="width">
            </el-table-column>
            <el-table-column prop="year" label="公开年" width="110">
            </el-table-column>
            <el-table-column prop="leixing" label="专利类型" width="110">
            </el-table-column>
            <el-table-column prop="yinzi" label="法律状态" width="110">
            </el-table-column>
            <el-table-column prop="caozuo" label="操作" width="110">
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="科技奖励">
          <el-table :data="tableData" stripe style="width: 100%" border>
            <el-table-column prop="bianhao" label="编号" width="80">
            </el-table-column>
            <el-table-column prop="timu" label="获奖项目" width="width">
            </el-table-column>
            <el-table-column prop="year" label="奖励类型" width="width">
            </el-table-column>
            <el-table-column prop="leixing" label="奖励等级" width="width">
            </el-table-column>
            <el-table-column prop="yinzi" label="获奖时间" width="width">
            </el-table-column> </el-table
        ></el-tab-pane>
        <el-tab-pane label="科技项目">科技项目</el-tab-pane>
        <el-tab-pane label="指南共识">指南共识</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
};
</script>

<style scoped>
#companyDetails {
  overflow: hidden;
  margin-top: 60px;
}

.introduction {
  /* background-color: #fff; */
  padding: 10px;
}
.introduction-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1180px;
  margin-right: auto;
  margin-left: auto;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
}
.company-img {
  /* margin: 10px; */
  /* background-color: #111; */
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* object-fit: cover; */
}
.el-image {
  padding: 10px;
}
.company-title {
  /* background-color: #ccc; */
  height: 100%;
  width: 15%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
}
.company-title-name {
  margin-top: 20%;
  /* background-color: red; */
  color: #111;
  font-size: 24px;
  font-weight: bolder;
  font-family: "Party LET";
}
.company-title-tag {
  /* background-color: blue; */
  margin-top: 5px;
  color: #ccc;
}

.company-introduce {
  /* background-color: #ddd; */
  /* border-left: 1px solid #ccc; */
  height: 100%;
  width: 65%;
}
.company-introduce-container {
  margin-top: 30px;
  margin-left: 20px;
}
.container {
  width: 1180px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  border-radius: 10px;
}
.el-tabs {
  width: 100%;
}
</style>