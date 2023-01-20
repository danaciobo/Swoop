// import { getItemById } from "../services"
// import { useState, useEffect } from 'react'
// import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, List, ListItem, ListItemText, Typography } from "@mui/material";
// import { bgcolor, Container } from "@mui/system";

// export default function ItemDetails({ id }) {

//   const [item, setItem] = useState([]);

//   useEffect(() => {
//     getItemById(id)
//       .then(response => {
//         console.log(response)
//         setItem(response)
//       })
//       .catch(err => console.log(err))
//   }, [])

//   return (
//     <Container>
//       <Box
//         sx={{
//           display: 'flex',
//           float: 'top'
//           direction: 'row',
//           pl: 5,
//           m: 1,
// border: 1,
// borderColor: 'red'        }}
//       >
//       <Box sx={{
//         width: 350,
//         height: 450,
//         marginTop: 5,
//         marginBottom: 10,
//       }}>

//         <img
//           src={`http://localhost:3005/${item.image}`}
//           alt={item.title}
//           height='100%'
//           width='100%'
//           />
//     </Box>
//     <Box sx={{
//         width: 350,
//         height: 450,
//         marginTop: 5,
//         marginBottom: 10,
//       }}>
//         <Typography gutterBottom variant="h5" component="div" align='center'>
//               {item.title}
//             </Typography>
//             <List sx={{ width: '100%', maxWidth: 400, marginTop: 1 }}>
//               <ListItem>
//                 <ListItemText primary="Price" secondary={'$'+ item.price} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Location" secondary={item.location} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Description" secondary={item.description} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Category" secondary={item.category} />
//               </ListItem>
//               <ListItem>
//                 <ListItemText primary="Added" secondary={item.date_added} />
//               </ListItem>
//             </List>
//      </Box>
//      <Box sx={{
//         width: 350,
//         height: 450,
//         marginTop: 5,
//         marginBottom: 10,
//       }}>
//       <Typography gutterBottom variant="h5" component="div" align='left'>
//               {item.seller? item.seller : 'Dana Chubs'}
//             </Typography>
//     </Box>
//     </Box>
//     </Container>
//   )
// }
import React from 'react'

function ItemDetails(Empty) {
  return (
    <div>ItemDetails(Empty)</div>
  )
}

export default ItemDetails(Empty)