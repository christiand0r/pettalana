<template>
  <div class="flex items-center">
    <p class="flex-auto" v-if="text">Cantidad</p>
    <div class="counter">
      <span class="flex justify-center pointer w-8" @click="decreaseQuantity"
        >-</span
      >
      <input
        type="number"
        min="1"
        v-model="alwaysOne"
        @change="$emit('onClick', quantity)"
      />
      <span class="flex justify-center pointer w-8" @click="increaseQuantity"
        >+</span
      >
    </div>
    <i
      v-if="icon"
      @click="$emit('onClick', quantity)"
      class="icon fa-solid fa-cart-plus"
    ></i>
  </div>
</template>

<script>
export default {
  name: "CounterProducts",
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      quantity: 1,
    };
  },
  methods: {
    increaseQuantity() {
      this.quantity += 1;
    },
    decreaseQuantity() {
      this.quantity -= 1;
    },
  },
  computed: {
    withIcon() {
      if (this.text && this.text.length > 0) return (this.icon = false);
    },

    alwaysOne() {
      return Math.max(this.quantity, 0);
    },
  },
};
</script>

<style scoped>
.counter {
  display: flex;
  flex: 2;
  border: 1px solid var(--secondaryBlue);
  padding: 0.25rem;
}
.counter input[type="number"] {
  width: 100%;
  text-align: center;
  outline: none;
}

.counter input[type="number"]::-webkit-outer-spin-button,
.counter input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.icon {
  display: flex;
  align-items: center;
  background-color: var(--secondaryBlue);
  border: 1px solid var(--secondaryBlue);
  color: #fff;
  flex: 2;
  height: 34px;
  justify-content: center;
  padding: 0.25rem 0.5rem;
}
</style>
