import { Container } from "@mui/material";
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
    name: "Janeiro",
    faltas: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Fevereiro",
    faltas: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Março",
    faltas: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Abril",
    faltas: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Maio",
    faltas: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Junho",
    faltas: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Junho",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Julho",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: "Agosto",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Setembro",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Outubro",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Novembro",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dezembro",
    faltas: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Graph() {
  return (
    <Container sx={{ marginTop: "50px", textAlign: "center" }} maxWidth='false'>
      <h1>Faltas mensais</h1>
      <br></br>
      <br></br>
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          className='graph'
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <Tooltip />
          <CartesianGrid stroke='#f5f5f5' />
          <Line type='monotone' dataKey='faltas' stroke='#ff7300' yAxisId={0} />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
}
