<template>
  <Loader v-if="loading" />

  <div class="h-full">
    <header
      class="flex flex-col md:flex-row justify-between p-4 gap-y-4 bg-metallic-seaweed"
    >
      <div class="logo">
        <img
          src="@/assets/pettalana_logo.png"
          alt="Pettalana"
          class="mx-auto"
        />
      </div>
      <div class="flex gap-4 w-full max-w-xs">
        <Searcher />
        <ProductCheckout />
      </div>
    </header>
    <div class="grid grid-cols-4">
      <CategoryList />
      <main class="col-span-full md:col-span-3">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import { mapActions, mapState } from "vuex";
import Loader from "@/components/Loader.vue";

export default {
  name: "ShopLayout",

  created() {
    this.loadProducts();
  },
  methods: {
    ...mapActions("shop", ["loadProducts"]),
  },
  computed: {
    ...mapState("shop", ["loading"]),
  },

  components: {
    Loader,
    CategoryList: defineAsyncComponent(() =>
      import("../components/CategoryList.vue")
    ),
    Searcher: defineAsyncComponent(() => import("../components/Searcher.vue")),
    ProductCheckout: defineAsyncComponent(() =>
      import("../components/ProductCheckoutIcon.vue")
    ),
  },
};
</script>

<style scoped>
aside {
  border: 1px solid var(--primaryGray);
  border-width: 0 1px 0 0;
}

main {
  height: calc(100vh - 81px);
  overflow-y: scroll;
}

main::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

main::-webkit-scrollbar-thumb {
  background-color: var(--primaryGray);
}

.grid {
  height: calc(100vh - 81px);
}

.logo img {
  width: 100%;
  max-width: 220px;
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
</style>
