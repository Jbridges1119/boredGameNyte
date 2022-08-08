import React, { useState, Fragment } from "react";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import theme from "../../../assets/theme";
import { TextField } from "@mui/material";
const StaticDatePicker = () => {
  const [date, setDate] = useState(new Date());

  // prettier-ignore
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/dd/yyyy"
            value={date}
            onChange={setDate}
            renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    </Fragment>
  );
};

export default StaticDatePicker;