import React, { Component } from "react";
import { getLinks, responseFacebook } from "../../utils/api";
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
  
  updateLoggedInState = userData => {
    this.setState({ isLoggedIn: userData });
  };

  getLinksData() {
    getLinks().then(links => {
      this.setState({ links });
    });
  }
  render() {
    const { links, isLoggedIn } = this.state;

    return (
      <div className="App">
        <Header isLoggedIn={isLoggedIn} updateLoginState={this.updateLoggedInState}/>

        <Grid container className="root">
          {[]
            .concat(links)
            .sort((a, b) => {
              if (a.like_count < b.like_count) return 1;
              if (a.like_count > b.like_count) return -1;
              return 0;
            })
            .map((data, index) => (
              <Grid key={index} item xs={12} sm={4} className="spacing">
                <CardLink data={data} isLoggedIn={isLoggedIn}  />
              </Grid>
            ))}
        </Grid>
        {isLoggedIn && <AddLink />}
      </div>
    );
  }
}

export default App;
