export const UserLocationInitial = "";
  
  export const UserLocationInitializer = (initialValue = UserLocationInitial) =>
    initialValue;
  
  export const UserLocationReducer = (state, action) => {
    // console.log("aaaa", action);
    switch (action.type) {
      case "userlocation":
        return action.payload;
  
      default:
        return state;
    }
  };