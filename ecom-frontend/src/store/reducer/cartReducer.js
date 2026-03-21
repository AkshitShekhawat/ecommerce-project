const initialState = {
  cart: [],
  totalPrice: 0,
  cartId: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // This single case now handles adding, updating, and removing
    // because it just syncs whatever the backend tells it to!
    case "GET_USER_CART_PRODUCTS":
      return {
        ...state,
        cart: action.payload,
        totalPrice: action.totalPrice,
        cartId: action.cartId,
      };

    // Wipes the cart cleanly on logout
    case "CLEAR_CART":
      return {
        cart: [],
        totalPrice: 0,
        cartId: null,
      };

    default:
      return state;
  }
};
