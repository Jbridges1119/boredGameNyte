import { Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";
import theme from "../../../assets/theme";
import { Box } from "@mui/system";

export default function GameDisplayCard(props) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: "100%",
          height: 150,
          borderRadius: "20px",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
          alignItems="flex-start"
        >
          <Grid item xs={3}>
            <Box
              sx={{
                width: "100%",
                borderRadius: "20px",
                backgroundColor: theme.palette.primary.main,
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                mt: 3,
                ml: 1,
              }}
            >
              <img
                style={{
                  objectFit: "contain",
                  maxWidth: "100px",
                  maxHeight: "100px",
                  borderRadius: "10px",
                }}
                src={props.thumbnail}
                alt="no img"
              />
            </Box>
          </Grid>

          <Grid item xs={8}>
            <Stack spacing={3.5} mt={3.5}>
              <Typography
                sx={{ color: "#FFFFFF" }}
                align="center"
                variant="h5"
                pl={1}
              >
                {props.name}
              </Typography>

              <Typography sx={{ color: "#FFFFFF" }} align="center" variant="h6">
                Players: {props.minPlayers} to {props.maxPlayers}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={1}>
            <IconButton
              sx={{ color: "white" ,  ':hover': {
                color: 'red',
                
              }}}
              onClick={props.toggleOff(props.id)}
            >
              <Close />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
