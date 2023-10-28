import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import { decode } from "html-entities";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { useAxios } from "../hooks/useAxios";

const Questions = () => {
  // VARIABLES AND IMPORTED STATES
  const { settings, setSettings } = useContext(QuestionContext);
  const navigate = useNavigate();
  let apiUrl = `/api.php?amount=${settings?.amount_of_question}&category=${settings?.question_category}&difficulty=${settings?.question_difficulty}&type=${settings?.question_type}`;
  const { response, error } = useAxios({ url: apiUrl });

  // STATES
  const [index, setIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  // FUNCTIONS
  const handleClick = (e) => {
    const question = response.results[index];

    if (e.target.textContent === question.correct_answer) {
      setScore((score) => score + 1);
    }

    if (index + 1 < response?.results.length) {
      setIndex((index) => index + 1);
    } else {
      setSettings({ ...settings, score });
      navigate("/score");
    }
  };

  // USESTATE FUNCTION
  useEffect(() => {
    if (response?.results.length) {
      const question = response.results[index];
      const answers = [question.correct_answer, ...question.incorrect_answers];
      const shuffledAnswers = shuffleArray(answers);
      setOptions(shuffledAnswers);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [response, index]);

  const shuffleArray = (array) => {
    const shuffledArray = array.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, 4); // Return the first 4 elements
  };

  if (loading) {
    return (
      <Box mt={20}>
        <LinearProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box mt={20}>
        <Typography variant="h3">SomeThing Went Wrong..!</Typography>
      </Box>
    );
  }

  return (
    <Box mt={4}>
      <Typography variant="h3">Question {index + 1}</Typography>
      <Typography variant="h5" mt={5}>
        {decode(response?.results[index]?.question)}
      </Typography>

      <Grid my={3} container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {options.map((data, index) => (
          <Grid key={index} my={1} item xs={6}>
            <Button onClick={handleClick} fullWidth variant="contained">
              {decode(data)}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Typography mt={5} variant="h6">
        Score : {score}/{response?.results.length}
      </Typography>
    </Box>
  );
};

export default Questions;
