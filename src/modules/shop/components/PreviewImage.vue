<template>
  <figure class="pointer">
    <picture>
      <img :src="image" alt="Producto" class="aspect-mobile object-contain" />
    </picture>
    <figcaption :style="colorStock(tag)" class="font-bold">
      {{ tag }}
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: "PreviewImage",
  props: {
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
  },

  methods: {
    colorStock(key) {
      const colorMap = {
        disponible: {
          bg: "#d1e7dd",
          text: "#198754",
        },
        sin_stock: {
          bg: "#f8d7da",
          text: "#dc3545",
        },
      };

      const parsedKey = key.toLowerCase().split(" ").join("_");

      return `background-color:${colorMap[parsedKey].bg}; color:${colorMap[parsedKey].text};`;
    },
  },
};
</script>

<style scoped>
figure {
  position: relative;
}

figcaption {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.25rem 0.5rem;
  background-color: var(--primaryGray);
}
</style>
