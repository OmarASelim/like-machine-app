import React, { Component } from "react";

import './Header.scss'

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


class Header extends Component {
  render() {
    return (
      <div className="header-component">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="menu-button"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className="grow"
            >
              Like Machine
            </Typography>
            <Button color="inherit">Login using Facebook</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
