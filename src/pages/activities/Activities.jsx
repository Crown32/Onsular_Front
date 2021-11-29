import { Container } from "@mui/material";
import * as React from "react";
import GridAccordion from "./GridAccordion";

export default function Tests() {
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
    <div>
      <h1 sx={{ textAlign: "center" }}>Atividades</h1>
      {courseList.map((course) => {
        return <GridAccordion course={course}></GridAccordion>;
      })}
    </div>
  );
}
