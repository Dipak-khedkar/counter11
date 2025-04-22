import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          color: "white",
          padding: "20px",
          backgroundColor: "#174544",
          textAlign: "center",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 8px;",
          borderRadius: "8px",
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            Counter App
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
            }}
          >
            {count}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              gap: { xs: 1, sm: 2 },
              alignItems: "center",
            }}
          >
            <Button
              onClick={increment}
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              sx={{
                width: { xs: "100%", sm: "auto" },
                padding: { xs: "10px", sm: "12px" },
              }}
            >
              Increment
            </Button>
            <Button
              onClick={decrement}
              variant="contained"
              color="secondary"
              startIcon={<RemoveIcon />}
              sx={{
                width: { xs: "100%", sm: "auto" },
                padding: { xs: "10px", sm: "12px" },
              }}
            >
              Decrement
            </Button>
            <Button
              onClick={reset}
              variant="contained"
              color="error"
              startIcon={<RestartAltIcon />}
              sx={{
                width: { xs: "100%", sm: "auto" },
                padding: { xs: "10px", sm: "12px" },
              }}
            >
              Reset
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Counter;
