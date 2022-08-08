import { TextField } from "@mui/material";
import React, { useState, Fragment } from "react";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import theme from "../../../assets/theme";

const StaticTimePicker = () => {
  const [time, setTime] = useState(new Date());

  // prettier-ignore
  return (
    <Fragment>
      <LocalizationProvider dateAdapter={AdapterMoment}>  
        <TimePicker
          label="Time"
          value={time}
          onChange={setTime}
          renderInput={(params) => <TextField {...params} />}
          />
      </LocalizationProvider>
    </Fragment>
  );
};

export default StaticTimePicker;