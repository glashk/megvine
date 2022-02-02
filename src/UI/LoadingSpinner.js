import { Box, LinearProgress, Modal } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

import './LoadingSpinner.css';

const LoadingSpinner = () => {
  const spinnerStyle = {
    position: 'fixed',

    width: '100%',
  
   top: '55%',
    left: 0,
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    zIndex: 55,
    animation: 'spinner 0.9s  infinite'
  }
  return(  
    <Box sx={spinnerStyle} >
     <CircularProgress disableShrink />
      </Box>)
}

export default LoadingSpinner;
