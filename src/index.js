import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import ContextProvider from "./Context/MainContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
var createHost = require("cross-domain-storage/host");
var createGuest = require("cross-domain-storage/guest");
var storageHost = createHost([
  {
    origin: "http://localhost:3000",
    allowedMethods: ["get", "set", "remove"],
  },
  {
    origin: "http://game-stage.bowled.io",
    allowedMethods: ["get", "set", "remove"],
  },
  {
    origin: "http://10.1.5.23:3000",
    allowedMethods: ["get"],
  }
]);

console.log("SHAIYAD------", storageHost);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

const loading = <div>Loading...</div>;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
