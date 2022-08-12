import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import theme from "../../../assets/theme";
import GameChooserCollection from "./GameChooserCollection";
import { Box } from "@mui/material";

const BootstrapDialog = styled(Dialog)(() => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "white",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function GameChooserDialog(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: 150,
      }}
    >
      <Button
        variant="outlined"
        onClick={props.handleClickOpen}
        sx={{
          border: "2px dotted navyblue",
          width: "100%",
          height: 150,
          borderRadius: "20px",
          fontSize: 35,
          pt: 2,
        }}
      >
        Choose up to 3 games!
      </Button>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.state.open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          Your Collection
        </BootstrapDialogTitle>
        <DialogContent
          dividers
          sx={{ backgroundColor: theme.palette.secondary.main }}
        >
          <GameChooserCollection
            state={props.state}
            handleToggle={props.handleToggle}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Button
            onClick={props.handleClose}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "white",
            }}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}

// CreateNew => GameChooser => GameChooserDialog => GameChooserCollection
