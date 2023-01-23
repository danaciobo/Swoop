
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Swoop.jpg';
import { Menu, MenuItem, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


import AddItem from './AddItem';
import Login from './Login';
import Logout from './Logout';


const pages = [
  'All',
  'Clothes',
  'Accessories',
  'Home',
  'Electronics',
  'Hobbies',
  'Freebies',
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    border: 'solid',
    borderColor: '#bdbdbd',
    borderWidth: 1,
  },
  marginLeft: 0,
  width: 'auto',
  maxWidth: 550,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#393937',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar({ setItems, setFilteredItems, items, setUser }) {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    const filtered = items.filter(
      (item) =>
        item.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        item.category.toLowerCase().includes(searchWord.toLowerCase())
    );
    if (filtered.length > 0) {
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  };

  const handleFilterCategory = (e) => {
    e.preventDefault();
    console.log(e);
    const activeCategory = e.target.value;
    const filtered = items.filter(
      (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
    );
    if (activeCategory.toLowerCase() === 'all') {
      console.log(items);
      setFilteredItems(items);
    } else {
      setFilteredItems(filtered);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar
          sx={{
            background: 'white',
            color: 'black',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            // noWrap
            component='div'
            sx={{ mr: 2, display: 'flex' }}
          >
            <a href='/'>
              <img
                src={Logo}
                width='150'
                height='45'
                max-width='100%'
                alt='swoop logo'
              />
            </a>
          </Typography>

          <Search
            sx={{
              background: '#EBE6DD',
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
          <Stack direction='row' spacing={2}>
            <AddItem
              setItems={setItems}
              setFilteredItems={setFilteredItems}
              items={items}
            />
            <Login setUser ={setUser} />
            <Logout />

            <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={'/ShoppingCart'}
                >

              <ShoppingCartIcon variant="outlined" fontSize="large"
              sx={{ display: { xs: "none", md: "flex", color: "#E25F1C" } }}></ShoppingCartIcon>
            </Link>

            <Link  style={{ textDecoration: 'none', color:'white' }} to={'/profile'}> 
              <AccountBoxIcon variant='outlined' fontSize='large'
              sx ={{color:'black'}}
               /> 
            </Link>


          </Stack>
        </Toolbar>

        <Toolbar sx={{ color: 'white', justifyContent: 'space-between' }}>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>
                    <Link
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={`/${page}`}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Search
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', marginLeft: '10px' },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon color='#393937' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                value={page}
                onClick={handleFilterCategory}
                sx={{ my: 2, color: 'white', display: 'block', marginRight: 5 }}
              >
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to={`/${page}`}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
