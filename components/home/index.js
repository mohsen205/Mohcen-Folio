import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { Field, Form, Formik } from "formik";

const StyledButton = styled(Button)(({ theme }) => ({
  border: "1px solid black",
  borderRadius: "0px",
  fontStyle: "normal",
  fontWeight: 500,
  letterSpacing: ".04em",
  lineHeight: "1.2em",
  fontSize: "1rem",
  padding: ".8rem 1.2rem",
  color: "black",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
    border: "1px solid black",
  },
}));
const Home = () => {
  const onSubmit = ({ email }) => {
    console.log(email);
  };
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSecondes, setTimerSecondes] = useState("00");

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Nov 15, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecondes(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <Box
      sx={{
        paddingY: "3rem",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h1" fontSize={50}>
          COMMING SOON
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginY: "3.3vw",
          }}
        >
          <Stack direction="row" spacing={3}>
            <Stack>
              <Typography
                sx={{
                  fontSize: "calc((2.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                {timerDays}
              </Typography>
              <Typography
                sx={{
                  fontSize: "calc((1.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                Days
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontSize: "calc((2.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                {timerHours}
              </Typography>
              <Typography
                sx={{
                  fontSize: "calc((1.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                Hours
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontSize: "calc((2.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                {timerMinutes}
              </Typography>
              <Typography
                sx={{
                  fontSize: "calc((1.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                Minutes
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontSize: "calc((2.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                {timerSecondes}
              </Typography>
              <Typography
                sx={{
                  fontSize: "calc((1.2 - 1) * 1.2vw + 1rem)",
                }}
              >
                Seconds
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingY: "3rem",
          }}
        >
          <Formik initialValues={{ email: "" }} onSubmit={onSubmit}>
            <Form>
              <Stack direction="row" spacing={2}>
                <Field
                  name="email"
                  placeholder="Email"
                  required
                  className="form-control"
                />
                <StyledButton
                  variant="outlined"
                  disableElevation
                  disableTouchRipple
                >
                  Send
                </StyledButton>
              </Stack>
            </Form>
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
