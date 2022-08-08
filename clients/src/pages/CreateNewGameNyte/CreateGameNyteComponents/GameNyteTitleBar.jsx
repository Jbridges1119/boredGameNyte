import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import theme from "../../../assets/theme";


const TitleBar = (props) => {


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

  const setTitle = (event) => {
    event.preventDefault();
    props.setState((prev) => {
      return {...prev, 'name': event.target.value}
    });
  };
  
  return(
    <TextField
      label="Name Your Game Nyte!"
      id="title"
      value={props.title}
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
      onChange={setTitle}
    />
  );
};

export default TitleBar;