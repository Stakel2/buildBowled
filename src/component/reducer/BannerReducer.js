export const bannerInitialData = {
  rows: [],
  count: 0,
};

export const bannerInitializer = (initialValue = bannerInitialData) =>
  initialValue;

export const BannerReducer = (state, action) => {
  switch (action.type) {
    case "banner":
      return { ...action.payload };

    default:
      return state;
  }
};
