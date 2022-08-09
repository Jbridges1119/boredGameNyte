import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { ListItemAvatar } from '@mui/material';
import theme from '../../../assets/theme';
import { Link } from 'react-router-dom';


export default function GameChooserCollection(props) {


  const displayCollection = props.state.collection.map((game) => {
    const labelId = `checkbox-list-label-${game.id}`;

    return (
      <ListItem
        key={game.id}
        secondaryAction={
          <IconButton component={Link} to={'/game/' + game.id} edge="end" aria-label="game-details">
              <VideogameAssetIcon sx={{ color: 'white'}}/>
          </IconButton>
        }>
        <ListItemButton role={undefined} onClick={props.handleToggle(game.id)}>
          <ListItemIcon>
            <Checkbox
              edge="start"
              color="error"
              checked={props.state.gamesChosen.indexOf(game.id) !== -1}
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
      {displayCollection}
    </List>
  );
};