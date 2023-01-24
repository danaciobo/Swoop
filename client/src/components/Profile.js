import Box from '@mui/material/Box';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  Typography,

  IconButton,
  Input,
  FormControl,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useEffect, useState } from 'react';

export default function Profile({ items, user, setCurrentItem }) {
  const [editButton, setEditButton] = useState(false);
  const [updatedUserDetails, setUpdatedUserDetails] = useState({});

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleClick() {
    setEditButton(!editButton);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUpdatedUserDetails({ ...user, email, phoneNumber });
    setEditButton(!editButton);
    setPhoneNumber('');
    setEmail('');
  }


  useEffect(()=>{
    console.log(user)
  },[])

  return (
    <Container>
      <Typography variant='h4' mt={4}>
        Welcome {user.given_name}!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Box
          sx={{
            width: 350,
            height: 450,
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          <Card
            sx={{
              maxWidth: 400,
              padding: '10',
              height: '100%',
              background: '#EBE6DD',
            }}
          >
            <CardHeader sx={{ height: 5 }}></CardHeader>
            <CardMedia sx={{ height: 100 }}>
              <IconButton onClick={handleClick}>
                <EditIcon />
              </IconButton>
              <Avatar
                sx={{
                  margin: 5,
                  backgroundColor: '#E25F1C',
                  width: 70,
                  height: 70,
                  margin: 'auto',
                }}
              >
                {' '}
                DC
              </Avatar>
            </CardMedia>
            {/* THIS IS THE START OF THE CARD  */}

            <CardContent sx={{ alignFont: 'center' }}>
              <Typography
                gutterBottom
                variant='h5'
                component='div'
                align='center'
              >

                {user.given_name + " " + user.family_name}

              </Typography>
              <List sx={{ width: '100%', maxWidth: 360, marginTop: 1 }}>
                <form onSubmit={handleSubmit}>
                  <ListItem>
                    <ListItemText
                      primary='Email address'
                      secondary={
                        !editButton ? (
                          updatedUserDetails.email
                        ) : (
                          <Input
                            required
                            placeholder={updatedUserDetails.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        )
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary='Phone number'
                      secondary={
                        !editButton ? (
                          updatedUserDetails.phoneNumber
                        ) : (
                          <Input
                            required
                            placeholder={updatedUserDetails.phoneNumber}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                          />
                        )
                      }
                    />
                  </ListItem>
                  <input type='submit' hidden />
                </form>
              </List>
            </CardContent>

            {/* THIS IS THE END OF THE CARD  */}
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
            <Grid
              container
              direction='row'
              justifyContent='space-around'
              alignItems='stretch'
              spacing='5'
            >
              {items ? (
                items.slice(0, 5).map((item, index) => (
                  <RouterLink to='/ItemDetails'>
                    <Grid
                      item
                      key={item.id}
                      onClick={() => setCurrentItem(item)}
                    >
                      <Card sx={{ width: 100, height: 120 }}>
                        <CardActionArea>
                          <CardContent sx={{ padding: 0 }}>
                            <img
                              src={item.image}
                              height='70px'
                              width='100%'
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
                    </Grid>
                  </RouterLink>
                ))
              ) : (
                <p>No items for sale yet..</p>
              )}
            </Grid>
          </Box>
          <Box>
            <Typography variant='h5' m={2} mt={5}>
              Items bought
            </Typography>
            <Grid
              container
              direction='row'
              justifyContent='space-around'
              alignItems='stretch'
              spacing='5'
            >
              {items.length > 100 ? (
                items.slice(0, 5).map((item, index) => (
                  <Grid item key={item.id}>
                    <Card sx={{ width: 100, height: 120 }}>
                      <CardActionArea>
                        <CardContent sx={{ padding: 0 }}>
                          <img
                            src={item.image}
                            height='70px'
                            width='100%'
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
                  </Grid>
                ))
              ) : (
                <p>No items bought</p>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
