export const loadingInitialState = {
  loading: true,
};

export const loadingInitializer = (initialValue = loadingInitialState) => ({
  loading: true,
});

export const LoadingReducer = (state, action) => {
  switch (action.type) {
    case "loadingOn":
      return action.payload;

    case "loadingOff":
      return action.payload;

    default:
      return state;
  }
};
