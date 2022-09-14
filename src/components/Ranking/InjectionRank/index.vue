<template>
  <div class="top-bar">
    <div class="gradient-bar"></div>
    <div class="container">
      <div id="breadcrumb">
        <div class="breadcrumb">
          <router-link to="/Rank"
            ><div class="breadcrumb-item">排行榜</div></router-link
          >
          <div class="breadcrumb-icon"></div>
          <div class="breadcrumb-item">(非)注射排行榜</div>
          <!-- <div class="breadcrumb-icon"></div> -->
        </div>
      </div>
      <div id="textexpansion">
        <div id="content">
          <div class="content-title">
            <h1>
              <span>{{ value }}</span>
              年(非)注射排行榜
            </h1>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="content-text">
            <div class="text-expansion">
              <div class="expansion-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      value: "2022",
      options: [
        {
          value: 2022,
          label: "2022",
        },
        {
          value: 2021,
          label: "2021",
        },
        {
          value: 2020,
          label: "2020",
        },
        {
          value: 2019,
          label: "2019",
        },
        {
          value: 2018,
          label: "2018",
        },
        {
          value: 2017,
          label: "2017",
        },
        {
          value: 2016,
          label: "2016",
        },
        {
          value: 2015,
          label: "2015",
        },
        {
          value: 2014,
          label: "2014",
        },
        {
          value: 2013,
          label: "2013",
        },
        {
          value: 2012,
          label: "2012",
        },
      ],
    };
  },
};
</script>

<style scoped>
.top-bar {
  background-image: url(@/assets/1.jpg);
  position: relative;
  min-height: 245px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.gradient-bar {
  position: absolute;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(270deg, #fff, #fff);
  opacity: 0.5;
  pointer-events: none;
}

.container {
  width: 1180px;
  margin-left: auto;
  margin-right: auto;
}

.breadcrumb {
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 50px;
}

.breadcrumb-item {
  white-space: nowrap;
  font-size: 16px;
  color: hsla(0, 0%, 100%, 0.7);
  font-family: PingFangSC-Regular;
  display: inline-block;
}

.breadcrumb-icon {
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 12px;
  margin-right: 5px;
  background-image: url(/src/assets/箭头.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

#textexpansion {
  margin-top: 20px;
}

#content {
  width: 880px;
  overflow: hidden;
}

.content-title {
  display: flex;
  align-items: center;
}

.content-title h1 {
  font-size: 32px;
  font-family: PingFangSC-Semibold;
  line-height: 45px;
  color: #fff;
  margin: 0 12px 0 0;
  font-weight: 400;
  display: block;
}

.el-select {
  width: 96px;
}
@media screen and (min-width: 895px) and (max-width: 1210px) {
  .container {
    width: 100%;
  }

  #content {
    width: 100%;
    overflow: hidden;
  }
}
@media screen and (max-width: 894px) {
  .container {
    width: 100%;
  }

  #content {
    width: 100%;
    overflow: hidden;
  }
}
</style>