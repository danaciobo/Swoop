import { Typography } from "@mui/material";


export default function Footer () {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <Typography data-testid="footer" sx={{paddingTop:5, backgroundColor: '#EBE6DD', width: '100%', textAlign: 'center'}}>
        All &copy; copy rights are reserved to Dana Tech {fullYear}
    </Typography>
  );
};