import { createStore } from "vuex";

import shop from "../modules/shop/store/shop";

const store = createStore({
  modules: {
    shop,
  },
});

export default store;
