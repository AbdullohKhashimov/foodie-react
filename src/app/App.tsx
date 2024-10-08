import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h1" component={"h1"}>
            Create React App on Foodie
          </Typography>
          <Button variant={"outlined"}>Success</Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
