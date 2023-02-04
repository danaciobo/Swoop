import { Typography } from '@mui/material';


export default function Footer () {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (

    <Typography sx={{paddingTop:5, width: '100%', textAlign: 'center'}}>
        All &copy; copy rights are reserved to Dana Tech {fullYear}
    </Typography>

  );
};
