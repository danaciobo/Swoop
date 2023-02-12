import { Box } from '@mui/material';
import MainImage from '../images/main-image.jpg';
export default function Banner() {
  return (
    <Box
      component='img'
      sx={{
        width: '100%',
        maxHeight: 400,
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
      }}
      alt='Shop image'
      src={MainImage}
    />
  );
}
