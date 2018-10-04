import React, { Component } from "react";
import "./Card.scss";
// Material UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

import moment from "moment";

class CardLink extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="card-component">
        <Card className="card">
          <a href={data.url} target="_blank">
            <CardHeader
              title={data.title}
              subheader={ moment(data.created_at).format("DD MMM YYYY") }
            />
          </a>

          <CardMedia
            className="card-media"
            image={data.image_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">{data.description}</Typography>
          </CardContent>
          <CardActions>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardLink;
