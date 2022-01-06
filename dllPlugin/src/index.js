import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";

const SayHello = () => {
  return <div>{_.join(["Hello", "Webpack!"], " ")}</div>;
};

ReactDOM.render(<SayHello />, document.getElementById("hello"));
