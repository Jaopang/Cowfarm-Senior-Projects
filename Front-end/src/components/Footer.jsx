import React from "react";
import { Toolbar, Typography } from "@material-ui/core";

function Footer() {
  return (
    <>
      <Toolbar
        style={{ justifyContent: "center", marginTop: 50 }}
        sx={{ bgcolor: "#282c34" }}
      >
        <Typography variant="caption" sx={{ color: "#fff" }}>
          @Copyrigth dy Comsic Power by Thanasorn 2022
        </Typography>
      </Toolbar>
    </>
  );
}

export default Footer;
