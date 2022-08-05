import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, Button, CardActionArea, Grid } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../assets/theme';

export default function GameNyteCard(props) {
  return (
    <Card direction="row" sx={{ 
      backgroundColor: theme.palette.secondary.main
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
              Game Nyte Title!
            </h2>
          </div>
          <CardContent>
            <Accordion sx={{
              backgroundColor: theme.palette.primary.light
            }}>
              <AccordionSummary
              expandIcon={<ArrowDownward />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              >
                <Typography>Game Nyte Description</Typography>
              </AccordionSummary>
              <Typography variant="body2" color="text.secondary">
                This is where we will see what games were played at this game nyte!
              </Typography>
            </Accordion>
          </CardContent>
          </Grid>
      </CardActionArea>
    </Card>
  );
}
