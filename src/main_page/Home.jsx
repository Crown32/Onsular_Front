import React from "react";
import Calendar from "./Calendar";
import Navbar from "../global/navbar/Navbar";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Navbar></Navbar>
      <Calendar></Calendar>
    </Container>
  );
}
