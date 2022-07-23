<template>
  <div class="rank">
    <top />
    <index />
  </div>
</template>

<script>
import top from "@/components/Rank/top.vue";
import index from "@/components/Rank/index";

export default {
  components: {
    top,
    index,
  },
};
</script>

<style scoped>
.rank {
  margin-top: 60px;
}
</style>