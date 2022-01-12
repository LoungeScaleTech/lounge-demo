import logo from "./logo.svg";
import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Events from "./components/tabs";
import Box from "@mui/material/Box";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./lib/firebase";

const userId = "tFpAUYlrZufAZFUp2gH0yv7m45k2";
function App() {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Header />
      <Events />
    </Box>
  );
}

export default App;
