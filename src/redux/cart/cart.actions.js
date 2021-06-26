import { cartTypes } from "./cart.types";

const { TOGGLE_CART_HIDDEN, ADD_ITEM } = cartTypes;

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
