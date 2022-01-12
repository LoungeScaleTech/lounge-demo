import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function CalendarIcon({ month = "Jan", day = "20th" }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "0 10px 0 10px",
        justifyContent: "center",
        alignItems: "center",
        height: "5vh",
        borderRadius: "8px",
      }}
    >
      <div>
        <p>{month}</p>
        <p style={{ fontWeight: "bold" }}>{day}</p>
      </div>
    </div>
  );
}
