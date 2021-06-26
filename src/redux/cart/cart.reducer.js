import { cartTypes } from "./cart.types";
import { addItemToCart } from "./cart.utils";

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = cartTypes;

const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  const { cartItems } = state;
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(cartItems, payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
