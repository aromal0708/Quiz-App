import "./App.css";
import Settings from "./Pages/Settings";
import Score from "./Pages/Score";
import Questions from "./Pages/Questions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <Typography variant="h2" fontWeight="bold" mt={3}>
          Quiz
        </Typography>
        <Routes>
          <Route path="/" element={<Settings />} exact />
          <Route path="/score" element={<Score />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
