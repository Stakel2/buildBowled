export const UserInitialData = {
  data: [],
};

export const UserDataInitializer = (initialValue = UserInitialData) =>
  initialValue;

export const UserDataReducer = (state, action) => {
  // console.log("aaaa", action);
  switch (action.type) {
    case "userData":
      return { ...action.payload };

    default:
      return state;
  }
};
