import { Paper } from "@mui/material";
import FriendsList from "./FriendsList";
import theme from "../../../assets/theme";


const FriendInviter = () => {

  return(
    <Paper elevation={8} sx={{
      backgroundColor: theme.palette.secondary.main,
      minWidth: 360,
      width: "100%",
      height: 550,
      borderRadius: "20px"
    }}>
      <FriendsList />
    </Paper>
  );
};

export default FriendInviter;