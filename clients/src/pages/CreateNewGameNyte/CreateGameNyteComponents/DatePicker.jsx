import React, { useState, Fragment } from "react";
import { DateTimePicker } from 'react-rainbow-components';
import theme from "../../../assets/theme";

const StaticDatePicker = () => {
  const [date, setDate] = useState(new Date());

  // prettier-ignore
  return (
    <Fragment>
      <DateTimePicker
          id="datetimepicker-1"
          label="DateTimePicker label"
          value={date}
          onChange={value => setDate({ value })}
          formatStyle="large"
          locale={'en-US'}
          okLabel={'Ok'}
          cancelLabel={'Cancel'}
      />
    </Fragment>
  );
};

export default StaticDatePicker;