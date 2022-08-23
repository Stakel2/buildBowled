import { apiCallGet } from "../../Axios/Axios";
import { brandsApiCallGet } from "../../Axios/Brands";
import { apiNftCallGet } from "../../Axios/Nft";
import { userApiCallGet } from "../../Axios/User";

export const GetBallance = ({
  setLoading,
  walletDispatch,
  selectedCoin = "matic",
}) => {
  setLoading(true);
  brandsApiCallGet(`wallet/get_balancev1/${localStorage.getItem("userId")}`)
    .then((res) => {
      if (res) {
        let bb = { balance: 0, crx: 0 };
        let amnt = 0;
        let crcx = 0;
        res.data.map((e) => {
          if (e.is_fiat == 1) crcx = e.currentBalance;
          {
            amnt += parseFloat(e.amountToPay);
            bb.balance = amnt;
            bb.crx = crcx;
          }
        });

        walletDispatch({
          type: "wallet",
          payload: { ...bb },
        });
      }
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
    });
};

export const GetBanner = ({ setLoading, dispatchBannerData }) => {
  setLoading(true);
  apiCallGet(`/banner/list/${10}/${0}`, {}, "toastOff")
    .then(async (res) => {
      let data = await res?.data;
      if (data.rows.length) {
        await dispatchBannerData({
          type: "banner",
          payload: { ...data },
        });
      }
      setLoading(false);
    })
    .catch((err) => {
      // console.log("Getting banner error", err);
      setLoading(false);
    });
  setLoading(false);
};

export const GetCollectionList = ({
  setLoading,
  dispatchCollectionData,
  limit,
  pageNo,
}) => {
  apiNftCallGet(`/collections/list/${limit}/${pageNo}`, {}, "toastOff")
    .then(async (res) => {
      let data = await res?.data;
      if (data.rows.length) {
        await dispatchCollectionData({
          type: "collection",
          payload: { ...data },
        });
      }
      setLoading(false);
    })
    .catch((err) => {
      // console.log("Getting collection error", err);
      setLoading(false);
    });
  setLoading(false);
};

export const GetUserData = ({ setLoading, dispatchUserData }) => {
  userApiCallGet("/profile")
    .then(async (res) => {
      let data = await res?.data;
      if (data) {
        if (data?.userDetails?.email && data?.userDetails?.phone_no) {
          await localStorage.setItem("isFromMobile", 3);
          localStorage.setItem("email", data?.userDetails?.email);
          localStorage.setItem("mobile", data?.userDetails?.phone_no);
        } else if (data?.userDetails?.email) {
          await localStorage.setItem("isFromMobile", 2);
          localStorage.setItem("email", data?.userDetails?.email);
        } else if (data?.userDetails?.phone_no) {
          await localStorage.setItem("isFromMobile", 1);
          localStorage.setItem("mobile", data?.userDetails?.phone_no);
        } else {
          await localStorage.setItem("isFromMobile", 0);
        }

        await dispatchUserData({
          type: "userData",
          payload: { ...data },
        });
      }
      setLoading(false);
    })
    .catch((err) => {
      // console.log("Getting user data error", err);
      setLoading(false);
    });
  setLoading(false);
};

export const GetNftCollections = (
  { setLoading, dispatchNftCollectionData },
  id,
  limit,
  offset
) => {
  // console.log(id);
  apiNftCallGet(`nftcollections/${id}/${limit}/${offset}`)
    .then(async (res) => {
      let data = await res?.data;
      if (data) {
        await dispatchNftCollectionData({
          type: "nftCollections",
          payload: { ...data },
        });
      }
      setLoading(false);
    })
    .catch((err) => {
      // console.log("Getting collection error", err);
      setLoading(false);
    });
  setLoading(false);
};
