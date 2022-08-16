import * as React from "react";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Grid, Box, Stack } from "@mui/material";
import theme from "../../../assets/theme";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GameCollectionCard(props) {
  return (
    <motion.div
      className="outer"
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      <Paper
        direction="row"
        sx={{
          maxWidth: "100% !important",
          backgroundColor: theme.palette.primary.main,
          color: "white",
          mx: 11,
          borderRadius: "20px",
        }}
        elevation={4}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11.5}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              py={2}
            >
              <Grid item xs={3.5}>
                {/* Picture */}
                <Box
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    backgroundColor: theme.palette.primary.dark,
                    height: "215px",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={props.img}
                    alt=""
                    sx={{
                      objectFit: "contain",
                      maxWidth: "200px",
                      maxHeight: "190px",
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={0.25}></Grid>
              <Grid item xs={8.25}>
                <Stack spacing={5}>
                  <Typography
                    sx={{ color: "#FFFFFF" }}
                    align="center"
                    variant="h4"
                  >
                    {props.name}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Button
                      onClick={() => {
                        props.deleteGame(props.user.id, props.gameId);
                      }}
                      variant="contained"
                      sx={{
                        ":hover": {
                          bgcolor: theme.palette.error.light,
                          boxShadow: 24,
                          transform: "translate(0px ,-1px) ",
                        },
                        ":active": {
                          bgcolor: theme.palette.error.light,
                          boxShadow: 8,
                        },
                        backgroundColor: theme.palette.error.main,
                        height: 40,
                        fontSize: 20,
                        borderRadius: "20px",
                        color: "error",
                      }}
                    >
                      Remove From Collection
                    </Button>

                    <Button
                      variant="contained"
                      component={Link}
                      to={"/game/" + props.gameId}
                      sx={{
                        ":hover": {
                          bgcolor: theme.palette.error.light,
                          boxShadow: 24,
                          transform: "translate(0px ,-1px) ",
                        },
                        ":active": {
                          bgcolor: theme.palette.error.light,
                          boxShadow: 8,
                        },

                        backgroundColor: theme.palette.error.main,
                        height: 40,
                        fontSize: 20,
                        borderRadius: "20px",
                        color: "white",
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}
