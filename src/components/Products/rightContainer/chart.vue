<template>
  <div class="main">
    <div class="title">
      <div class="left"></div>
      <span>科技竞争力</span>
    </div>
    <div class="charts">
      <div class="chart-container">
        <div class="left-chart"><leftChart /></div>
        <div class="right-chart"><rightChart /></div>
      </div>
    </div>
  </div>
</template>

<script>
import leftChart from "@/components/Products/rightContainer/Charts/leftChart.vue";
import rightChart from "@/components/Products/rightContainer/Charts/rightChart.vue";
export default {
  components: {
    leftChart,
    rightChart,
  },
};
</script>

<style>
.main {
  margin-bottom: 20px;
  position: relative;
  background-color: #fff;
  border-radius: 4px;
  padding: 0 16px 16px;
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
  width: 4px;
  height: 16px;
  background-color: #e5002d;
  border-radius: 0 2px 2px 0;
}

.title span {
  margin-left: 12px;
  font-family: PingFangSC-Semibold;
  font-size: 16px;
  color: #312f31;
}

.charts {
  display: flex;
  text-align: center;
  position: relative;
}
.chart-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  min-height: 100px;
}
.left-chart {
  /* background-color: red; */
  width: 50%;
  height: 100%;
  border-right: 1px solid #ccc;
}

.right-chart {
  /* background-color: skyblue; */
  width: 50%;
  height: 100%;
}
</style>