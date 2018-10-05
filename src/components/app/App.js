import React, { Component } from "react";
import getLinks from "../../utils/api";
import "./app.scss";

// Components
import Header from "../header/Header";
import CardLink from "../card/Card";
import AddLink from "../add-link/AddLink";

//Material UI
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// Facebook Login
import FacebookLogin from "react-facebook-login";

const appStyles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class App extends Component {
  state = {
    links: []
  };
  


  responseFacebook(response) {
    this.props.onSubmit({
      loggedUser: response
    });
  }

  componentDidMount() {
    this.getLinksData();
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  getLinksData() {
    getLinks().then(links => {
      this.setState({ links });
    });
  }

  render() {
    const { links } = this.state;
    const { classes } = this.props;

    return (
      <div className="App">
        <Header />
        <FacebookLogin
          appId="341855376385243"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />

        <Grid container className={classes.root} spacing={16}>
          {links.map((link, index) => (
            <Grid key={index} item xs={12}>
              <Grid container className={classes.demo} justify="center">
                <CardLink data={link} />
              </Grid>
            </Grid>
          ))}
        </Grid>

        <AddLink />
      </div>
    );
  }
}

// export default App;
App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyles)(App);
