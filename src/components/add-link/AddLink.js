import React, { Component } from "react";
import PropTypes from "prop-types";

// Material UI
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

const addLinkStyles = {
  button: {
    position: "fixed",
    bottom: 20,
    right: 20
  },
  search: {
    backgroundColor: 'white',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 15
  }
};

class AddLink extends Component {
    state = {
        open: false,
      };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
        >
          <AddIcon />
        </Button>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.search}>
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

AddLink.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(addLinkStyles)(AddLink);
