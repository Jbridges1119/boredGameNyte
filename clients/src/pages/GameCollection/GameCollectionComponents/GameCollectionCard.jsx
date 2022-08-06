import React from "react";
import Paper from '@mui/material/Paper';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Accordion, AccordionSummary, Button, Grid } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import theme from '../../../assets/theme';

export default function GameCollectionCard(props) {
  return (
    <Paper direction="row" sx={{
      display: 'flex',
      backgroundColor: theme.palette.primary.main,
      color: "white",
      p: 1,
      borderRadius: "20px"
    }}>
        <CardMedia
          component="img"
          height="30"
          width="30"
          image={props.img}
          alt="green iguana"
          sx={{
            width: "33%",
            height: "100%",
            maxWidth: "50",
            maxHeight: "50",
            borderRadius: "10px"
          }}
          />
          <Grid>
          <div>
            <h2>
              {props.name}
            </h2>
          </div>
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
    </Paper>
  );
}