import React, { useState, Fragment } from "react";
import { DateTimePicker, DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import theme from "../../../assets/theme";
import { TextField } from "@mui/material";
const StaticDatePicker = () => {
  const [date, setDate] = useState(new Date());

  // prettier-ignore
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterMoment}>
      <DateTimePicker
        sx={{
          color: "white",
          backgroundColor: theme.palette.primary.main
        }}
        variant="dialog"
        renderInput={(props) => <TextField {...props} />}
        label="When is your gamenyte?"
        value={date}
        onChange={(newValue) => {
        setDate(newValue);
        }}
        />
        </LocalizationProvider>
    </Fragment>
  );
};

export default StaticDatePicker;