import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FriendsList from "./FriendsList";
import theme from "../../../assets/theme";
import { Button, Typography } from "@mui/material";

const AddTextField = styled(TextField)({
  "& label.Mui-focused": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "20px",
      border: "2px solid white",
    },
    "&:hover fieldset": {
      border: "1px solid white",
      borderRadius: "20px",
    },
    "&.Mui-focused fieldset": {
      borderRadius: "20px",
      borderColor: "white",
    },
  },
});

export default function FriendsListCard(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.main,
        height: 300,
        borderRadius: "20px",
        display: "flex",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
      >
        <Grid item xs={11}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            alignContent="center"
          >
            <Grid item xs={6}>
              <Typography
                variant="h4"
                color="White"
                sx={{
                  pl: 2,
                  pt: 1,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Friends List
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div>
                <Button
                  sx={{
                    ':hover': {
                      bgcolor: theme.palette.error.light,
                      boxShadow:24
                    },
                    backgroundColor: theme.palette.error.main,
                    height: 40,
                    fontSize: 25,
                    borderRadius: "20px",
                    textTransform: "none",
                    pt: 1.25,
                    m: 1,
                  }}
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Add Friend
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle
                    sx={{
                      
                      color: "white",
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    Add Friend
                  </DialogTitle>
                  <DialogContent
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    <DialogContentText
                      sx={{
                        color: "white",
                      }}
                    >
                      Please Enter Users Email
                    </DialogContentText>
                    <AddTextField
                      sx={{
                        input: {
                          color: "white",
                        },
                        borderColor: "white",
                      }}
                      InputLabelProps={{
                        style: { color: "#fff" },
                      }}
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Email Address"
                      type="email"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                    }}
                  >
                    <Button
                      sx={{
                        color: "white",
                      }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        color: "white",
                      }}
                      onClick={handleClose}
                    >
                      Add
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              {/* <Button
                variant="contained"
                sx={{
                  backgroundColor: theme.palette.error.main,
                  height: 40,
                  fontSize: 25,
                  borderRadius: "20px",
                  textTransform: "none",
                  pt: 1.25,
                  m: 1.
                }}
                type="submit"
              >
                Add Friend
              </Button> */}
            </Grid>
          </Grid>
          <FriendsList state={props.state} />
        </Grid>
      </Grid>
    </Card>
  );
}
