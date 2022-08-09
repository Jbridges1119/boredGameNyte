import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import theme from "../../../assets/theme";


const LocationBar = (props) => {

  const setLocation = (event) => {
    event.preventDefault();
    props.setState((prev) => {
      return {...prev, 'place': event.target.value}
    });
  };

  return(
    <TextField
      label="Where is your Game Nyte?"
      id="location"
      value={props.location}
      InputLabelProps={{
        style: { color: "#fff" },
      }}
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderRadius: "20px",
        alignContent: "center",
        justifyContent: "center",
        width: "90%",
        input: {
          color: "white",
        },
      }}
      onChange={setLocation}
    />
  );
};

export default LocationBar;