import { Paper } from "@mui/material";
import FriendsList from "./FriendsList";
import theme from "../../../assets/theme";


const FriendInviter = (props) => {

  return(
    <Paper elevation={8} sx={{
      backgroundColor: theme.palette.secondary.main,
      minWidth: 360,
      width: "100%",
      height: 550,
      borderRadius: "20px"
    }}>
      <FriendsList 
      state={props.state}
      setState={props.setState}
      handleFriendToggle={props.handleFriendToggle}
      />
    </Paper>
  );
};

export default FriendInviter;