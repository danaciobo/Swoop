import { getUserById } from "../services"
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { Avatar, Card, CardActionArea, CardContent, CardHeader, CardMedia, Container, Grid, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from "react";
import ListItemText from '@mui/material/ListItemText';
import { User, Item } from "../Types/Types";




export default function Profile({items}: {items: Item[]}) {

  const [User, setUser] = useState<User>()

  useEffect(() => {
    getUserById('63c983992fed3945324e68f9')
      .then(response => {
        console.log(response)
        setUser(response)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <Container >
      <Typography variant='h4' mt={4}>
        Welcome {User?.firstName}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          p: 1,
          m: 1,
          borderRadius: 1
        }}
      >
        <Box sx={{
          width: 350,
          height: 450,
          marginTop: 5,
          marginBottom: 10,
        }}>

          <Card sx={{ maxWidth: 400, padding: '10', height: '100%', background: '#EBE6DD'}}>
            <CardHeader sx={{ height: 5 }}></CardHeader>
            <CardMedia sx={{ height: 100 }} >
              <Avatar sx={{ margin: 5, backgroundColor: '#E25F1C', width: 70, height: 70}}> DC</Avatar>
            </CardMedia>
            <CardContent sx={{ alignFont: 'center' }}>
              <Typography gutterBottom variant="h5" component="div" align='center'>
                {User?.firstName + ' ' + User?.lastName}
              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, marginTop: 1 }}>
                <ListItem>
                  <ListItemText primary="Email address" secondary={User?.email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Phone number" secondary={User?.phoneNumber} />
                </ListItem>
              </List>
            </CardContent>

          </Card>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1',
            borderColor: '#EBE6DD',
            p: 1,
            ml: 10,
            height: 450,
          }}
        >
          <Box>
          <Typography variant='h5' m={2}>
        Items for sale
      </Typography>
            <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
              // columns={{ xs: 4, sm: 8, md: 12 }}
              spacing='5'
            >
              {items ? items.slice(0,5).map((item:Item) =>
              (
                <Grid item key={item._id} >
                  <Card sx={{ width: 100, height: 120 }}>
                    <CardActionArea>
                      <CardContent sx={{ padding: 0 }}>
                        <img
                          src={`http://localhost:3005/${item.image}`}
                          height="70px"
                          width="100%"
                          alt={item.title}
                        />
                      </CardContent>
                    </CardActionArea>
                    <CardHeader
                      titleTypographyProps={{
                        fontSize: 12,
                      }}
                      subheaderTypographyProps={{
                        fontSize: 10,
                      }}
                      title={'$' + item.price}
                      subheader={item.title}
                    />
                  </Card>
                </Grid>)) : <p>No items for sale yet..</p>
              }
            </Grid>
            </Box>
            <Box>
            <Typography variant='h5' m={2} mt={5}>
        Items bought
      </Typography>
            <Grid container
              direction="row"
              justifyContent="space-around"
              alignItems="stretch"
              // columns={{ xs: 4, sm: 8, md: 12 }}
              spacing='5'
            >
              {items.length >100 ? items.slice(0,5).map((item:Item)=>
              (
                <Grid item key={item._id} >
                  <Card sx={{ width: 100, height: 120 }}>
                    <CardActionArea>
                      <CardContent sx={{ padding: 0 }}>
                        <img
                          src={`http://localhost:3005/${item.image}`}
                          height="70px"
                          width="100%"
                          alt={item.title}
                        />
                      </CardContent>
                    </CardActionArea>
                    <CardHeader
                      titleTypographyProps={{
                        fontSize: 12,
                      }}
                      subheaderTypographyProps={{
                        fontSize: 10,
                      }}
                      title={'$' + item.price}
                      subheader={item.title}
                    />
                  </Card>
                </Grid>)) : <p>No items bought</p>
              }
            </Grid>
            </Box>
          </Box>
        </Box>
    </Container>

  )
}