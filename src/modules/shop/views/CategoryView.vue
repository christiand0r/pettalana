<template>
  <div class="breadcrum">
    <router-link
      :to="{ name: 'dashboard' }"
      class="font-bold text-princeton-orange"
      >Productos</router-link
    >
    <span class="font-bold"> > {{ categoryCapitalize }}</span>
  </div>

  <EmptyCategory :categoryName="category" v-if="noProducts" />

  <div class="productsContainer" v-else>
    <Product
      v-for="product of products"
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
import { mapGetters } from "vuex";

import EmptyCategory from "../components/EmptyCategory.vue";
import helpCapitalize from "@/helpers/helpCapitalize.js";

export default {
  name: "CategoryView",

  props: {
    category: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      products: null,
      noProducts: false,
    };
  },

  methods: {
    getProducts() {
      // use getter from store and obtain the products with
      // the category especifed
      const products = this.getProductsByCategory(this.category);

      // If the length is same to 0 show a
      if (products.length === 0) return (this.noProducts = true);

      this.products = products;
      this.noProducts = false;
    },

    checkStock(value) {
      return value > 0 ? "Disponible" : "Sin Stock";
    },
  },

  computed: {
    categoryCapitalize() {
      return helpCapitalize(this.category);
    },
    ...mapGetters("shop", ["getProductsByCategory"]),
  },

  watch: {
    category() {
      this.getProducts();
    },
  },

  created() {
    this.getProducts();
  },

  components: {
    Product: defineAsyncComponent(() => import("../components/Product.vue")),
    EmptyCategory,
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

.modalHeader {
  border: 1px solid var(--primaryGray);
  padding: 0.5rem;
}

.detailProduct {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem 0;
  height: calc(100% - 42px);
  padding: 1rem 3rem;
}

.descriptionProduct::-webkit-scrollbar {
  width: 4px;
  height: 8px;
}

.descriptionProduct::-webkit-scrollbar-thumb {
  background-color: var(--primaryGray);
}

.breadcrum {
  padding: 1rem;
}
</style>
