import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../assets/theme";


const LocationBar = () => {

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

  return(
    <CssTextField
      label="Where is your Game Nyte?"
      id="location"
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
      // onChange={(event) => setInput(event.target.value)}
    />
  );
};

export default LocationBar;