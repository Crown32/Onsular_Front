//Base import for all the React components
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import React from "react";
//Base import for the main .js in the project
import Navbar from "./global/navbar/Navbar";
import Login from "./pages/logins/Login";
import Register from "./pages/logins/Register";
import Calendar from "./pages/home/Calendar";
import Home from "./pages/home/Home";
//This function is a React Component, all components functions need to start with captilized letter
export default function App() {
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const lightTheme = createTheme({ palette: { mode: "light" } });

  return (
    <ThemeProvider theme={lightTheme}>
      <Navbar></Navbar>
      <Home></Home>
    </ThemeProvider>
  );
}

//Here we use the ReactDom to start the aplication , used primary in the root Component, this one
