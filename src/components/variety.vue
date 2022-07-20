<template>
  <div class="variety">
    <Search />
    <Category />
  </div>
</template>

<script>
import Search from "@/components/Variety/Search.vue";
import Category from "@/components/Variety/Category.vue";

export default {
  name: "variety",
  components: {
    Search,
    Category,
  },
};
</script>

<style>
.variety {
  margin-top: 60px;
  overflow: hidden;
}
</style>