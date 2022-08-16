import React from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import theme from "../../../assets/theme";
import { Box, TextField } from "@mui/material";

const StaticDatePicker = (props) => {
  return (
    <Box
      sx={{ my: 4, display: "flex" }}
      justifyContent="center"
      alignItems="center"
    >
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DateTimePicker
          sx={{
            color: "white",
            backgroundColor: theme.palette.secondary.main,
          }}
          variant="dialog"
          renderInput={(props) => (
            <TextField
              sx={{
                backgroundColor: theme.palette.secondary.main,
                borderRadius: "20px",
                button: {
                  color: "white",
                },
                input: {
                  color: "white",
                },
                "& .MuiOutlinedInput-root:hover": {
                  "& > fieldset": {
                    border: "1px solid white",
                  },
                },
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    borderRadius: "20px",
                    border: "2px solid white",
                  },
                },
              }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              {...props}
            />
          )}
          label="When is your Game Nyte?"
          value={props.newGameNyte.date}
          onChange={(newValue) => {
            props.setNewGameNyte({ ...props.newGameNyte, date: newValue });
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default StaticDatePicker;
