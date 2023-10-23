import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Container, Typography } from "@mui/material";

const Score = () => {
  return (
    <>
      <Box mt={20}>
        <Typography variant="h2">Your Score : 10/10</Typography>
        <Box mt={2}>
          <Button startIcon={<ArrowForwardIcon/>} variant="outlined">
            Return to Home Screen
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Score;
