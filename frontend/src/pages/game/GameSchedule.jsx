import * as React from "react";
import TextField from "@mui/material/TextField";
// import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { CompareContainer } from "./GameSchedule.style";

// import { useState } from "react";

const GameSchedule = () => {
  const [value, setValue] = React.useState(null);

  return (
    <CompareContainer>
      <div className="title">경기 일정</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <DatePicker
            views={["day"]}
            label="Just date"
            value={value}
            onChange={(newValue) => {
              console.log(newValue);
              setValue(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} helperText={null} />
            )}
          />
        </Stack>
      </LocalizationProvider>
    </CompareContainer>
  );
};

export default GameSchedule;
