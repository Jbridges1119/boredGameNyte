import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import theme from "../../../assets/theme";

const StaticDatePicker = () => {
  const [date, setDate] = useState(new Date());

  // prettier-ignore
  return (
    <>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        inputVariant="filled"
        openTo="date"
        value={date}
        onChange={setDate}
        theme={theme}
      />
    </>
  );
};

export default StaticDatePicker;