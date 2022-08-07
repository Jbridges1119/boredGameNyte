import React, { useState } from "react";
import { DateTimePicker } from "@material-ui/pickers";
import theme from "../../../assets/theme";

const StaticDatePicker = () => {
  const [date, setDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
      <DateTimePicker
        value={date}
        variant="static"
        disablePast
        onChange={setDate}
        showTodayButton
      />
    </>
  );
};

export default StaticDatePicker;