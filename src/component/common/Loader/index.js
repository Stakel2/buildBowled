import React from "react";

import LoadingOverlay from "react-loading-overlay";
import "./main.css";
export default function LoaderComponent({ isLoading }) {
  return <LoadingOverlay active={isLoading} spinner text="Please wait..." />;
}
