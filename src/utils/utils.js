import moment from "moment";
import reactImageSize from "react-image-size";
import { decode as base64_decode, encode as base64_encode } from "base-64";
import jwt from "jsonwebtoken";
// import CryptoJS from "crypto-js";

const ValidateImage = async ({ event, wid, hei }) => {
  const { width, height } = await reactImageSize(event);
  if (width === wid && height === hei) {
    return true;
  }
  return false;
};
const noExponents = function (num) {
  var data = String(num).split(/[eE]/);
  if (data.length == 1) return data[0];

  var z = "",
    sign = num < 0 ? "-" : "",
    str = data[0].replace(".", ""),
    mag = Number(data[1]) + 1;

  if (mag < 0) {
    z = sign + "0.";
    while (mag++) z += "0";
    return z + str.replace(/^\-/, "");
  }
  mag -= str.length;
  while (mag--) z += "0";
  return str + z;
};

function calculateBal(bal) {
  if (bal) {
    let balll = bal > 0 ? (bal / 100000000).toFixed(8) : bal / 100000000;
    let ball = balll.toString().match(/^-?\d+(?:\.\d{0,6})?/)[0];
    return ball == 0 ? "00.00" : noExponents(ball);
  } else return "00.00";
}

const formatDate = (date) => {
  return moment(date).format("MMM, DD, yyyy hh:mm a");
};

const stampToDate = (timeStamp) => {
  let date = new Date(timeStamp * 1000);
  return formatDate(date);
};

const limitCharacters = (text, count) => {
  return text?.length > count ? text?.slice(0, count) + ".." : text;
};
const getBase64 = (text) => {
  return base64_encode(text);
};
const jwtEncrypt = (data) => {
  const payload = data;
  const secret = "v2MOBrlkiWGC";
  const token = jwt.sign(payload, secret, { expiresIn: 36000 });
  if (!token) {
    console.log("not working...");
  }
  //console.log("token :: ", token);
  const finalData = { encrypting_token: token };
  return finalData;
};
const jwtEncryptToken = (data) => {
  let CryptoJS = require("crypto-js");
  let ciphertext = CryptoJS.AES.encrypt(data, "v2MOBrlkiWGC");
  return ciphertext;
};
export function requestEncryption(data) {
  let CryptoJS = require("crypto-js");
  // // Encrypt
  // let ciphertext = CryptoJS.AES.encrypt(data.toString(), "v2MOBrlkiWGC");
  // // return ciphertext.toString();
  // console.log("ciphertext--", ciphertext);
  // // Decrypt
  var bytes = CryptoJS.AES.decrypt(data.toString(), "v2MOBrlkiWGC");
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  console.log("plaintext--", plaintext);
}

export {
  ValidateImage,
  noExponents,
  formatDate,
  calculateBal,
  stampToDate,
  limitCharacters,
  jwtEncrypt,
  jwtEncryptToken,
};
