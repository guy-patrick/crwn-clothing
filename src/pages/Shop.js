import { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../redux/shop/shop.actions";
import { Route } from "react-router-dom";
import { CollectionsOverviewContainer } from "../components/CollectionsOverviewContainer";
import { CollectionContainer } from "./CollectionContainer";

class Shop extends Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const {
      match: { path },
    } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={path} component={CollectionsOverviewContainer} />
        <Route path={`${path}/:collectionId`} component={CollectionContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
