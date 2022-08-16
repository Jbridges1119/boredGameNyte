import {
  Card,
  Paper,
  CardHeader,
  CardContent,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Avatar,
} from "@mui/material";
import theme from "../../../../assets/theme";
import Grid from "@mui/material/Grid";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const NyteInvites = (props) => {
  // Map out invted names, avatar, and status
  const attendingList = props.data.map((friend) => {
    const status = friend.attend_status;
    return (
      <ListItem sx={{ p: 0 }}>
        {status === false && (
          <CloseOutlinedIcon
            sx={{
              backgroundColor: "darkred",
              borderRadius: "40px",
              width: 26,
              height: 26,
              color: "white",
            }}
          />
        )}
        {status === true && (
          <CheckOutlinedIcon
            sx={{
              backgroundColor: "#00C41F",
              borderRadius: "40px",
              width: 26,
              height: 26,
              color: "white",
            }}
          />
        )}
        {status === null && (
          <QuestionMarkOutlinedIcon
            sx={{
              backgroundColor: theme.palette.error.main,
              borderRadius: "40px",
              width: 26,
              height: 26,
              color: "white",
            }}
          />
        )}
        <ListItemAvatar>
          <Avatar
            sx={{ width: 26, height: 26, pt: 0, ml: 1, pr: 0 }}
            src={friend.avatar_img + ".png"}
            alt={friend.first_name}
          />
        </ListItemAvatar>
        <ListItemText primary={`${friend.first_name} ${friend.last_name}`} />
      </ListItem>
    );
  });

  const card = (
    <Card
      sx={{
        height: 380,
        backgroundColor: theme.palette.primary.main,
        borderRadius: "15px",
      }}
    >
      <CardHeader align="center" title="Invited" />
      <CardContent>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            {attendingList}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  return (
    <Paper
      sx={{ borderRadius: "20px", mt: "12px", width: "100%" }}
      elevation={4}
    >
      {card}
    </Paper>
  );
};

export default NyteInvites;
