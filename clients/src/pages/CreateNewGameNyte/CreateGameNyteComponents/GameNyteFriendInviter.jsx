import { Paper } from "@mui/material";
import FriendsList from "./FriendsList";
import theme from "../../../assets/theme";

const FriendInviter = (props) => {
  return (
    <Paper
      elevation={8}
      sx={{
        backgroundColor: theme.palette.secondary.main,

        width: "100%",
        height: 360,
        borderRadius: "20px",
        mb: 3,
      }}
    >
      <FriendsList
        state={props.state}
        setState={props.setState}
        handleFriendToggle={props.handleFriendToggle}
      />
    </Paper>
  );
};

export default FriendInviter;
