import { Box, Button, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom';

export default function SuccessCheckout() {

  const navigate = useNavigate();

  return (

    <Box m={5}>
      <Typography variant='h4' my={4}> Your Payment was sucessful </Typography>
      <Button variant='outlined' onClick={() => navigate('/')}>Back to Main Page</Button>
    </Box>

  );
}