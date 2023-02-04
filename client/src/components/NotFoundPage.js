import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function NotFoundPage() {

  const navigate = useNavigate();

  return (

    <Box m={5}>
      <Typography variant='h4' my={5}>404: Page not found!</Typography>
      <Button variant='outlined' onClick={() => navigate('/')}>Back to Main Page</Button>
    </Box>

  );
}