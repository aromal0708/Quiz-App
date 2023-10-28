import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import SelectInput from "../Components/Select";
import { useAxios } from "../hooks/useAxios";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  const navigate = useNavigate();

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={20}>
        <Typography variant="h4">Something Went Wrong</Typography>
      </Box>
    );
  }
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/questions");
  };
  return (
    <form>
      <Box mt={10}>
        <SelectInput options={response.trivia_categories} label="Category" />
        <SelectInput options={difficultyOptions} label="Difficulty Level" />
      </Box>
      <Box mt={3} width="100%">
        <Button
          onClick={handleClick}
          endIcon={<ArrowForwardIcon />}
          variant="contained"
        >
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
