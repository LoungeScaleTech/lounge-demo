import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/header";
import Events from "./components/tabs";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Header />
      <Events />
    </Box>
  );
}

export default App;
