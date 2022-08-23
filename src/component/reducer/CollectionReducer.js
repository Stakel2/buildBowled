export const CollectionInitialData = {
  rows: [],
  count: 0,
};

export const CollectionInitializer = (initialValue = CollectionInitialData) =>
  initialValue;

export const CollectionReducer = (state, action) => {
  switch (action.type) {
    case "collection":
      return { ...action.payload };

    default:
      return state;
  }
};

export const NftCollectionInitializer = (
  initialValue = CollectionInitialData
) => initialValue;
export const NftCollectionReducer = (state, action) => {
  switch (action.type) {
    case "nftCollections":
      return { ...action.payload };

    default:
      return state;
  }
};
