import { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionsStartAsync } from "../redux/shop/shop.actions";
import { Route } from "react-router-dom";
import { CollectionsOverviewContainer } from "../components/CollectionsOverviewContainer";
import { CollectionContainer } from "./CollectionContainer";

class Shop extends Component {
  unSubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
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
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(Shop);
