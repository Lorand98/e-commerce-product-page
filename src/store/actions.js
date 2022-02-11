export const ACTION_LIST = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

const actions = {
  addToCart(payload) {
    return { type: ACTION_LIST.ADD_TO_CART, payload };
  },

  removeFromCart() {
    return { type: ACTION_LIST.REMOVE_FROM_CART, payload };
  },
};

export default actions;
