import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import theme from "../../../../assets/theme";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { getGameById } from "../../../../helperFunctions/helperFunctions";

const labelsStrat = {
  0.0: `Unavailable`,
  0.5: "Blind Luck Wins",
  1.0: "Feeling Lucky",
  1.5: "Poor",
  2.0: "Poor+",
  2.5: "Average",
  3.0: "Average+",
  3.5: "Good",
  4.0: "Great",
  4.5: "Extreme",
  5.0: "Cones of Dunshire",
};

const labelsLearning = {
  0.0: `Unavailable`,
  0.5: "Cones of Dunshire",
  1.0: "Steep",
  1.5: "Tough",
  2.0: "Hard",
  2.5: "Average",
  3.0: "Average+",
  3.5: "Good",
  4.0: "Great",
  4.5: "Excellent",
  5.0: "Excellent+",
};

const labelsRating = {
  0.0: `Unavailable`,
  0.5: `Don't Play This`,
  1.0: "Hard Pass",
  1.5: "Pass",
  2.0: "Maybe",
  2.5: "Average",
  3.0: "Average+",
  3.5: "Good",
  4.0: "Great",
  4.5: "Play This Game",
  5.0: "Best Game Ever",
};

<Button
  sx={{
    color: "white",
    backgroundColor: theme.palette.error.main,
    height: 55,
    fontSize: 30,
    textTransform: "none",
    borderRadius: "20px",
    width: "300px",
  }}
>
  Add To Collection
</Button>;
const GameInfo = (props) => {
  
  const name = props.gameData ? props.gameData.name : "";
  const age = props.gameData ? props.gameData.min_age : "";
  const players = props.gameData ? props.gameData.players : "";
  const playtime = props.gameData ? props.gameData.playtime : "";
  const description = props.gameData ? props.gameData.description : "";
  const apirating = props.gameData ? props.gameData.average_user_rating : "";
  const apilearningScore = props.gameData
    ? props.gameData.average_learning_complexity
    : "";
  const apistrategyScore = props.gameData
    ? props.gameData.average_strategy_complexity
    : "";
  const faq = props.gameData ? props.gameData.faq : "";
  const official = props.gameData ? props.gameData.official_url : "";
  const rating = Number((Math.round(apirating * 2) / 2).toFixed(1));
  const learningScore = Number(
    (Math.round(apilearningScore * 2) / 2).toFixed(1)
  )
    ? 5 - Number((Math.round(apilearningScore * 2) / 2).toFixed(1))
    : 0;

  const strategyScore = Number(
    (Math.round(apistrategyScore * 2) / 2).toFixed(1)
  );

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "20px",
        backgroundColor: theme.palette.primary.main,
        height: "475px",
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignContent="center"
        sx={{
          height: "100%",
        }}
      >
        <Grid
          item
          xs={11}
          sx={{
            height: "100%",
          }}
        >
          <Stack
           
            sx={{
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Grid container direction="row" display="flex" alignItems="center">
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography pt={2} pl={0} align="center" variant="h2">
                  {name}
                </Typography>
              </Grid>
            </Grid>
            {/* middle content */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Stack spacing={1}>
                  <Typography align="center" color="white" variant="h5">
                    Players: {players}{" "}
                  </Typography>
                  <Typography align="center" color="white" variant="h5">
                    Playtime: {playtime} Min
                  </Typography>
                  <Typography align="center" color="white" variant="h5">
                    Minimum Age: {age}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    {/* Game Description button */}
                    <Button
                      sx={{
                        ':hover': {
                          bgcolor: theme.palette.secondary.light, // theme.palette.primary.main
                          boxShadow:24
                        },
                        color: "white",
                        backgroundColor: theme.palette.secondary.main,
                        height: 45,
                        fontSize: 25,
                        textTransform: "none",
                        borderRadius: "20px",
                        width: "275px",
                        pt:1.25
                      }}
                      onClick={handleClickOpen("paper")}
                    >
                      Game Description
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      scroll={scroll}
                      aria-labelledby="scroll-dialog-title"
                      aria-describedby="scroll-dialog-description"
                    >
                      <DialogTitle
                        sx={{
                          color: "white",
                          backgroundColor: theme.palette.secondary.main,
                        }}
                        id="scroll-dialog-title"
                      >
                        Description & FAQ
                      </DialogTitle>
                      <DialogContent
                        dividers={scroll === "paper"}
                        sx={{
                          color: "white",
                          backgroundColor: theme.palette.secondary.main,
                        }}
                      >
                        <DialogContentText
                          id="scroll-dialog-description"
                          ref={descriptionElementRef}
                          tabIndex={-1}
                          sx={{
                            color: "white",
                            backgroundColor: theme.palette.secondary.main,
                          }}
                        >
                          <Typography
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                          <Typography
                            dangerouslySetInnerHTML={{ __html: faq }}
                          />
                        </DialogContentText>
                      </DialogContent>
                    </Dialog>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                {/* Scores */}
                <Stack spacing={1}>
                  {/* Rating score */}
                  <Stack  justifyContent="center" alignItems="center">
                    <Typography
                      sx={{ fontSize: "20px" }}
                      color="white"
                      variant="h5"
                    >
                      Game Rating - {labelsRating[rating]}
                    </Typography>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={rating}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                        }
                      />
                    </Box>
                  </Stack>
                  {/* Learing Curve */}
                  <Stack  justifyContent="center" alignItems="center">
                    <Typography
                      sx={{ fontSize: "20px" }}
                      color="white"
                      variant="h5"
                    >
                      Learning Curve - {labelsLearning[learningScore]}
                    </Typography>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={learningScore}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                        }
                      />
                    </Box>
                  </Stack>

                  {/* Strat score */}
                  <Stack  justifyContent="center" alignItems="center">
                    <Typography
                      sx={{ fontSize: "20px" }}
                      color="white"
                      variant="h5"
                    >
                      Strategy Score - {labelsStrat[strategyScore]}
                    </Typography>
                    <Box
                      sx={{
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={strategyScore}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                        }
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            {/* End of ratings */}
            {/* end of middle content */}
            
            {/* Bottom buttons */}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              pb={2}
            >
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
              {/* Add to collection button */}

              {!getGameById(props.state.collection, props.gameData.id) && 
              <Button 
                onClick={props.addGame}
                variant="contained" 
                sx={{
                    backgroundColor: theme.palette.error.main,
                    height: 40,
                    fontSize: 20,
                    borderRadius: "20px",
                    color:'white',
                    pt:1.25
                  }}>Add To Collection
              </Button>}
              
              {getGameById(props.state.collection, props.gameData.id) && 
              <Button 
                onClick={props.removeGame}
                variant="contained" 
                sx={{
                  backgroundColor: theme.palette.error.main,
                  height: 45,
                  fontSize: 16,
                  borderRadius: "20px",
                  color:'error'
                }}>Remove From Collection</Button>}

              </Grid>
              {/* official website button */}
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <a href={official} target="_blank" rel="noreferrer">
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: theme.palette.error.main,
                      height: 45,
                        fontSize: 25,
                      textTransform: "none",
                      borderRadius: "20px",
                      width: "275px",
                      pt:1.25
                    }}
                  >
                    Official Website
                  </Button>
                </a>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GameInfo;
