<template>
  <div class="out-container">
    <div class="container">
      <div class="left-container">
        <div class="medicine-container">
          <div class="medi-container">
            <div class="medi-msg">
              <div class="medi-info">
                <img
                  data-v-375288e5=""
                  onerror="javascript:this.src='/images/blank.svg';"
                  src="https://www.shanghairanking.cn/_uni/logo/27532357.png"
                  alt="清华大学"
                />
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
                  <span>【是否医保】否</span>
                  <span>【纳入医保时间】</span>
                  <span>【是否基药】否</span>
                  <span>【是否中药保护品种】否</span>
                  <span>【是否药典收录】否</span>
                  <span>【性状】本品为薄膜衣片</span>
                  <span>【规格】盒</span>
                  <span>【用法用量】一日2次</span>
                  <span>【不良反应】尚不明确</span>
                  <span>【注意事项】尚不明确</span>
                  <span>【执行标准】无</span>
                  <span>【是否注射类】否</span>
                  <span>【是否民族药】否</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right-container"></div>
    </div>
  </div>
</template>

<script>
export default {};
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
  top: 70px;
  float: left;
  position: sticky;
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

.medi-info img {
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
</style>