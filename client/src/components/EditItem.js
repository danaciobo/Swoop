import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { updateItem } from '../services';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

export default function EditItem({ items, item, setCurrentItem}) {


  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [quantity, setQuantity] = useState(item.quantity);
  const [location, setLocation] = useState(item.location);
  const [category, setCategory] = useState(item.category);
  const [image, setImage] = useState(item.image);
  const [open, setOpen] = useState(false);
  const [previewSource, setPreviewSource] = useState();
  const [fileInputState] = useState('');
const navigate = useNavigate()
  const handleFileInputChange = (e) => {
    console.log(e);
    const file = e;
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setPreviewSource(reader.result);
    };
  };

  const handleClickOpen = () => {
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

    editItem(item.id, {
      title,
      description,
      category,
      price,
      quantity,
      location,
      image,
    });

    handleClose();
  };

  const editItem = async (id, data) => {
    try {
      const edit = await updateItem(id, data);

      setCurrentItem(data)
      navigate('/Profile')
      return edit

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button
        variant='contained'
        endIcon={<EditIcon />}
        sx={{ display: { xs: 'none', md: 'flex', background: '#E25F1C' } }}
        onClick={handleClickOpen}
      >
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose}>
            <CloseIcon sx={{ fontSize: '1.3em' }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: 'center', padding: 0 }}>
          Edit your item
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: '2rem',
              maxWidth: '600px',
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
            <FormControl
              id='cat-select-label'
              sx={{ width: '30em', marginBottom: '0.7em' }}
            >
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
                sx={{ width: '10em', marginBottom: '0.7em' }}
                label='Price'
                variant='outlined'
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <TextField
                sx={{ width: '10em', marginBottom: '0.7em' }}
                label='Quantity'
                variant='outlined'
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <TextField
                sx={{ width: '10em', marginBottom: '0.7em' }}
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
              value={fileInputState}
              multiple
              type='file'
              onChange={(e) => handleFileInputChange(e.target.files[0])}
              margin='2'
            />

            <label htmlFor='contained-button-file'>
              <Button variant='contained' component='span'>
                Upload
              </Button>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='label'
              >
                <PhotoCamera />
              </IconButton>
            </label>

            <Button
              sx={{ width: '16em', height: '3em', margin: 1 }}
              variant='contained'
              color='primary'
              type='submit'
            >
              Edit item
            </Button>
          </form>
          {previewSource && (
            <img src={previewSource} alt='chosen' style={{ height: '200px' }} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
