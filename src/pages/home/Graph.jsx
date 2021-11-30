import { Alert, Container, Divider, Typography } from "@mui/material";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Janeiro",
    faltas: 1,
  },
  {
    month: "Fevereiro",
    faltas: 12,
  },
  {
    month: "Março",
    faltas: 2,
  },
  {
    month: "Abril",
    faltas: 24,
  },
  {
    month: "Maio",
    faltas: 4,
  },
  {
    month: "Junho",
    faltas: 23,
  },
  {
    month: "Junho",
    faltas: 44,
  },
  {
    month: "Julho",
    faltas: 13,
  },

  {
    month: "Agosto",
    faltas: 24,
  },
  {
    month: "Setembro",
    faltas: 1,
  },
  {
    month: "Outubro",
    faltas: 0,
  },
  {
    month: "Novembro",
    faltas: 12,
  },
  {
    month: "Dezembro",
    faltas: 0,
  },
];

export default function Graph() {
  const titleText = {
    marginLeft: "15px",
  };

  const title = {
    marginBottom: "40px",
  };

  return (
    <Container sx={{ marginTop: "50px" }} maxWidth='false'>
      <Container sx={title} maxWidth='xl'>
        <Typography sx={titleText} variant='h4'>
          Faltas mensais
        </Typography>
        <br></br>
        <Divider></Divider>
        <br></br>

        <Alert severity='error'>
          <Typography>
            Faltas acima de 20%, você não pode perder mais aulas!
          </Typography>
        </Alert>
      </Container>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey='month' />
          <Tooltip />
          <CartesianGrid stroke='var(--primary-color)' />
          <Line type='monotone' dataKey='faltas' stroke='red' yAxisId={0} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
