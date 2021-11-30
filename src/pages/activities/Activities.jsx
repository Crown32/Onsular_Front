import { Container, Typography, Divider, Alert } from "@mui/material";
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
      <Container
        sx={{
          margin: "40px 0",
        }}
        maxWidth='xl'
      >
        <Typography
          sx={{
            marginLeft: "15px",
          }}
          variant='h4'
        >
          Atividades
        </Typography>
        <br></br>
        <Divider></Divider>
        <br></br>
        <Alert severity='warning'>
          <Typography>
            Muitas atividades acumuladas, se empenhe em finaliza-las!
          </Typography>
        </Alert>
      </Container>
      {courseList.map((course) => {
        return <GridAccordion course={course}></GridAccordion>;
      })}
    </div>
  );
}
