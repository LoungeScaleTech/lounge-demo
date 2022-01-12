import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const styles = {
  card: {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
};

const Header = ({}) => {
  return (
    <>
      <Box sx={{ m: 1, p: 1 }}>
        <Grid container>
          <Grid
            item
            xs={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton>
              <LocalFireDepartmentIcon />
            </IconButton>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button disabled="true">Lounge</Button>
          </Grid>
          <Grid
            item
            xs={3}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <IconButton>
              <AccountCircleOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Header;
