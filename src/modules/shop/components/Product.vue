<template>
  <article class="productItem">
    <PreviewImage :image="image" :tag="tag" />
    <p class="truncate" :title="name">{{ name }}</p>
    <p>${{ price }} CLP</p>
    <CounterProducts icon @onClick="addToCart" />
  </article>
</template>

<script>
import CounterProducts from "./CounterProducts.vue";
import PreviewImage from "./PreviewImage.vue";
import { mapActions } from "vuex";

export default {
  name: "Product",
  props: {
    code: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: "https://placeimg.com/640/480/any",
    },
    tag: {
      type: String,
      required: true,
      default: "Sin Stock",
    },
    name: {
      type: String,
      required: true,
      default: "Producto",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  methods: {
    addToCart(quantity) {
      const payload = {
        code: this.code,
        price: this.price,
        name: this.name,
        quantity,
      };

      this.addItemCart(payload);
    },
    ...mapActions("shop", ["addItemCart"]),
  },
  components: {
    CounterProducts,
    PreviewImage,
  },
};
</script>

<style>
.productItem {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 150px;
  width: 100%;
}
</style>
