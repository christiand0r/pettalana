import helpHttp from "@/helpers/helpHttp.js";
// export const myAction = async (context) => {}

export const loadProducts = async ({ commit }) => {
  const products = await helpHttp("product");

  commit("setProducts", products);
};

export const calculateSubtotal = async ({ commit }) => {};

export const addItemCart = async ({ commit, state }, payload) => {
  const item = state.cart.find((item) => item.code === payload.code);

  if (item) {
    item.quantity = payload.quantity;
    return commit("setItemCart", item);
  }

  commit("setItemCart", payload);
  console.log(state);
};
