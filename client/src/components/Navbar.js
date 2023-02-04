import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../images/Swoop.jpg';
import { Badge, Menu, MenuItem, Stack } from '@mui/material';
import Login from './Login';
import Register from './Register'
import Logout from './Logout';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import DataContext from '../context';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar';
import SearchBarXS from './SearchBarXS';


const pages = ['All', 'Clothes', 'Accessories', 'Home', 'Electronics', 'Hobbies', 'Freebies'];



export default function Navbar({ setItems, setFilteredItems, items }) {
  const { setIsAuthenticated, isAuthenticated, cart, setShowCart } = useContext(DataContext)
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleFilterCategory = (e) => {
    e.preventDefault();
    const activeCategory = e.target.value;
    const filtered = items.filter((item) => item.category.toLowerCase() === (activeCategory.toLowerCase()))
    if (activeCategory.toLowerCase() === 'all') {
      console.log(items)
      setFilteredItems(items);
    } else {
      setFilteredItems(filtered);
    }
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' >
          <Toolbar sx={{ background: 'white', color: 'black', justifyContent: 'space-between' }}>

            <IconButton
              component='div'
              sx={{ mr: 2, display: 'flex' }}
              onClick={() => navigate('/')}
            >
              <img src={Logo} width='150' height='45' max-width='100%' alt='swoop logo' />
            </IconButton>

            <SearchBar items={items} setFilteredItems={setFilteredItems} />

            <Stack direction='row' spacing={2} >
              {isAuthenticated ?
                (<>
                  <IconButton
                    size='large'
                    edge='end'
                    onClick={() => setShowCart(true)}>
                    <Badge badgeContent={cart && cart.length} color='success'>
                      <ShoppingCart sx={{ color: '#393937' }} />
                    </Badge>
                  </IconButton>

                  <IconButton
                    size='large'
                    edge='end'
                    aria-label='account of current user'
                    onClick={() => navigate('/profile')}
                    color='inherit'
                  >
                    <AccountCircle sx={{ color: '#393937' }} />
                  </IconButton>

                  <Logout />
                </>) :
                (<>
                  <IconButton
                    size='large'
                    edge='end'
                    onClick={() => setShowCart(true)}>
                    <Badge badgeContent={cart && cart.length} color='success'>
                      <ShoppingCart sx={{ color: '#393937' }} />
                    </Badge>
                  </IconButton>
                  <Register setIsAuthenticated={setIsAuthenticated} />
                  <Login setIsAuthenticated={setIsAuthenticated} />
                </>)
              }
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
                    <Typography textAlign='center'>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <SearchBarXS items={items} setFilteredItems={setFilteredItems} />
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
              <Button
                sx={{ my: 2, size: 'large', color: 'white', display: { xs: 'none', md: 'block' }, marginRight: 3, marginLeft: 4, fontSize: 18, fontWeight: 'bolder', padding: '2' }}
                onClick={() => navigate('/')} >
                Home
              </Button>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center' } }}>
                {pages.map((page) => (

                  <Button
                    key={page}
                    value={page}
                    onClick={handleFilterCategory}
                    sx={{ my: 2, color: 'white', display: 'block', marginRight: 5 }}
                  >
                    {page}
                  </Button>

                ))}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box >
    </div>
  );

}


