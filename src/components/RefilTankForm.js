

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './RefilTankForm.css'
import { Modal } from '@mui/material';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTankAction } from '../store/addRefilOption-slice'
import "react-datepicker/dist/react-datepicker.css";
import RefilTankStepper from './RefilTankStepper';

const RefilTankForm = () => {
  const refilTank = useSelector(state => state.addNewTank.refilTank);
  const dispatch = useDispatch()
  const handleClose = () => dispatch(addTankAction.closeinputHandler())

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius:'20px',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
    sx={{borderRadius:'10px'}}
      open={refilTank}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
          ჭურჭლის შევსების პროცესი
    </Typography>

        {<RefilTankStepper/>}

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        </Typography>
      </Box>
    </Modal>

  )
}

export default RefilTankForm


