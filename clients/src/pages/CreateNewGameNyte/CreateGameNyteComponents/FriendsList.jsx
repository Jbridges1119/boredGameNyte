import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import { Person } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";
import theme from "../../../assets/theme";

const FriendList = styled(ListItemText)({
  "& .MuiListItemText-secondary": {
    color: "white",
    fontSize: "13px",
  },
  "& .MuiListItemText-primary": {
    color: "white",
    fontSize: "15px",
  },
});

export default function FriendsList(props) {
  const friendsList = props.state.friendsList.map((friend) => {
    let labelId = `checkbox-list-secondary-label-${friend.friend_id}`;
    let name = `${friend.first_name} ${friend.last_name}`;
    return (
      <ListItemButton
        sx={{ color: "white" }}
        role={undefined}
        onClick={props.handleFriendToggle(friend.friend_id)}
        key={friend.friend_id}
      >
        <ListItem
          secondaryAction={
            <Checkbox
              sx={{
                color: "white",
                ":hover": {
                  bgcolor: theme.palette.error.light,
                  boxShadow: 24,
                },
              }}
              color="error"
              edge="end"
              onChange={props.handleFriendToggle(friend.friend_id)}
              checked={
                props.newGameNyte.friendsInvited.indexOf(friend.friend_id) !==
                -1
              }
              inputProps={{ "aria-labelledby": labelId }}
            />
          }
        >
          <ListItemAvatar>
            <Person />
          </ListItemAvatar>
          <FriendList primary={name} secondary={friend.email} />
        </ListItem>
      </ListItemButton>
    );
  });

  return (
    <List
      dense
      sx={{
        width: "100%",
        midWidth: 360,
        maxWidth: 800,
        position: "relative",
        overflow: "auto",
        maxHeight: 340,
      }}
    >
      {friendsList}
    </List>
  );
}
