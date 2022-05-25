// export const myMutation = (state) => { }

export const setProducts = (state, products) => {
  state.products = [...state.products, ...products];
  state.loading = false;
};

export const setSubtotal = (state) => {};

export const setItemCart = (state, item) => {
  state.cart = [...state.cart, item];
};

export const updateTerm = (state, term) => (state.term = term);
