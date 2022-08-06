import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, Button, CardActionArea, Grid } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../assets/theme';

export default function GameSearchCard(props) {
  return (
    <Card direction="row" sx={{ 
      backgroundColor: theme.palette.primary.light
      }}>
      <CardActionArea
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignContent: "center",
        color: "white",
        p: 1
      }}
      >
        <CardMedia
          component="img"
          height="30"
          width="30"
          image={props.img}
          alt="green iguana"
          sx={{
            display: 'flex',
            width: "33%",
            height: "100%",
            maxWidth: "50",
            maxHeight: "50"
          }}
          />
          <Grid>
          <div>
            <h2>
              {props.name}
            </h2>
          </div>
          <Grid item justifyContent="space-around" sx={{ pl: 2, py: 1 }}>
            <Button sx={{ backgroundColor: theme.palette.error.light }}>Add To Collection</Button>
          </Grid>
          <Grid item justifyContent="space-around" sx={{ pl: 2, py: 1 }}>
            <Button sx={{ backgroundColor: theme.palette.error.light }}>View Game Details</Button>
          </Grid>
          <CardContent>
            <Accordion sx={{
              backgroundColor: theme.palette.secondary.main
            }}>
              <AccordionSummary
              expandIcon={<ArrowDownward />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Typography>Game Description</Typography>
              </AccordionSummary>
              <Typography variant="body2" color="text.secondary">
                <span dangerouslySetInnerHTML={{__html:props.description}} />
              </Typography>
            </Accordion>
          </CardContent>
          </Grid>
      </CardActionArea>
    </Card>
  );
}
