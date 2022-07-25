<template>
  <div class="out-container">
    <div class="container">
      <div class="left-container">
        <div class="medicine-container">
          <div class="medi-container">
            <div class="medi-msg">
              <div class="medi-info">
                <el-image :src="src"></el-image>
                <div class="medi-name">
                  <span>安康欣胶囊</span>
                  <span>安徽华润金蟾药业股份有限公司</span>
                </div>
                <div class="number-container">
                  <div class="items">国药准字Z34020272</div>
                </div>
              </div>
              <div class="labels-head">
                <img
                  src="https://www.shanghairanking.cn/_nuxt/img/top_shadow.e02e29f.png"
                  alt=""
                />
              </div>
              <div class="scroll-container">
                <div class="contant-msg">
                  <span
                    >【功能主治】解毒，消肿，止痛。用于中、晚期肿瘤，慢性乙型肝炎等症。</span
                  >
                  <span>【处方组成】干蟾皮提取物</span>
                  <span>【性状】本品为薄膜衣片</span>
                  <span>【规格】盒</span>
                  <span>【用法用量】一日2次</span>
                </div>

                <div class="recommed-container">
                  <div class="rec-left">
                    <div class="rec-num">98%</div>
                    <div class="rec-text">使用者推荐</div>
                    <div class="rec-participate">xxx人参与</div>
                  </div>
                  <div class="rec-right">
                    <div class="item-top">
                      <div class="img-container">
                        <img
                          src="https://www.shanghairanking.cn/_nuxt/img/tuijian_hui.74ac9fa.svg"
                          alt=""
                        />
                      </div>
                      <span>推荐</span>
                    </div>
                    <div class="item-bottom">
                      <div class="img-container">
                        <img
                          src="https://www.shanghairanking.cn/_nuxt/img/butuijian.17030ab.svg"
                          alt=""
                        />
                      </div>
                      <span>不推荐</span>
                    </div>
                  </div>
                </div>
                <div class="medicine-introduction">
                  <div class="medicine-title">
                    <div class="info-tab">
                      <span class="active">药品介绍</span>
                    </div>
                    <p>
                      这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字这里是一段介绍性文字
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-container">
        <rank />
        <chart />
        <remark />
      </div>
    </div>
  </div>
</template>

<script>
import rank from "@/components/Products/rightContainer/rank.vue";
import chart from "@/components/Products/rightContainer/chart.vue";
import remark from "@/components/Products/rightContainer/remark.vue";

export default {
  components: {
    rank,
    chart,
    remark,
  },
};
</script>

<style scoped>
.out-container {
  position: relative;
  overflow: visible;
  min-height: calc(100vh - 375px);
}

.container {
  padding-bottom: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 1180px;
}

.left-container {
  position: sticky;
  top: 70px;
  float: left;
  background-color: #fff;
  width: 382px;
  padding: 32px 0;
  border-radius: 4px;
  height: calc(100vh - 208px);
  min-height: 456px;
  margin-bottom: 20px;
}

.medicine-container {
  width: 334px;
  margin: 0 auto;
}

.medi-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medi-msg {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medi-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.medi-info .el-image {
  display: inline-block;
  width: 74px;
  height: 74px;
}
.medi-name {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.medi-name span:first-child {
  margin-top: 12px;
  font-family: PingFangSC-Semibold;
  font-size: 24px;
  color: #312f31;
}
.medi-name span:nth-child(2) {
  margin-top: 6px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #605e60;
}

.number-container {
  width: 100%;
  margin-top: 16px;
  height: 42px;
  background-color: #f8f8f8;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.items {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* margin-top: 4px; */
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #605e60;
}

.labels-head {
  position: relative;
  width: 100%;
  margin-top: 20px;
}

.labels-head img {
  position: absolute;
  width: 100%;
}

.scroll-container {
  height: calc(100vh - 428px);
  overflow-y: auto;
  margin-top: 22px;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.contant-msg span {
  padding: 10px;
  display: block;
  background-color: #f8f8f8;
  border-radius: 4px;
  margin-top: 5px;
  font-family: pingfang-SC;
  font-size: 14px;
  color: #312f31;
}

.recommed-container {
  padding: 8px;
  width: 316px;
  height: 88px;
  box-shadow: 0 0 12px rgb(0 0 0 / 12%);
  border-radius: 4px;
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
}

.recommed-container .rec-left {
  width: 50%;
  padding: 8px 12px;
  height: 72px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rec-num {
  font-family: PingFang SC;
  font-size: 24px;
  line-height: 33px;
  font-weight: 500;
  color: #312f31;
}

.rec-text {
  font-family: PingFang SC;
  font-size: 14px;
  color: #383638;
}

.rec-participate {
  font-family: PingFang SC;
  font-size: 12px;
  color: #8d8b8d;
}

.recommed-container .rec-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-top {
  width: 130px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item-top .img-container {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
}
.item-top .img-container img {
  width: 65%;
}
.item-top span {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #312f31;
  margin-left: 6px;
}

.item-bottom {
  width: 130px;
  height: 40px;
  background-color: #f8f8f8;
  border-radius: 2px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.item-bottom .img-container {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
}
.item-bottom .img-container img {
  width: 65%;
}
.item-bottom span {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #312f31;
  margin-left: 6px;
}

.medicine-introduction {
  width: 100%;
  margin-top: 20px;
}

.medicine-introduction .medicine-title {
  position: relative;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
  display: flex;
  flex-direction: column;
}

.info-tab span {
  border-bottom: 2px solid #409eff;
}
.medicine-title p {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #605e60;
  margin-top: 12px;
  text-align: justify;
  line-height: 22px;
}
.right-container {
  float: right;
  width: 780px;
  position: relative;
}
</style>