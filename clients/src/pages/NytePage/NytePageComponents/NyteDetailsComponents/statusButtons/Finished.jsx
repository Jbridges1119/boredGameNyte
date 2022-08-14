import { Button } from "@mui/material";
import theme from "../../../../../assets/theme";

const Finished = (props) => {
  return (
    <Button
      disabled
      style={{
        color: "lightgray",
      }}
      sx={{
        height: 50,
        width: 200,
        fontSize: 25,
        borderRadius: "20px",
        textTransform: "none",
        pt: 0.9,
      }}
      variant="contained"
    >
      Finished
    </Button>
  );
};

export default Finished;
