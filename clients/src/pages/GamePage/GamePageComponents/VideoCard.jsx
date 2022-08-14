import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

import theme from "../../../assets/theme";
import YoutubeEmbed from "./CardComponents/YoutubeEmbed";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "2rem", color: "#FFFFFF" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  borderRadius: "20px",
  backgroundColor: theme.palette.secondary.main,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  border: "none",
}));

export default function VideoCard(props) {

  const [expanded, setExpanded] = React.useState("panel1");
  //Map for How To Play videos - Feeds into embeder function
  let count = 500
  const howTo = props.videos.map((video) => {
    
    count++
    return (
      <Grid
        item
        key={count}
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <YoutubeEmbed
          
          id={video.id.videoId}
          embedId="nJ-ehbVQYxI"
        />
      </Grid>
    );
  });

  //Map for Tips and tricks videos - Feeds into embeder function
  let countGitGud = 1000
  const gitGud = props.videos2.map((video) => {
    
    countGitGud++
    return (
      
      <Grid
      key={countGitGud}
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <YoutubeEmbed
          
          id={video.id.videoId}
          embedId="nJ-ehbVQYxI"
        />
      </Grid>
    );
  });

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        sx={{
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{':hover': {
            bgcolor: theme.palette.secondary.light, // theme.palette.primary.main
            boxShadow:24
          },
            borderRadius: "20px",
            width: "100%",
          }}
        >
          <Typography sx={{ color: "#FFFFFF" }} variant="h5">
            Learn To Play
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: "20px" }}>
          <Box >
            <Grid
             container
              direction="row"
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {howTo}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          borderRadius: "20px",
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"  sx={{':hover': {
            bgcolor: theme.palette.secondary.light, // theme.palette.primary.main
            boxShadow:24
          },
            borderRadius: "20px",
            width: "100%",
          }}>
          <Typography sx={{ color: "#FFFFFF" }} variant="h5">
            Git Gud
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              borderRadius: "15px",
            }}
          >
            <Grid
             container
              direction="row"
              sx={{
                backgroundColor: theme.palette.primary.main,
                borderRadius: "15px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              {gitGud}
            </Grid>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

// const VideoCard = () => {

//   const card = (

// <React.Fragment>
//     <Card sx={{

//       backgroundColor: theme.palette.secondary.main,
//       borderRadius: '15px',}}>
//     <CardHeader align="center" title="HOW TO PLAY - VIDEOS" />
//   <CardContent
//     sx={{
//       height: 200,
//       backgroundColor: theme.palette.secondary.main,
//       borderRadius: '15px',
//       display: 'flex',
//       justifyContent: 'center',

//     }}
//   >

//   <Grid container direction="row" justifyContent="center" alignContent={'center'} alignItems="center">
//   <Grid item xs={4} sx={{
//       display: 'flex',
//       justifyContent: 'center',}}>
// <YoutubeEmbed embedId="nJ-ehbVQYxI" />
// </Grid>
// <Grid item xs={4}>
// <YoutubeEmbed embedId="nJ-ehbVQYxI" />
// </Grid>
// <Grid item xs={4}>
// <YoutubeEmbed embedId="nJ-ehbVQYxI" />
// </Grid>
//     </Grid>

//   </CardContent>
//   </Card>
// </React.Fragment>
//   );
