//Base import for all the React components
import React from "react";
//Base import for the main .js in the project
import reactDom from "react-dom";
import { Typography } from "@mui/material";

//This function is a React Component, all components functions need to start with captilized letter
function Greeting() {
  //Every component should return some JSX, basically the React Html
  return (
    <div>
      <h1>Teste</h1>
      <Typography>Teste de tipografia</Typography>
    </div>
  );
}

//Here we use the ReactDom to start the aplication, used primary in the root Component, this one
reactDom.render(<Greeting />, document.getElementById("root"));
