import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Badge, Container, Grid, Paper } from "@mui/material";
import { Button } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Stack from "@mui/material/Stack";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

const Accordion = styled((props) => (
  <MuiAccordion
    sx={{ marginBottom: "30px", borderRadius: "10px" }}
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
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "1.2rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "var(--secondary-color)",
  flexDirection: "row-reverse",
  width: "100%",
  color: "white",
  borderRadius: "10px",
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
  const lineCenter = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

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
              <Stack spacing={2}>
                <h3>Atividade 1º semestre</h3>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </Typography>

                <Typography sx={lineCenter}>
                  <AttachFileIcon></AttachFileIcon>
                  :Conteúdo.pdf
                </Typography>

                <Typography sx={lineCenter}>
                  <EventAvailableIcon></EventAvailableIcon>
                  :22/03/2021
                </Typography>
                <br></br>
                <Button variant='contained' color='success'>
                  Entregar atividade
                </Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <Stack spacing={2}>
                <h3>Atividade 2º semestre</h3>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </Typography>

                <Typography sx={lineCenter}>
                  <AttachFileIcon></AttachFileIcon>
                  :Gráfico.png
                </Typography>

                <Typography sx={lineCenter}>
                  <EventAvailableIcon></EventAvailableIcon>
                  :30/01/2022
                </Typography>
                <br></br>
                <Button variant='contained' color='success'>
                  Entregar atividade
                </Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <Stack spacing={2}>
                <h3>Atividade 3º semestre</h3>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </Typography>

                <Typography sx={lineCenter}>
                  <AttachFileIcon></AttachFileIcon>
                  :Auxiliar.pdf
                </Typography>

                <Typography sx={lineCenter}>
                  <EventAvailableIcon></EventAvailableIcon>
                  :24/11/2022
                </Typography>
                <br></br>
                <Button variant='contained' color='success'>
                  Entregar atividade
                </Button>
              </Stack>
            </Paper>
          </Grid>
          <Grid xs='12' sm='6' lg='3' item>
            <Paper elevation='6' sx={{ padding: "10px", paddingTop: "1px" }}>
              <Stack spacing={2}>
                <h3>Atividade Complementar</h3>
                <Typography>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit...
                </Typography>

                <Typography sx={lineCenter}>
                  <AttachFileIcon></AttachFileIcon>
                  :Guerra_dos_povos.pdf
                </Typography>

                <Typography sx={lineCenter}>
                  <EventAvailableIcon></EventAvailableIcon>
                  :--/--/----
                </Typography>
                <br></br>
                <Button variant='contained' color='success'>
                  Entregar atividade
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
