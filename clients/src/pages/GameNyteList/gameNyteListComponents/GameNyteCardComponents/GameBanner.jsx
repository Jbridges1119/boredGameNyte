import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import theme from "../../../../assets/theme";
import { Box } from "@mui/system";

const GameBanner = (props) => {
  return (
    <>
      <Stack>
        <Box
          sx={{
            width: "200px",
            borderRadius: "20px",
            backgroundColor: theme.palette.primary.main,
            height: "125px",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            my: 1.5,
          }}
        >
          <CardMedia
            component="img"
            image={props.img}
            alt=""
            sx={{
              objectFit: "contain",
              maxWidth: "125px",
              maxHeight: "125px",
            }}
          />
        </Box>

        <Typography
          variant="body2"
          align="center"
          sx={{
            fontSize: "18px",
            color: "#FFFFFF",
            borderRadius: "20px",
            maxWidth: "200px",
          }}
        >
          {props.name}
        </Typography>
      </Stack>
    </>
  );
};

export default GameBanner;
