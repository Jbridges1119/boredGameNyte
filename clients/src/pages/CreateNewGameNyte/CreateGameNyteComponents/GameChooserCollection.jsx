import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import {  Casino, Details } from '@mui/icons-material';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ListItemAvatar } from '@mui/material';
import theme from '../../../assets/theme';

const games = [
  {
    name: "Catan",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324722072.jpg",
    min_players: 3,
    max_players: 4,
    id: 0
  },
  {
    name: "Risk",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254847937-51zyVWbt8aL.jpg",
    min_players: 2,
    max_players: 6,
    id: 1
  },
  {
    name: "Azul",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
    min_players: 2,
    max_players: 4,
    id: 2
  },
  {
    name: "Lords of Waterdeep",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1629324168873.jpg",
    min_players: 2,
    max_players: 5,
    id: 3
  },
  {
    name: "Smash Up",
    thumbnail: "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/smash-up-board-game.jpg?v=1609629158",
    min_players: 2,
    max_players: 4,
    id: 4
  },
  {
    name: "Gloomhaven",
    thumbnail: "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254920151-51ulRXlJ7LL.jpg",
    min_players: 1,
    max_players: 4,
    id: 5
  }
]


export default function GameChooserCollection() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const collection = games.map((game) => {
    const labelId = `checkbox-list-label-${game.id}`;

    return (
      <ListItem
        key={game.id}
        secondaryAction={
          // Game details page link? <Link to="game.id" />
          <IconButton edge="end" aria-label="game-details">
            <VideogameAssetIcon />
          </IconButton>
        }
      >
        <ListItemButton role={undefined} onClick={handleToggle(game.id)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              color="error"
              checked={checked.indexOf(game.id) !== -1}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemAvatar>
            <img 
              style={{
                height: 50,
                width: 50
              }} 
              src={game.thumbnail} 
              alt="no img"
              />
          </ListItemAvatar>
          <ListItemText id={labelId} primary={game.name} secondary={`Players: ${game.min_players} to ${game.max_players}`}/>
        </ListItemButton>
      </ListItem>
    );
  })

  return (
    <List sx={{ width: '100%', maxWidth: 800, backgroundColor: theme.palette.secondary.main }}>
      {collection}
    </List>
  );
}