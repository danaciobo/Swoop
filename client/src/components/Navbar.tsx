import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../Swoop.jpg';
import { Link, Menu, MenuItem, Stack } from '@mui/material';
import AddItem from './AddItem';
import Login from './Login';
import { grey } from '@mui/material/colors';
import React from 'react';
import {User, Item} from '../Types/Types'
import { useSelector, useDispatch } from 'react-redux';
const pages = ['All', 'Clothes', 'Accessories', 'Home', 'Electronics', 'Hobbies', 'Freebies'];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.75),
    border: 'solid',
    borderColor: '#bdbdbd',
    borderWidth: 1
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
    // vertical padding + font size from searchIcon
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

export default function Navbar({ items, user }: {

  items: Item[];
  user: User | null
}) {

  const appState = useSelector((state: any) => state.App)
  const dispatch = useDispatch()

  const [anchorElNav, setAnchorElNav] = useState<null | EventTarget>(null);

  const handleOpenNavMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const searchWord = e.target.value;
    const filtered = items.filter((item) => item.title.toLowerCase().includes(searchWord.toLowerCase()) || item.category.toLowerCase().includes(searchWord.toLowerCase()))
    if (filtered.length > 0) {
    dispatch({ type: 'APP_FILTERED_ITEMS', payload: filtered })
    } else {
     dispatch({ type: 'APP_FILTERED_ITEMS', payload: filtered })
    }
  }

  const handleFilterCategory = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement
    const activeCategory = target.value;
    const filtered = items.filter((item) => item.category.toLowerCase() === (activeCategory.toLowerCase()))
    if (activeCategory.toLowerCase() === 'all') {
      console.log(items)
          dispatch({ type: 'APP_FILTERED_ITEMS', payload: items })
    } else {
          dispatch({ type: 'APP_FILTERED_ITEMS', payload: filtered })
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{ background: 'white', color: 'black', justifyContent: 'space-between' }}>
          <Typography
            // noWrap
            component='div'
            sx={{ mr: 2, display: 'flex' }}
          >
            <img  data-testid= 'swooplogo' src={Logo} width='150' height='45' max-width='100%' alt='swoop logo' />
          </Typography>

          <Search  data-testid= 'searchbar' sx={{ background: '#EBE6DD', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <StyledInputBase
              placeholder="Search…"
              data-testid= 'searcher'
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

          </Search>
          <Stack direction="row" spacing={2} >
            {/* help request about this cause we are confused */}
            <AddItem data-testid="addItemComp"  items={items}/>
            <Login data-testid = 'login' />
          </Stack>
        </Toolbar>

        <Toolbar sx={{ color: 'white', justifyContent: 'space-between' }}>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav as Element}
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Search sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', marginLeft: '10px' } }}>
            <SearchIconWrapper>
              <SearchIcon style = {{color: 'blue'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
            />
          </Search>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
            {pages.map((page) => (

              <Button
                key={page}
                value={page}
                onClick={handleFilterCategory as React.MouseEventHandler<HTMLButtonElement>}
                sx={{ my: 2, color: 'white', display: 'block', marginRight: 5 }}
              >
                {page}
              </Button>

            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  )

}

