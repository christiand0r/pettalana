<template>
  <div class="checkoutZone absolute">
    <div class="checkoutDetail">
      <h4 class="font-bold text-2xl">Resumen de Compra</h4>

      <CheckoutItem
        v-for="item of cart"
        :name="item.name"
        :price="item.price"
        :quantity="item.quantity"
        :key="item.code"
      />

      <div class="block">
        <p>
          Subtotal: <span>${{ calculateSubtotal }} CLP</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutItem from "./CheckoutItem.vue";

export default {
  name: "CheckoutZone",
  props: {
    cart: {
      type: Array,
      required: true,
    },
  },
  computed: {
    calculateSubtotal() {
      if (this.cart.length === 0) return 0;

      const prices = this.cart.map((item) => item.price);

      return prices.reduce((prev, current) => prev + current, 0);
    },
  },
  components: {
    CheckoutItem,
  },
};
</script>

<style scoped>
.checkoutZone {
  right: 0;
  bottom: calc(-20px - 480px);
  min-width: 480px;
  min-height: 480px;
  background-color: #fff;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  z-index: 9;
}

.checkoutDetail {
  padding: 1rem;
  height: 100%;
}
</style>
