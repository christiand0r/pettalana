<template>
  <aside class="col-span-full md:col-span-1">
    <div
      class="flex items-center justify-center gap-4 p-2 w-full text-white bg-blue-sapphire"
    >
      <h2 class="text-2xl">Categorías</h2>
      <i class="fa-solid fa-bars text-xl pointer" @click="handleToggle"></i>
    </div>
    <ul :class="toggleCategories">
      <CategoryItem v-for="{ id, name } of categories" :key="id" :name="name" />
    </ul>
  </aside>
</template>

<script>
import { defineAsyncComponent } from "@vue/runtime-core";
import helpHttp from "@/helpers/helpHttp.js";

export default {
  name: "CategoryList",
  data() {
    return {
      categories: [],
      showCategories: true,
    };
  },
  async mounted() {
    const categories = await helpHttp("product-category");
    this.categories = categories;
  },
  methods: {
    handleToggle() {
      this.showCategories = !this.showCategories;
    },
  },
  computed: {
    toggleCategories() {
      return this.showCategories ? "scrollableList show" : "scrollableList";
    },
  },
  components: {
    CategoryItem: defineAsyncComponent(() => import("./CategoryItem.vue")),
  },
};
</script>

<style>
.scrollableList {
  overflow-y: scroll;
  height: 0;
  opacity: 0;
  transition: 0.3s height ease, 0.25s opacity ease;
}

.scrollableList.show {
  height: calc(100% - 48px);
  opacity: 1;
}

.scrollableList::-webkit-scrollbar {
  width: 4px;
  height: 8px;
}

.scrollableList::-webkit-scrollbar-thumb {
  background-color: var(--primaryGray);
}
</style>
