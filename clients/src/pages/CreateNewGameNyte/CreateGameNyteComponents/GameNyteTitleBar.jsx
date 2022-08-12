import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";
import theme from "../../../assets/theme";

const TitleBar = (props) => {
  const setTitle = (event) => {
    event.preventDefault();
    props.setNewGameNyte((prev) => {
      return { ...prev, name: event.target.value };
    });
  };

  return (
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
        "& .MuiOutlinedInput-root:hover": {
          "& > fieldset": {
            border: "1px solid white",
          },
        },
        "& .MuiOutlinedInput-root": {
          "& > fieldset": { borderRadius: "20px", border: "2px solid white" },
        },
        width: "100%",
        outline: { color: "white" },
        input: {
          color: "white",
          border: "white",
        },
        my: 1,
      }}
      onChange={setTitle}
    />
  );
};

export default TitleBar;
