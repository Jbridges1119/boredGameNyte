import { Button } from "@mui/material";
import theme from "../../../../../assets/theme";

const UserConfirmed = (props) => {
  return (
    <Button
      onClick={props.onCancel}
      sx={{
        ":hover": {
          bgcolor: theme.palette.warning.main,
          boxShadow: 24,
        },
        ":active": {
          bgcolor: theme.palette.error.light,
          boxShadow: 8,
        },
        backgroundColor: "darkred",
        height: 50,
        width: 200,
        fontSize: 25,
        borderRadius: "20px",
        textTransform: "none",
        pt: 0.9,
      }}
      variant="contained"
    >
      Back out
    </Button>
  );
};

export default UserConfirmed;
