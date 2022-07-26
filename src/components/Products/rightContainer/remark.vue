<template>
  <div class="remark-main">
    <div class="title">
      <div class="left"></div>
      <span>药品满意度</span>
    </div>
    <div class="main-container">
      <div class="score-box">
        <div class="score-item">
          <span>起效速度</span>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="74"
              :format="format"
            ></el-progress>
          </div>
        </div>
        <div class="score-item">
          <span>起效速度</span>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="74"
              :format="format"
            ></el-progress>
          </div>
        </div>
        <div class="score-item">
          <span>起效速度</span>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="74"
              :format="format"
            ></el-progress>
          </div>
        </div>
        <div class="score-item">
          <span>起效速度</span>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="74"
              :format="format"
            ></el-progress>
          </div>
        </div>
        <div class="score-item">
          <span>起效速度</span>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="74"
              :format="format"
            ></el-progress>
          </div>
        </div>
        <div class="score-item">
          <span>起效速度</span>
          <div class="progress">
            <el-progress
              :text-inside="true"
              :stroke-width="18"
              :percentage="74"
              :format="format"
            ></el-progress>
          </div>
        </div>
      </div>
      <div class="tags-box">
        <span>药效好的不得了&nbsp;16</span>
        <span>药效好的不得了&nbsp;16</span>
        <span>药效好的不得了&nbsp;16</span>
        <span>药效好的不得了&nbsp;16</span>
        <span>药效好的不得了&nbsp;16</span>
        <span>药效好的不得了&nbsp;16</span>
      </div>
      <el-button type="primary">发表评论</el-button>
      <div class="featured-cmt">
        <div class="featured-cmt-title">
          <div>评论精选</div>
          <div>
            <span>查看所有评论&nbsp;></span>
          </div>
          <div class="line"></div>
        </div>
        <div class="cmt-container">
          <div class="head">
            <el-avatar class="user-logo">user</el-avatar>
            <div class="user-name">评论昵称</div>
            <div class="user-type">医生</div>
            <div class="rec-tip">推荐了此款</div>
          </div>
          <div class="content">
            <div class="content-score-box">
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
            </div>
            <div class="content-label-box"></div>
            <div class="content-text-box">
              <div class="text-expansion">除了分太高啥都特好</div>
            </div>
            <div class="content-vote-box">
              <div class="vote">
                <el-button icon="el-icon-caret-top" class="agree-btn">
                  <span>赞成</span>
                  <span>23</span></el-button
                >
              </div>
              <div class="date">2021-07-25</div>
            </div>
          </div>
        </div>
        <div class="cmt-container">
          <div class="head">
            <el-avatar class="user-logo">user</el-avatar>
            <div class="user-name">评论昵称</div>
            <div class="user-type">医生</div>
            <div class="rec-tip">推荐了此款</div>
          </div>
          <div class="content">
            <div class="content-score-box">
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
            </div>
            <div class="content-label-box"></div>
            <div class="content-text-box">
              <div class="text-expansion">除了分太高啥都特好</div>
            </div>
            <div class="content-vote-box">
              <div class="vote">
                <el-button icon="el-icon-caret-top" class="agree-btn">
                  <span>赞成</span>
                  <span>23</span></el-button
                >
              </div>
              <div class="date">2021-07-25</div>
            </div>
          </div>
        </div>
        <div class="cmt-container">
          <div class="head">
            <el-avatar class="user-logo">user</el-avatar>
            <div class="user-name">评论昵称</div>
            <div class="user-type">医生</div>
            <div class="rec-tip">推荐了此款</div>
          </div>
          <div class="content">
            <div class="content-score-box">
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
              <span>起效速度:5</span>
            </div>
            <div class="content-label-box"></div>
            <div class="content-text-box">
              <div class="text-expansion">除了分太高啥都特好</div>
            </div>
            <div class="content-vote-box">
              <div class="vote">
                <el-button icon="el-icon-caret-top" class="agree-btn">
                  <span>赞成</span>
                  <span>23</span></el-button
                >
              </div>
              <div class="date">2021-07-25</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    format(percentage) {
      return `${percentage / 20}` + "分";
    },
  },
};
</script>

<style scoped>
.remark-main {
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px 16px;
  margin-bottom: 20px;
}

.title {
  position: relative;
  display: flex;
  align-items: center;
  height: 45px;
  margin-left: -16px;
  pointer-events: none;
}

.left {
  position: absolute;
  top: 0;
  left: 14px;
  width: 36px;
  height: 4px;
  background-color: #409eff;
  border-radius: 0 0 2px 2px;
}

.title span {
  margin-left: 12px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
}

.score-box {
  display: grid;
  grid-template-columns: repeat(3, 226px);
  grid-gap: 1rem;
  justify-content: space-between;
}

.score-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 226px;
}
.score-item span {
  font-family: PingFang SC;
  font-size: 14px;
  color: #605e60;
}
.progress {
  width: 160px;
}

.tags-box {
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  /* padding-top: 20px; */
}
.tags-box span {
  display: inline-block;
  padding: 6px 8px;
  background-color: #f4f3f4;
  border-radius: 4px;
  font-family: PingFang SC;
  font-size: 14px;
  color: #605e60;
  margin-right: 8px;
  margin-bottom: 8px;
}

.el-button {
  cursor: pointer;
  width: 138px;
  font-family: PingFang SC;
  font-size: 14px;
  color: #fff;
  /* border: none; */
  margin-top: 12px;
}

.featured-cmt .featured-cmt-title {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #eaeaea;
}

.featured-cmt .featured-cmt-title div:first-child {
  font-family: PingFang SC;
  font-size: 16px;
  color: #312f31;
  font-weight: 700;
}

.featured-cmt .featured-cmt-title div:nth-child(2) span {
  color: #409eff;
  font-size: 14px;
  font-family: PingFang SC;
  margin-right: 7px;
}
.line {
  position: absolute;
  width: 64px;
  height: 2px;
  background-color: #409eff;
  border-radius: 1px;
  bottom: 0;
  left: 0;
}
.cmt-container {
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 4px;
}

.cmt-container .head {
  position: relative;
  display: flex;
  align-items: center;
}

.user-logo {
  border-radius: 50%;
  width: 36px;
  height: 36px;
}

.user-name {
  font-family: PingFang SC;
  font-size: 16px;
  color: #312f31;
  margin-left: 12px;
}
.user-type {
  display: inline-block;
  padding: 3px 6px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d7d7d7;
  font-family: PingFang SC;
  font-size: 12px;
  color: #8d8b8d;
  margin-left: 8px;
  margin-top: 2px;
}

.rec-tip {
  font-family: PingFang SC;
  font-size: 14px;
  color: #8d8b8d;
  margin-left: 7px;
}

.content {
  width: 668px;
  margin-left: 48px;
}
.content-score-box {
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
}

.content-score-box span {
  font-family: PingFang SC;
  font-size: 14px;
  color: #605e60;
  margin-right: 16px;
}

.content-text-box {
  margin-top: 4px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  line-height: 24px;
  color: #312f31;
}

.text-expansion {
  overflow: visible;
  text-align: justify;
  position: relative;
}
.content-vote-box {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.agree-btn {
  color: #605e60;
  cursor: pointer;
  width: 120px;
  font-family: PingFang SC;
  font-size: 14px;
  /* border: none; */
  margin-top: 18px;
}

.vote span:nth-child(2) {
  margin-left: 5px;
}

.date {
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: PingFang SC;
  font-size: 14px;
  color: #8d8b8d;
}
</style>