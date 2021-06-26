import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../redux/cart/cart.selectors";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, cartItemsQuantity }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItemsQuantity}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItemsQuantity: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
