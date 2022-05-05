import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import "./CountryDetailsCard.css";

export default function LoadingIndicator() {
  return (
    <Box className='container' sx={{ display: 'flex' } }>
      <CircularProgress />
      <div>Loading</div>
    </Box>
  );
}