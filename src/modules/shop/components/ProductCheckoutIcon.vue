<template>
  <div class="relative pointer">
    <i
      class="fa-solid fa-bag-shopping text-4xl text-cultured"
      @click="toggleResume"
    ></i>
    <span class="counterItem font-bold absolute rounded-full">{{
      quantityProducts
    }}</span>
    <CheckoutZone :cart="cart" v-if="showResume" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CheckoutZone from "./CheckoutZone.vue";

export default {
  name: "ProductCheckoutIcon",

  data() {
    return {
      showResume: false,
    };
  },

  methods: {
    toggleResume() {
      this.showResume = !this.showResume;
    },
  },
  computed: {
    quantityProducts() {
      return this.cart.length;
    },
    ...mapState("shop", ["cart"]),
  },
  components: {
    CheckoutZone,
  },
};
</script>

<style scoped>
.counterItem {
  display: flex;
  align-items: center;
  background-color: var(--primaryOrange);
  bottom: -0.05rem;
  height: 1.25rem;
  color: #fff;
  justify-content: center;
  left: -0.5rem;
  width: 1.25rem;
}
</style>
i
