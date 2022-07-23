<template>
  <div>
    <!-- echarts -->
    <div id="main" class="main_container"></div>
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
      var myChart = this.$echarts.init(document.getElementById("main"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "科技因子:1.485",
          x: "center",
        },
        legend: {
          top: "bottom",
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            label: {
              normal: {
                position: "inner",
                show: false,
              },
            },
            radius: [5, 50],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 1, name: "科研论文" },
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