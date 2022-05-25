<template>
  <label for="searcherProducts" class="flex w-full">
    <div class="flex items-center gap-2 w-full">
      <i class="fa-solid fa-magnifying-glass text-middle-blue"></i>
      <input
        type="search"
        id="searcherProducts"
        placeholder="Buscar producto y categoría"
        class="flex-1 outline-none truncate"
        v-model="termSearch"
        @input="handleTerm()"
      />
    </div>
    <ul></ul>
  </label>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Searcher",
  data() {
    return {
      termSearch: "",
    };
  },
  methods: {
    handleTerm() {
      this.$store.commit("shop/updateTerm", this.termSearch);
    },
  },
};
</script>

<style scoped>
label {
  background-color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
}
</style>
