import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./images/Proposed Solution (4).png";

const Navbar = () => {
  return (
    <AppBar position="static" className="bg-blue-800">
      <Toolbar className="flex justify-between">
        <Typography variant="h6" component="div">
          Government Portal
        </Typography>
        <div>
            <img width={70} src={logo} />
        </div>
        <div>
          <Button color="inherit" component={Link} to="/">Water Dept</Button>
          <Button color="inherit" component={Link} to="/gas">Gas Dept</Button>
          <Button color="inherit" component={Link} to="/electronics">Electronics Dept</Button>
          <Button color="inherit" component={Link} to="/projects">Projects Map</Button>
          <Button color="inherit" component={Link} to="/LoginPage">LoginPage</Button>
          <Button color="inherit" component={Link} to="/chatbot">ChatBot</Button>
          
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
