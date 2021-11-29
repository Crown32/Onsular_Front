import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Badge, Container, Grid, Paper } from "@mui/material";
import { Button } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion
    sx={{ marginBottom: "10px" }}
    disableGutters
    elevation={0}
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    marginBottom: "10px",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1.2rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  width: "100%",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(3),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function GridAccordion({ course }) {
  return (
    <Accordion defaultExpanded='true'>
      <Badge sx={{ width: "100%" }} badgeContent={4} color='primary'>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography variant='h4'>{course}</Typography>
        </AccordionSummary>
      </Badge>
      <AccordionDetails>
        <Grid container spacing='24'>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <h3>Atividade 1º semestre</h3>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eum
                laudantium voluptate odit deleniti delectus deserunt animi totam
                fugiat quod ipsam vitae illo iste, sunt necessitatibus velit
                excepturi...
              </Typography>
              <br></br>
              <Button variant='contained' color='success'>
                Entregar atividade
              </Button>
            </Paper>
          </Grid>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <h3>Atividade 2º semestre</h3>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eum
                laudantium voluptate odit deleniti delectus deserunt animi totam
                fugiat quod ipsam vitae illo iste, sunt necessitatibus velit
                excepturi...
              </Typography>
              <br></br>
              <Button variant='contained' color='success'>
                Entregar atividade
              </Button>
            </Paper>
          </Grid>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <h3>Atividade 3º semestre</h3>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eum
                laudantium voluptate odit deleniti delectus deserunt animi totam
                fugiat quod ipsam vitae illo iste, sunt necessitatibus velit
                excepturi...
              </Typography>
              <br></br>
              <Button variant='contained' color='success'>
                Entregar atividade
              </Button>
            </Paper>
          </Grid>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <h3>Atividade complementar</h3>
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea eum
                laudantium voluptate odit deleniti delectus deserunt animi totam
                fugiat quod ipsam vitae illo iste, sunt necessitatibus velit
                excepturi...
              </Typography>
              <br></br>
              <Button variant='contained' color='success'>
                Entregar atividade
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
