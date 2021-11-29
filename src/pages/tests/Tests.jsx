import { Container } from "@mui/material";
import * as React from "react";
import GridAccordion from "./GridAccordion";

export default function Activities() {
  const courseList = [
    "Português",
    "Matemática",
    "Bilogia",
    "Inglês",
    "Geografia",
    "História",
    "Filosofia",
  ];
  return (
    <Container maxWidth='false'>
      <h1 sx={{ textAlign: "center" }}>Provas</h1>
      {courseList.map((course) => {
        return <GridAccordion course={course}></GridAccordion>;
      })}
    </Container>
  );
}
