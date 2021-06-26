import { Component } from "react";
import { CollectionPreview } from "../components/CollectionPreview";
import { collections } from "./shop_data";

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      collections,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {collections.map((collection) => (
          <CollectionPreview key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default Shop;
