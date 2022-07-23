<template>
  <div id="product">
    <productHeader />
    <productContainer />
  </div>
</template>

<script>
import productContainer from "@/components/Products/productContainer.vue";
import productHeader from "@/components/Products/productHeader.vue";

export default {
  name: "product",
  components: {
    productHeader,
    productContainer,
  },
};
</script>

<style>
#product {
  overflow: hidden;
  margin-top: 60px;
}
</style>