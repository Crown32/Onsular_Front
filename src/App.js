//Base import for all the React components
import React from "react";
//Base import for the main .js in the project
import Navbar from "./global/navbar/navbar";
import Login from "./logins/login";
import Register from "./logins/register";
//This function is a React Component, all components functions need to start with captilized letter
export default function App() {
  //Every component should return some JSX, basically the React Html
  return (
    <div>
      <Navbar></Navbar>
      <Login></Login>
      <Register></Register>
    </div>
  );
}

//Here we use the ReactDom to start the aplication , used primary in the root Component, this one
