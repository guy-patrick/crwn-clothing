import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../redux/cart/cart.selectors";
import { toggleCartHidden } from "../redux/cart/cart.actions";
import { withRouter } from "react-router-dom";
import { CartItem } from "./CartItem";
import { CustomButton } from "./CustomButton";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      title="go to checkout"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
