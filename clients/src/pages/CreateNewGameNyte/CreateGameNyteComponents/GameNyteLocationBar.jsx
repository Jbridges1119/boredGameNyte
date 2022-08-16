import { TextField } from "@mui/material";
import theme from "../../../assets/theme";

const LocationBar = (props) => {
  const setLocation = (event) => {
    event.preventDefault();
    props.setNewGameNyte((prev) => {
      return { ...prev, place: event.target.value };
    });
  };

  return (
    <TextField
      label="Where is your Game Nyte?"
      id="location"
      value={props.location}
      inputProps={{
        autoComplete: "new-password",
        form: {
          autoComplete: "off",
        },
      }}
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px",
        alignContent: "center",
        justifyContent: "center",
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            border: "1px solid white",
          },
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderRadius: "20px", border: "2px solid white" },
        },
        width: "100%",
        input: {
          color: "white",
        },
        my: 1,
      }}
      onChange={setLocation}
    />
  );
};

export default LocationBar;
