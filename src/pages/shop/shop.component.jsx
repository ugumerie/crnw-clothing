import React from "react";
import { Route } from  'react-router-dom'
import CollectionsOverView from '../../components/collections-overview/collections-overview.component'
import CollectionPage from "../collection/collection.component";

// match is beeing passed in by router from the app component
const ShopPage = ({ match }) => { 
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverView} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

export default ShopPage
