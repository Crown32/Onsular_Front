import React from "react";
import Copyright from "./Copyright";

export default function Footer() {
  const style = {
    display: "flex",
    widht: "100%",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    backgroundColor: "var(--primary-color)",
    position: "relative",
    marginTop: "80px",
  };
  return (
    <div>
      <Copyright sx={style}></Copyright>
    </div>
  );
}
