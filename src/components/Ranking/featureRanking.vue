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
import index from "@/components/Ranking/FeatureRank/index";
import ranking from "@/components/Ranking/FeatureRank/ranking.vue";

export default {
  name: "FeatureRank",
  components: {
    index,
    ranking,
  },
};
</script>

<style scoped>
.ranking-up {
  margin-top: 60px;
  position: relative;
  min-height: 245px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.ranking-down {
  position: relative;
  width: 1180px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
}
@media screen and (min-width: 895px) and (max-width: 1210px) {
  .ranking-down {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 894px) {
  .ranking-down {
    position: relative;
    width: 100%;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>