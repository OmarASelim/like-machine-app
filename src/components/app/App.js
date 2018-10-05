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
    links: [],
    loggedUser: false
  };

  constructor() {
    super();
  }

  componentDidMount() {
    this.getLinksData();
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
        <Grid container className={classes.root} spacing={16}>
          {[]
            .concat(links) 
            .sort((a, b) => {
              if(a.like_count < b.like_count) return 1
              if(a.like_count > b.like_count) return -1
              return 0
            })
            .map(
              (data, index) => (
                <Grid key={index} item xs={12}>
                  <Grid container className={classes.demo} justify="center">
                    <CardLink data={data} />
                  </Grid>
                </Grid>
              )
            )}
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
