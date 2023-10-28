import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { QuestionContext } from "../contexts/QuestionContext";

const SelectInput = ({ label, options }) => {
  const { settings, setSettings } = useContext(QuestionContext);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    if (label == "Category") {
      setSettings({ ...settings, question_category: e.target.value });
    } else {
      setSettings({ ...settings, question_difficulty: e.target.value });
    }
  };

  return (
    <Box mt={3} maxWidth="100%">
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          sx={{ textAlign: "left" }}
          value={selectedValue}
          label={label}
          onChange={handleChange}
        >
          {options?.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;
