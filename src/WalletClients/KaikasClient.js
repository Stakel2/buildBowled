import { toasts } from "../component/common/Toast/Toast";
import Caver from "caver-js";
import { NETWORK_CHAIN_ID } from "../constant";

let selectedAccount;

let isInitialized = false;

let provider = window.klaytn;
const caver = new Caver(provider);
console.log("PROVIDER", provider);
export const initKaikas = async (setTxnWithdrawAdd, type) => {
  if (typeof provider !== "undefined") {
    try {
      const accounts = await provider.enable();
      selectedAccount = accounts[0];

      // You now have an array of accounts!
      // Currently only one:
      // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']
    } catch (error) {
      // Handle error. Likely the user rejected the login
      console.error(error);
    }
    provider.on("accountsChanged", function (accounts) {
      // Time to reload your interface with accounts[0]!
      selectedAccount = accounts[0];
      type === "connect" && setTxnWithdrawAdd(selectedAccount);
    });

    provider.on("networkChanged", function () {
      // `networkChanged` event is only useful when auto-refresh on network is disabled
      // Otherwise, Kaikas will auto-reload pages upon network change
    });
    isInitialized = true;
    return true;
  } else {
    toasts.error("Please install Kaikas wallet on your browser!");
    return false;
  }
};

export const getOwnBalance = async () => {
  const balance = await caver.klay.getBalance(selectedAccount);
  return balance / 1000000000000000000;
};

export const depositTransaction = (amount, address, setLoading) => {
  console.log("PROVIDER1", provider);
  if (typeof provider === "undefined") {
    toasts.error("Please install Kaikas wallet on your browser!");
    setLoading(false);
    return false;
  }
  return new Promise(async (resolve, reject) => {
    if (provider.networkVersion === NETWORK_CHAIN_ID) {
      if (!isInitialized) {
        await initKaikas().then(async (res) => {
          if (res) {
            balanceCheckTrx(amount, address, resolve, reject, setLoading);
          } else {
            setLoading(false);
          }
        });
      } else {
        balanceCheckTrx(amount, address, resolve, reject, setLoading);
      }
    } else {
      setLoading(false);
      toasts.error("Please switch to Mainnet!");
    }
  });
};

const sendTransactionKaikas = async (amount, address, setLoading) => {
  return caver.klay
    .sendTransaction({
      type: "VALUE_TRANSFER",
      from: selectedAccount,
      to: address,
      value: caver.utils.toPeb(amount, "KLAY"),
      gas: 21000,
    })
    .once("transactionHash", (transactionHash) => {})
    .once("receipt", (receipt) => {})
    .once("error", (error) => {
      console.log(error.message);
      setLoading(false);
      toasts.error(
        error?.message ===
          "Returned error: Error: Kaikas Tx Signature: User denied transaction signature."
          ? "Popup closed by user!"
          : error.message
      );
    });
};

const balanceCheckTrx = async (
  amount,
  address,
  resolve,
  reject,
  setLoading
) => {
  await getOwnBalance()
    .then((balance) => {
      if (balance > amount) {
        sendTransactionKaikas(amount, address, setLoading)
          .then((res) => {
            setLoading(false);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
            setLoading(false);
          });
      } else {
        setLoading(false);
        toasts.error("Insufficient wallet balance");
      }
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);
    });
};

export function checkProvider() {
  if (typeof provider === "undefined") {
    toasts.error("Please install Kaikas wallet on your browser!");
    return false;
  } else return true;
}

export const withdrawToKaikas = async (setTxnWithdrawAdd, type, setLoading) => {
  await initKaikas(setTxnWithdrawAdd, type);
  return selectedAccount;
};
