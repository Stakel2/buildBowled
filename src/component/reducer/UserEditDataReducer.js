export const UserEditInitialData = {
    data: [],
  };
  
  export const UserEditDataInitializer = (initialValue = UserEditInitialData) =>
    initialValue;
  
  export const UserEditDataReducer = (state, action) => {
    // console.log("aaaa", action);
    switch (action.type) {
      case "userEditData":
        return { ...action.payload };
  
      default:
        return state;
    }
  };
  