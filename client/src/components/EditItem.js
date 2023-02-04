
import { useState, useContext } from 'react';
import { editItem } from '../services';
import DataContext from '../context';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


export default function EditItem({ setItems, setFilteredItems, items, item }) {

  const { user } = useContext(DataContext);
  const [editedItem, setEditedItem] = useState(item)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = async () => {

    setTitle(editedItem.title);
    setDescription(editedItem.description);
    setPrice(editedItem.price);
    setQuantity(editedItem.quantity);
    setLocation(editedItem.location);
    setCategory(editedItem.category);
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('location', location);
    formData.append('seller', user._id);

    postItem(formData, editedItem._id);
    setTitle('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setLocation('');
    setCategory('');
    setImage('');

    handleClose();
  };

  const itemsList = items;
  const postItem = async (data, id) => {
    try {
      const updatedItem = await editItem(data, id);
      console.log(updatedItem)
      setItems(items => [...items.filter(item => item._id !== id), updatedItem]);
      setFilteredItems(filteredItems => [...itemsList.filter(item => item._id !== id), updatedItem]);

    } catch (e) {
      console.log(e);
    }
  }


  return (
    <div>
      <Button variant='outlined' p={0} size='small' onClick={handleClickOpen} disableElevation>
        Edit
      </Button>

      <Dialog open={open} onClose={handleClose} >
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose} >
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }}>Edit your item</DialogTitle>
        <DialogContent>

          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '2rem',
              maxWidth: '600px'
            }}
          >
            <TextField
              sx={{ width: '30em', marginBottom: '0.7em' }}
              label='Title'
              type='text'
              variant='outlined'
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              sx={{ width: '30em', marginBottom: '0.7em' }}
              multiline
              rows={5}
              label='Description'
              variant='standard'
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl id='cat-select-label' sx={{ width: '30em', marginBottom: '0.7em' }}>
              <InputLabel id='cat-select-label'>Category</InputLabel>
              <Select
                labelId='cat-select-label'
                value={category}
                label='Category'
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={'clothes'}>Clothes</MenuItem>
                <MenuItem value={'accessories'}>Accesories</MenuItem>
                <MenuItem value={'home'}>Home & Garden</MenuItem>
                <MenuItem value={'electronics'}>Electronics</MenuItem>
                <MenuItem value={'hobbies'}>Hobbies</MenuItem>
                <MenuItem value={'freebies'}>Freebies</MenuItem>
              </Select>
            </FormControl>
            <div display='flex' flexDirection='rows'>
              <TextField
                sx={{ width: '9.5em', marginBottom: '0.7em' }}
                label='Price'
                variant='outlined'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <TextField
                sx={{ width: '9.5em', marginBottom: '0.7em' }}
                label='Quantity'
                variant='outlined'
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <TextField
                sx={{ width: '9.5em', marginBottom: '0.7em' }}
                label='Location'
                variant='outlined'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <input
              accept='image/*'
              style={{ display: 'none' }}
              id='contained-button-file'
              multiple
              type='file'
              onChange={(e) => setImage(e.target.files[0])}
              margin='2'
            />
            <label htmlFor='contained-button-file'>
              <Button variant='contained' component='span'>
                Upload
              </Button>
              <IconButton color='primary' aria-label='upload picture' component='label'>
                <PhotoCamera />
              </IconButton>
            </label>

            <Button
              sx={{ width: '16em', height: '3em', margin: 1 }}
              variant='contained'
              color='primary'
              type='submit'
            >
              Save Changes
            </Button>
          </form>
        </DialogContent>

      </Dialog>
    </div >
  );
}


