import React, { Component } from "react";
import "./AddLink.scss";

// Material UI
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

class AddLink extends Component {
  state = {
    open: false
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div className="add-link-component">
        <Button
          onClick={this.handleOpen}
          variant="fab"
          color="primary"
          aria-label="Add"
          className="add-button"
        >
          <AddIcon />
        </Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          className="modal"
        >
          <div className="add-link">
            <Typography variant="title" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddLink;
