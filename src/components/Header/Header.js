import React, { Component } from "react";
import "./Header.scss";

// APIs
import { responseFacebook } from "../../utils/api";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

// Facebook Login
import FacebookLogin from "react-facebook-login";

class Header extends Component {
  callback = () => {
    this.props.updateLoginState({ isLoggedIn: true });
  };

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div className="header-component">
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              className="menu-button"
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="grow">
              Like Machine
            </Typography>
            {!isLoggedIn ? (
              <FacebookLogin
                appId="341855376385243"
                fields="name,email,picture"
                callback={res => responseFacebook(res, this.callback)}
                cssClass="login-button"
              />
            ) : (
              <span>Logout</span>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
