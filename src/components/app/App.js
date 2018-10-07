import React, { Component } from "react";
import { getLinks } from "../../utils/api";
import "./app.scss";

// Components
import Header from "../header/Header";
import CardLink from "../card/Card";
import AddLink from "../add-link/AddLink";

//Material UI
import Grid from "@material-ui/core/Grid";

class App extends Component {
  state = {
    links: [],
    isLoggedIn: false
  };


  componentDidMount() {
    this.getLinksData();
    if (localStorage.getItem("token")) {
      this.setState({ isLoggedIn: true });
    }
  }

  getLinksData() {
    getLinks().then(links => {
      this.setState({ links });
    });
  }
  render() {
    const { links, isLoggedIn } = this.state;

    return (
      <div className="App">
        <Header isLoggedIn={isLoggedIn} />

        <Grid container className="root" spacing={16}>
          {[]
            .concat(links)
            .sort((a, b) => {
              if (a.like_count < b.like_count) return 1;
              if (a.like_count > b.like_count) return -1;
              return 0;
            })
            .map((data, index) => (
              <Grid key={index} item xs={12}>
                <Grid container justify="center">
                  <CardLink data={data} isLoggedIn={isLoggedIn} />
                </Grid>
              </Grid>
            ))}
        </Grid>
        {isLoggedIn ? <AddLink /> : ""}
      </div>
    );
  }
}

export default App;
