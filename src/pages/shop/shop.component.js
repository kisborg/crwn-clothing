import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

export default function ShopPage({ match }) {
  return (
    <div>
      <Route exact path ={`${match.path}`} component={ CollectionsOverview } />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

