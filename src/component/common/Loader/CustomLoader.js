import React from "react";
var __html = require("./Loader.html");
var template = { __html: __html };

function CustomLoader() {
  return <div>dangerouslySetInnerHTML={template}</div>;
}

export default CustomLoader;
