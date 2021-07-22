<template>
  <div class="cart-list"></div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "CartList",
  components: {
    NavBar,
  },
  computed: {
    cartLengths() {
      return this.$store.state.cartList.length;
    },
  },
};
</script>

<style>
</style> 