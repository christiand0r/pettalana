<template>
  <div class="flex">
    <div class="flex flex-col">
      <p>{{ name }}</p>
      <p>{{ price }}</p>
    </div>
    <CounterProducts @onClick="updateCart" />
    <p>
      Subtotal: <span>${{ subtotal }} CLP</span>
    </p>
  </div>
</template>

<script>
import CounterProducts from "../components/CounterProducts.vue";
export default {
  name: "CheckoutItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      subtotal: 0,
    };
  },
  methods: {
    updateCart(quantity) {
      console.log(this.price * quantity);
      return (this.subtotal = this.price * quantity);
    },
  },
  computed: {},
  components: {
    CounterProducts,
  },
};
</script>

<style></style>
