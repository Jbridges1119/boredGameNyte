import { Paper } from "@mui/material";
import FriendsList from "./FriendsList";
import theme from "../../../assets/theme";


const FriendInviter = () => {

  return(
    <Paper elevation={4} sx={{
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      height: "100%",
      borderRadius: "20px"
    }}>
      <FriendsList />
    </Paper>
  );
};

export default FriendInviter;