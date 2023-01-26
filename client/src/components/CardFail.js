import React from 'react';
import { Container, Typography, Button, Grid} from "@mui/material";


function CardFail({ user }) {
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
      sx={{ marginTop: 2 }}>Oops!</Typography>
      <Typography variant='h5' mt={2}
      align='center'
      sx={{ paddingBottom: 5 }}
      >Something went wrong</Typography>


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
          sx={{ width: 150 }}>TRY AGAIN
        </Button>
      </Grid>


      </Container>


    </>
  )
}

export default CardFail