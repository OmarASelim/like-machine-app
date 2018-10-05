import React, { Component } from "react";

import "./Header.scss";

// Material UI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
// Facebook Login
import FacebookLogin from "react-facebook-login";
import getSessionID from '../../utils/api'


class Header extends Component {
  getFacebookAccessToken() {
    this.state = { isToggleOn: true };
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response) {
    // this.props.onSubmit({
    //   loggedUser: response
    // })

    console.log(response.accessToken)
    getSessionID(response.accessToken).then(sessionIdState => {
      console.log(sessionIdState)
    });
  }
  
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
            <Typography variant="title" color="inherit" className="grow">
              Like Machine
            </Typography>
            <FacebookLogin
              appId="341855376385243"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
