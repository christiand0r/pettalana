<template>
  <li
    class="flex items-center justify-between pointer px-4 py-2 hover:bg-cultured"
    @click="setCategoryParam()"
  >
    <p>{{ name }}</p>
    <i class="fa-solid fa-angle-right"></i>
  </li>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    name: {
      type: String,
      required: true,
      default: "Categoria",
    },
  },
  methods: {
    setCategoryParam() {
      this.$router.push({
        name: "categories",
        params: { category: this.name.toLowerCase() },
      });
    },
  },
};
</script>

<style></style>
