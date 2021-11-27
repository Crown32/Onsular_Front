import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Copyright(props) {
  return (
    <Typography
      className='copyright'
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {"Copyright © "}
      <Link target='T_Blank' color='inherit' href='https://github.com/Crown32'>
        Onsular
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
