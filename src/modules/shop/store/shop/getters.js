// export const myGetter = (state) => { return state }

export const searchByTerm = ({ term, products }) => {
  if (term.length === 0) return products;

  const byName = products.filter(({ name }) =>
    name.toLowerCase().includes(term.toLowerCase())
  );

  const byCategory = products.filter(({ category }) =>
    category.name.toLowerCase().includes(term.toLowerCase())
  );

  return [...byName, ...byCategory];
};

export const getProductsByCategory =
  ({ products }) =>
  (categoryName) => {
    return products.filter(
      ({ category }) => category.name.toLowerCase() === categoryName
    );
  };
