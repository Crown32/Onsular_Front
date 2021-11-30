//Base import for all the React components
import React from "react";
//Base import for the main .js in the project
import reactDom from "react-dom";
import App from "./App";
import Router from "./Router";

reactDom.render( < Router / > , document.getElementById("root"));