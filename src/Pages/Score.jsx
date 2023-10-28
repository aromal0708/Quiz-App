import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button,Typography } from "@mui/material";
import { decode } from "html-entities";
import { useContext } from "react";
import { QuestionContext } from "../contexts/QuestionContext";
import { useNavigate } from "react-router-dom";

const Score = () => {
  const { settings, setSettings } = useContext(QuestionContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setSettings({
      ...settings,
      question_category: "",
      question_difficulty: "",
      question_type: "",
      score: 0,
    });
    navigate("/")
    window.location.reload();
  };
  return (
    <>
      <Box mt={20}>
        <Typography variant="h2">
          Your Score : {settings.score}/{settings.amount_of_question}
        </Typography>
        <Box mt={2}>
          <Button
            onClick={handleClick}
            startIcon={<ArrowForwardIcon />}
            variant="outlined"
          >
            Return to Home Screen
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Score;
