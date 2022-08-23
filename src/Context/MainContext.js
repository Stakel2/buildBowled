import React, { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import {
  initialLoginUser,
  LoginReducer,
  initializer,
} from "../component/pages/public/login/LoginReducer";
import {
  LoadingReducer,
  loadingInitialState,
  loadingInitializer,
} from "./LoadingReducer/LoaderReducer";

import {
  bannerInitialData,
  bannerInitializer,
  BannerReducer, 
} from "../component/reducer/BannerReducer";
import {
  CollectionInitialData,
  CollectionInitializer,
  CollectionReducer,
  NftCollectionInitializer,
  NftCollectionReducer,
} from "../component/reducer/CollectionReducer";
import {
  UserDataInitializer,
  UserDataReducer,
  UserInitialData,
} from "../component/reducer/UserDataReducer";
// import {
//   UserEditDataInitializer,
//   UserEditDataReducer,
//   UserEditInitialData,
// } from "../component/reducer/UserEditDataReducer";
import {
  UserLocationInitial,
  UserLocationInitializer,
  UserLocationReducer,
} from "../component/reducer/UserLocationReducer";
import {
  WalletReducerInit,
  WalletReducer,
  walletDataInitData,
} from "../component/reducer/WalletReducer";

export const context = React.createContext();

function ContextProvider({ children }) {
  const navigate = useNavigate();

  const [loginUser, dispatchLoginUser] = useReducer(
    LoginReducer,
    initialLoginUser,
    initializer
  );
  const [loading, dispatchLoading] = useReducer(
    LoadingReducer,
    loadingInitialState,
    loadingInitializer
  );
  const [banner, dispatchBannerData] = useReducer(
    BannerReducer,
    bannerInitialData,
    bannerInitializer
  );
  const [collection, dispatchCollectionData] = useReducer(
    CollectionReducer,
    CollectionInitialData,
    CollectionInitializer
  );
  const [nftCollection, dispatchNftCollectionData] = useReducer(
    NftCollectionReducer,
    bannerInitialData,
    NftCollectionInitializer
  );

  const [userData, dispatchUserData] = useReducer(
    UserDataReducer,
    UserInitialData,
    UserDataInitializer
  );
  // const [userEditData, dispatchUserEditData] = useReducer(
  //   UserEditDataReducer,
  //   UserEditInitialData,
  //   UserEditDataInitializer
  // );

  const [userLocation, dispatchUserLocation] = useReducer(
    UserLocationReducer,
    UserLocationInitial,
    UserLocationInitializer
  );

  const [walletData, dispatchWallet] = useReducer(
    WalletReducer,
    walletDataInitData,
    WalletReducerInit
  );

  useEffect(() => {
    localStorage.setItem("login", JSON.stringify(loginUser));
  }, [loginUser]);

  return (
    <context.Provider
      value={{
        walletData: walletData,
        walletDispatch: dispatchWallet,

        loginState: loginUser,
        loginDispatch: dispatchLoginUser,

        loading: loading,
        dispatchLoading: dispatchLoading,

        bannerData: banner,
        dispatchBannerData: dispatchBannerData,

        collectionData: collection,
        dispatchCollectionData: dispatchCollectionData,

        nftcCollectionData: nftCollection,
        dispatchNftCollectionData: dispatchNftCollectionData,

        userData: userData,
        dispatchUserData: dispatchUserData,

        // userEditData: userEditData,
        // dispatchUserEditData: dispatchUserEditData,

        userLocation: userLocation,
        dispatchUserLocation: dispatchUserLocation,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default ContextProvider;
