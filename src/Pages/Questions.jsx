import { Box, Button, Grid, Typography } from "@mui/material";

const Questions = () => {
  return (
    <Box mt={4}>
      <Typography variant="h3">Question 1</Typography>
      <Typography variant="h5" mt={5}>
        This is the question ?
      </Typography>

      <Grid my={3} container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid my={1} item xs={6}>
          <Button fullWidth variant="contained">Option 1</Button>
        </Grid>
        <Grid my={1} item xs={6}>
          <Button fullWidth variant="contained">Option 2</Button>
        </Grid>
        <Grid my={1} item xs={6}>
          <Button fullWidth variant="contained">Option 3</Button>
        </Grid>
        <Grid my={1} item xs={6}>
          <Button fullWidth variant="contained">Option 4</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Questions;
