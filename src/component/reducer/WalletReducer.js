export const walletDataInitData = {
balance:"00"
};

export const WalletReducerInit = (initialValue = walletDataInitData) => initialValue;

export const WalletReducer = (state, action) => {
   console.log("aaaa", action);
  switch (action.type) {
    case "wallet":
      return { ...action.payload };
    default:
      return state;
  }
};
