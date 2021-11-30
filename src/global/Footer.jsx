import React from "react";
import Copyright from "./Copyright";

export default function Footer() {
  const style = {
    left: 0,
    right: 0,
    padding: "20px 0",
    backgroundColor: "var(--primary-color)",
    position: "relative",
    position: "absolute",
    bottom: "-120px",
  };
  return (
    <div>
      <Copyright sx={style}></Copyright>
    </div>
  );
}
