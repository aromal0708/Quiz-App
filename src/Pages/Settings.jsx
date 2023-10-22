import { Box, Button, CircularProgress, Typography } from "@mui/material";
import React from "react";
import SelectInput from "../Components/Select";
import { useAxios } from "../hooks/useAxios";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];
  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];
  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if(error){
    return(
      <Box mt={20}>
        <Typography variant="h4">
          Something Went Wrong
        </Typography>
      </Box>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <SelectInput options={response.trivia_categories} label="Category" />
      <SelectInput options={difficultyOptions} label="Difficulty Level" />
      <SelectInput options = {typeOptions}label="Type" />
      <Box mt={3} width="100%">
        <Button endIcon={<ArrowForwardIcon />} variant="contained">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
