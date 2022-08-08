import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import theme from "../../../assets/theme";


const LocationBar = (props) => {

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

  const setLocation = (event) => {
    event.preventDefault();
    console.log(event.target.value);
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