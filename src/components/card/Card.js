import React, { Component } from "react";
import moment from "moment";
import "./Card.scss";

// APIs
import { likeLink, unLikeLink, deleteLink } from "../../utils/api";

// Material UI
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DeleteIcon from "@material-ui/icons/Delete";

class CardLink extends Component {
  state = {
    isLoggedIn: false,
    isLiked: false
  };
  likeLink() {
    likeLink(this.props.data.id);
    this.setState({isLiked: true})
  }

  unLikeLink() {
    unLikeLink(this.props.data.id);
  }

  deleteLink() {
    deleteLink(this.props.data.id);
  }

  render() {
    const { data, isLoggedIn } = this.props;

    return (
      <div className="card-component">
        <Card className="card">
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            <CardHeader
              title={data.title}
              subheader={moment(data.created_at).format("DD MMM YYYY")}
            />
          </a>

          <CardMedia
            className="card-media"
            image={data.image_url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography className="card-desc" component="p">
              {data.description}
            </Typography>
          </CardContent>

          <CardActions>
            {isLoggedIn ? (
              <div>
                {data.liked ? (
                  <IconButton aria-label="Add to favorites">
                    <FavoriteIcon  onClick={this.unLikeLink.bind(this)}  />
                    <span>{data.like_count}</span>
                  </IconButton>
                ) : (
                  <IconButton aria-label="Add to favorites">
                    <FavoriteBorderIcon onClick={this.likeLink.bind(this)} />
                    <span>{data.like_count}</span>
                  </IconButton>
                )}
                {data.owned ? (
                  <IconButton aria-label="Delete">
                    <DeleteIcon onClick={this.deleteLink.bind(this)} />
                  </IconButton>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CardLink;
