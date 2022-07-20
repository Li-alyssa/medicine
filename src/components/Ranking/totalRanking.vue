<template>
  <div class="ranking">
    <div class="ranking-up">
      <index />
    </div>
    <div class="ranking-down">
      <ranking />
    </div>
  </div>
</template>

<script>
import index from "@/components/Ranking/TotalRank/index.vue";
import ranking from "@/components/Ranking/TotalRank/ranking.vue";

export default {
  name: "totalRanking",
  components: {
    index,
    ranking,
  },
};
</script>

<style>
.ranking-up {
  margin-top: 60px;
  position: relative;
  min-height: 245px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-color: red;
}

.ranking-down {
  position: relative;
  width: 1180px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
  background-color: skyblue;
}
</style>