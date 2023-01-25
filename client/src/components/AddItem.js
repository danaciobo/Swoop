import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addItem } from "../services";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import user from './Login'
import WebcamCapture from "./WebcamCapture";
import { addToStripe } from "../services";
export default function AddItem({ setItems, setFilteredItems, items }) {
  const [cameraPopup, setCameraPopup] = useState(false)
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const [previewSource, setPreviewSource] = useState();
  const [fileInputState] = useState("");
  const handleFileInputChange = (e) => {
    
    const file = e;
    previewFile(file);
  };

  const openCamera = ()=>{
    setCameraPopup(true)
  }
  useEffect(()=>{
    setPreviewSource('')
  },[])
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
      setPreviewSource(reader.result)
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

    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("location", location);
   
    postItem({title, description, category, price, quantity, location, image , seller :user.name});


    e.target.reset();
    handleClose();
  };
  
  const itemsList = items;
  const postItem = async (data) => {
    try {
      console.log('bad man')
      const stripeDetails = await addToStripe({price: (data.price* 100), name: data.title})
      console.log(stripeDetails.default_price.id)
      const post = await addItem({...data, stripeId: stripeDetails.default_price.id});
      setItems((items) => [...items, post]);
      setFilteredItems((filteredItems) => [...itemsList, post]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{ display: { xs: "none", md: "flex", background: "#E25F1C" } }}
        onClick={handleClickOpen}
      >
        Sell Now
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <IconButton sx={{ padding: 0 }} onClick={handleClose}>
            <CloseIcon sx={{ fontSize: "1.3em" }} />
          </IconButton>
        </DialogActions>
        <DialogTitle sx={{ textAlign: "center", padding: 0 }}>
          Add new item for sale
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "2rem",
              maxWidth: "600px",
            }}
          >
            <TextField
              sx={{ width: "30em", marginBottom: "0.7em" }}
              label="Title"
              type="text"
              variant="outlined"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              sx={{ width: "30em", marginBottom: "0.7em" }}
              multiline
              rows={5}
              label="Description"
              variant="standard"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <FormControl
              id="cat-select-label"
              sx={{ width: "30em", marginBottom: "0.7em" }}
            >
              <InputLabel id="cat-select-label">Category</InputLabel>
              <Select
                labelId="cat-select-label"
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={"clothes"}>Clothes</MenuItem>
                <MenuItem value={"accessories"}>Accesories</MenuItem>
                <MenuItem value={"home"}>Home & Garden</MenuItem>
                <MenuItem value={"electronics"}>Electronics</MenuItem>
                <MenuItem value={"hobbies"}>Hobbies</MenuItem>
                <MenuItem value={"freebies"}>Freebies</MenuItem>
              </Select>
            </FormControl>
            <div display="flex" flexDirection="rows">
              <TextField
                sx={{ width: "10em", marginBottom: "0.7em" }}
                label="Price"
                variant="outlined"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <TextField
                sx={{ width: "10em", marginBottom: "0.7em" }}
                label="Quantity"
                variant="outlined"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />

              <TextField
                sx={{ width: "10em", marginBottom: "0.7em" }}
                label="Location"
                variant="outlined"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <input
              accept="image/*"
              style={{ display: "none" }}
              id="contained-button-file"
              value={fileInputState}
              multiple
              type="file"
              onChange={(e) => handleFileInputChange(e.target.files[0])}
              margin="2"
            />

            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Upload
              </Button>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                onClick = {openCamera}
              >
                <PhotoCamera />
                
              </IconButton>
            </label>

            <Button
              sx={{ width: "16em", height: "3em", margin: 1 }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Add item
            </Button>
          </form>
          {cameraPopup && <WebcamCapture setPreviewSource={setPreviewSource} setImage = {setImage} setCameraPopup={setCameraPopup}/>}
          {previewSource && (
            <img src={previewSource} alt="chosen" style={{ height: "200px" }} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
