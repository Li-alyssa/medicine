<template>
  <div class="medicine_container">
    <div class="medi_container">
      <div class="medi_title">共查询到XXX种药品</div>
      <router-link to="/variety/:id">
        <div class="medi_main">
          <div class="main_container">
            <div class="logo_container">
              <img
                data-v-375288e5=""
                onerror="javascript:this.src='/images/blank.svg';"
                alt="清华大学"
              />
            </div>
            <div class="title_container">
              <div>
                <span>安康欣胶囊</span>
                <div>生产公司:安徽高山药业有限公司</div>
                <div>批准文号:国药准字Z20023377</div>
                <div>
                  <span>发明专利： 0</span>
                  <span>相关论文： 1</span>
                  <span>未纳入医保</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="medi_main">
          <div class="main_container">
            <div class="logo_container">
              <img
                data-v-375288e5=""
                onerror="javascript:this.src='/images/blank.svg';"
                alt="清华大学"
              />
            </div>
            <div class="title_container">
              <div>
                <span>安康欣胶囊</span>
                <div>生产公司:安徽高山药业有限公司</div>
                <div>批准文号:国药准字Z20023377</div>
                <div>
                  <span>发明专利： 0</span>
                  <span>相关论文： 1</span>
                  <span>未纳入医保</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="medi_main">
          <div class="main_container">
            <div class="logo_container">
              <img
                data-v-375288e5=""
                onerror="javascript:this.src='/images/blank.svg';"
                alt="清华大学"
              />
            </div>
            <div class="title_container">
              <div>
                <span>安康欣胶囊</span>
                <div>生产公司:安徽高山药业有限公司</div>
                <div>批准文号:国药准字Z20023377</div>
                <div>
                  <span>发明专利： 0</span>
                  <span>相关论文： 1</span>
                  <span>未纳入医保</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.medicine_container {
  min-height: 375px;
}
.medicine_container .medi_container {
  width: 876px;
  margin: 16px auto 0;
}
.medi_container .medi_title {
  font-family: PingFang SC;
  font-size: 14px;
  color: #605e60;
}

.medi_main .main_container:hover {
  box-shadow: 0 3px 12px 0 rgb(0 0 0 / 10%);
  cursor: pointer;
}
.medi_main .main_container:first-child {
  margin-top: 14px;
}

.medi_main .main_container {
  position: relative;
  display: flex;
  padding: 20px 0 20px 20px;
  background-color: #fff;
  border-radius: 4px;
}

.medi_main .main_container .logo_container img {
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-top: 20px;
}
img,
input,
select {
  vertical-align: middle;
}
abbr,
acronym,
fieldset,
img {
  border: 0;
}

.medi_main .main_container .title_container {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.medi_main .main_container .title_container div:first-child {
  font-family: PingFangSC-Semibold;
  font-size: 18px;
  color: #383638;
  /* display: flex;
  align-items: center; */
}
.medi_main .main_container:hover .title_container div:first-child {
  color: #d60b0a;
}
.medi_main .main_container .title_container div:nth-child(2) {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #8e8c8e;
  margin-top: 4px;
}

.medi_main .main_container .title_container div:nth-child(3) {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #8e8c8e;
  margin-top: 4px;
}

.medi_main .main_container .title_container div:nth-child(4) {
  margin-top: 3px;
}

.medi_main .main_container .title_container div:nth-child(4) span {
  height: 20px;
  background-color: #f8f8f8;
  border-radius: 4px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  line-height: 20px;
  color: #8d8b8d;
  padding: 2px 8px;
}

.medi_main
  .main_container
  .title_container
  div:nth-child(4)
  span:not(:first-child) {
  margin-left: 8px;
}

@media screen and (max-width: 894px) {
  .medicine_container .medi_container {
    width: 95%;
    margin: 16px auto 0;
  }
}
</style>