import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import theme from "../../../assets/theme";


const TitleBar = (props) => {


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