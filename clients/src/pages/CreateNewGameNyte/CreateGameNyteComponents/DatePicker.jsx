import React, { useState, Fragment } from "react";
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers'
import styled from "@emotion/styled";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import theme from "../../../assets/theme";
import { TextField } from "@mui/material";


const StaticDatePicker = (props) => {
  

  const CssTextField = styled(TextField)({
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


  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        sx={{
          color: "white",
          backgroundColor: theme.palette.primary.main
        }}
        variant="dialog"
        renderInput={(props) => <CssTextField sx={{ button: {
          color: "white",
        }, input: {
          color: "white",
        }}}InputLabelProps={{
          style: { color: "#fff" },
        }} {...props} />}
        label="When is your Game Nyte?"
        value={props.state.date}
        onChange={(newValue) => {
        props.setState({...props.state, date: newValue});
        }}
        />
        </LocalizationProvider>
    </Fragment>
  );
};

export default StaticDatePicker;