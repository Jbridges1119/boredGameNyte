import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../../../assets/theme';
import GameChooserCollection from './GameChooserCollection';
import useGameChooserData from '../../../hooks/useGameChooserData';

const BootstrapDialog = styled(Dialog)(() => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
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
            position: 'absolute',
            right: 8,
            top: 8,
          }}>
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
    <div>
      <Button variant="outlined" onClick={props.handleClickOpen}>
        Choose up to 3 games!
      </Button>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.state.open}
        >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleClose} sx={{ backgroundColor: theme.palette.secondary.main }}>
          Your Collection
        </BootstrapDialogTitle>
        <DialogContent dividers sx={{ backgroundColor: theme.palette.secondary.main }}>
          <GameChooserCollection 
          state={props.state}
          handleToggle={props.handleToggle}
          />
        </DialogContent>
        <DialogActions sx={{ backgroundColor: theme.palette.secondary.main }}>
          <Button autoFocus onClick={props.handleCloseSave} sx={{ backgroundColor: theme.palette.secondary.main }}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

// CreateNew => GameChooser => GameChooserDialog => GameChooserCollection