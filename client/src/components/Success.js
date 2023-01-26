import React from 'react';
import { Container, Typography, Button, Grid} from "@mui/material";

function Success({ user }) {
console.log(user)

  return (
    <>
      <Container

        maxWidth={false}
        sx={{
          width: "100%",
          paddingTop: "20px",
          background: "#EBE6DD",
        }}
      >
      <Typography variant='h4' mt={2}
      align='center'
      sx={{ marginTop: 2 }}>Thank you</Typography>
      <Typography variant='h5' mt={2}
      align='center'
      // sx={{ paddingBottom: 5 }}
      >for you purchase!</Typography>
      <Typography variant='h4' mt={2}
      align='center'
      sx={{ marginBottom: 4 }}>🎉</Typography>

        <Grid
        container
        direction="row"
        spacing={{ xs: 5, md: 1 }}
        alignItems="center"
        justifyContent="center"
       >
        <Button
          variant="contained"
          // align='center'
          sx={{ width: 150 }}>BACK TO SHOP
        </Button>
      </Grid>


      </Container>


    </>
  )
}

export default Success