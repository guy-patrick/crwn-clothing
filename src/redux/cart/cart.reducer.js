import { cartTypes } from "./cart.types";
import { addItemToCart, removeItem, clearItemFromCart } from "./cart.utils";

const { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM, CLEAR_CART } =
  cartTypes;

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
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItem(cartItems, payload),
      };
    case CLEAR_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(cartItems, payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
