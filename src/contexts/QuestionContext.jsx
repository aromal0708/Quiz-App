import React, { useState, createContext } from "react";

export const QuestionContext = createContext();

export const SettingsContextProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    question_category: "",
    question_difficulty: "",
    question_type: "multiple",
    score: 0,
    amount_of_question: 15,
  });
  return (
    <QuestionContext.Provider value={{ settings, setSettings }}>
      {children}
    </QuestionContext.Provider>
  );
};
