<template>
  <div>
    <!-- echarts -->
    <div id="rightChart" class="main_container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("rightChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "突破因子:0.000",
          x: "center",
        },
        legend: {
          top: "bottom",
        },
        series: [
          {
            type: "pie",
            radius: ["5%", "40%"],
            center: ["50%", "45%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 0, name: "科研论文" },
              { value: 0, name: "科技投入" },
              { value: 0, name: "知识产权" },
              { value: 0, name: "科技奖励" },
              { value: 0, name: "其他单项(指南、共识和药典)" },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style scoped>
.main_container {
  width: 100%;
  height: 220px;
  /* overflow: hidden; */
}
</style>