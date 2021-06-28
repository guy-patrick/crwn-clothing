import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../redux/shop/shop.selectors";
import { WithSpinner } from "../components/WithSpinner";
import Collection from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

export const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);
