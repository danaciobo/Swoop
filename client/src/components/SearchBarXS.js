import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

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

export default function SearchBarXS({ items, setFilteredItems }) {

  const handleChange = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    const filtered = items.filter((item) => item.title.toLowerCase().includes(searchWord.toLowerCase()) || item.category.toLowerCase().includes(searchWord.toLowerCase()))
    if (filtered.length > 0) {
      setFilteredItems(filtered);
    } else {
      setFilteredItems(items);
    }
  }

  return (
    <Search sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none', marginLeft: '10px' } }}>
      <SearchIconWrapper>
        <SearchIcon color='#393937' />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder='Search…'
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
      />
    </Search>)
}