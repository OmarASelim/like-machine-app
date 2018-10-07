import React, { Component } from "react";
import "./AddLink.scss";

// Material UI
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";

import TextField from "@material-ui/core/TextField";
import { postLink } from "../../utils/api";

class AddLink extends Component {
  state = {
    open: false,
    url: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { url } = this.state;
    postLink(url);
  };

  render() {
    const { url } = this.state;
    return (
      <div className="add-link-component">
        <div className="feature-discovery">
          <Button
            onClick={this.handleOpen}
            variant="fab"
            color="primary"
            aria-label="Add"
            className="add-button"
          >
            <AddIcon />
          </Button>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          className="modal"
        >
          <div className="add-link">
            <form noValidate autoComplete="off" onSubmit={this.onSubmit}>
              <TextField
                id="standard-name"
                name="url"
                label="URL"
                value={url}
                onChange={this.onChange}
                margin="normal"
              />
            </form>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddLink;
