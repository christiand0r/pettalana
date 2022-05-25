<template>
  <div class="productsContainer">
    <Product
      v-for="product of searchByTerm"
      :code="product.code"
      :image="product.photo"
      :name="product.name"
      :price="product.price"
      :tag="checkStock(product.stock)"
      :key="product.id"
    />
  </div>
  <nav class="navigationProducts"></nav>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapGetters, mapState } from "vuex";

export default {
  name: "DashboardView",

  methods: {
    checkStock(value) {
      return value > 0 ? "Disponible" : "Sin Stock";
    },
  },
  computed: {
    ...mapState("shop", ["term"]),
    ...mapGetters("shop", ["searchByTerm"]),
  },

  components: {
    Product: defineAsyncComponent(() => import("../components/Product.vue")),
    CounterProducts: defineAsyncComponent(() =>
      import("../components/CounterProducts.vue")
    ),
  },
};
</script>

<style scoped>
.productsContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem 5rem;
  padding: 2rem 5rem;
}
</style>
