import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const shopDataSelector = (state) => state.shop;

export const selectCollectionsFromShopData = createSelector(
  [shopDataSelector],
  (shopData) => shopData.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollectionsFromShopData],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollectionsFromShopData], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);
