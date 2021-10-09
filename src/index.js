//Base import for all the React components
import React from "react";
//Base import for the main .js in the project
import reactDom from "react-dom";

//This function is a React Component, all components functions need to start with captilized letter
function Greeting() {
  //Every component should return some JSX, basically the React Html
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

function Person() {
  return <h1>Hello i'm Lucas</h1>;
}

function Message() {
  return <h2>And i'm a Junior Dev</h2>;
}

//Here we use the ReactDom to start the aplication, used primary in the root Component, this one
reactDom.render(<Greeting />, document.getElementById("root"));
